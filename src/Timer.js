import React from 'react';

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds : 0,
			minutes : this.props.sessionLength,
			sessionLength : this.props.sessionLength,
			timerEnabled : this.props.timerEnabled,
			restartFlag : this.props.restartFlag,
			breakPoint : this.props.breakPoint,
			minutesToBreakPoint : this.props.breakPoint
		};
		this.timerIntervalID = 0;
		this.toggleTimer = this.toggleTimer.bind(this);
		this.restartTimer = this.restartTimer.bind(this);
	}
	
	componentDidUpdate() {
		if(this.props.timerEnabled !== this.state.timerEnabled) {
			this.setState({
				timerEnabled : this.props.timerEnabled
			});
			this.toggleTimer(this.props.timerEnabled);
		}
		
		if(!this.state.restartFlag && this.props.restartFlag) {
			this.setState({
				restartFlag : true
			});
			this.restartTimer();
		}
		
		if(this.state.restartFlag && !this.props.restartFlag) {
			this.setState({
				restartFlag : false
			});
			this.restartTimer();
		}
		
		if(!this.state.timerEnabled && (this.props.sessionLength !== this.state.sessionLength
			|| this.props.breakPoint !== this.state.breakPoint)) {
			this.setState({
				sessionLength : this.props.sessionLength,
				breakPoint : this.props.breakPoint,
				minutesToBreakPoint : this.props.breakPoint,
				minutes : this.props.sessionLength,
				seconds : 0
			});
		}
	}
	
	restartTimer() {
		this.setState({
			seconds : 0,
			minutes : this.props.sessionLength,
			minutesToBreakPoint : this.props.breakPoint
		});
	}
	
	toggleTimer(startTimer) {
		if(startTimer) {
			this.timerIntervalID = setInterval(() => {
				let minutesToBreakPoint = this.state.minutesToBreakPoint;
				let minutes = this.state.minutes;
				let seconds = this.state.seconds - 1;
				if(seconds < 0) {
					seconds = 59;
					minutes--;
				}
				if(seconds === 0) {
					if(minutes !== this.state.sessionLength) {//don't break from the starting point
						minutesToBreakPoint--;
					}
				}
				if(minutes < 0) {
					console.log("stop!!!");
				}
				if(minutesToBreakPoint <= 0) {
					console.log("breaaaakk!!!!");
					minutesToBreakPoint = this.state.breakPoint;
				}
				this.setState({
					minutes : minutes,
					seconds : seconds,
					minutesToBreakPoint : minutesToBreakPoint
				});
			},1000);
		} else {
			clearInterval(this.timerIntervalID);
		}
	}

	render() {	
		let time = "";
		if(this.state.minutes < 10) time = "0" + this.state.minutes;
		else time = this.state.minutes;
		time += ":";
		if(this.state.seconds < 10) time += "0" + this.state.seconds;
		else time += this.state.seconds;
		
		return (
			<div className="Timer">
				<div className="display">
					{time}
				</div>
			</div>
		);
	}
}

export default Timer;