import React from 'react';

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds : 0,
			minutes : this.props.sessionLength,
			breakMinutes : this.props.breakLength,
			breakSeconds : 0,
			sessionLength : this.props.sessionLength,
			breakLength : this.props.breakLength,
			timerPaused : this.props.timerPaused,
			timerEnabled : true,
			restartFlag : this.props.restartFlag,
			breakPoint : this.props.breakPoint,
			minutesToBreakPoint : this.props.breakPoint
		};
		this.timerIntervalID = 0;
		this.breakTimerIntervalID = 0;
		this.toggleTimer = this.toggleTimer.bind(this);
		this.restartTimer = this.restartTimer.bind(this);
		this.toggleBreakTimer = this.toggleBreakTimer.bind(this);
	}
	
	componentDidUpdate() {
		if(this.props.timerPaused !== this.state.timerPaused) {
			this.setState({
				timerPaused : this.props.timerPaused
			});
			this.toggleTimer(this.props.timerPaused);
		}
		
		if(this.state.restartFlag !== this.props.restartFlag) {
			this.setState({
				restartFlag : this.props.restartFlag
			});
			this.restartTimer();
		}
		
		if(this.state.timerPaused && (this.props.sessionLength !== this.state.sessionLength
			|| this.props.breakPoint !== this.state.breakPoint || this.props.breakLength !== this.state.breakLength)) {
			this.props.timerReset();
		}
	}
	
	restartTimer() {
		this.setState({
			seconds : 0,
			minutes : this.props.sessionLength,
			minutesToBreakPoint : this.props.breakPoint,
			sessionLength : this.props.sessionLength,
			breakLength : this.props.breakLength,
			breakPoint : this.props.breakPoint,
			breakMinutes : this.props.breakLength,
			breakSeconds : 0,
		});
	}
	
	toggleTimer(timerPaused) {
		if(!timerPaused && this.state.timerEnabled) {
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
					this.toggleBreakTimer();
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
	
	toggleBreakTimer() {
		clearInterval(this.timerIntervalID);
		this.setState({
			timerEnabled : false
		});
		
		if(!this.state.timerPaused) {
			this.breakTimerIntervalID = setInterval(() => {
				let minutes = this.state.breakMinutes;
				let seconds = this.state.breakSeconds;console.log(seconds);
				seconds--;
				if(seconds < 0) {
					minutes--;
					seconds = 59;
				}
				if(minutes < 0) {
					clearInterval(this.breakTimerIntervalID);
					this.setState({
						timerEnabled : true,
						breakLength : this.props.breakLength
					});
					this.toggleTimer();
				}
				this.setState({
					breakMinutes : minutes,
					breakSeconds : seconds
				});
			},1000);
		} else {
			this.setState({
				timerEnabled : true
			});
			clearInterval(this.breakTimerIntervalID);
			this.toggleTimer(this.state.timerPaused);
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