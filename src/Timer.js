import React from 'react';

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds : 0,
			minutes : this.props.minutes,
			timerEnabled : false,
			restartFlag : this.props.restartFlag
		};
		this.timerIntervalID = 0;
		this.toggleTimer = this.toggleTimer.bind(this);
		this.restartTimer = this.restartTimer.bind(this);
	}
	
	componentDidUpdate() {
		if(this.props.timerEnabled && !this.state.timerEnabled) {
			this.setState({
				timerEnabled : true
			});
			this.toggleTimer(true);
		}
		
		if(!this.props.timerEnabled && this.state.timerEnabled) {
			this.setState({
				timerEnabled : false
			});
			this.toggleTimer(false);
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
	}
	
	restartTimer() {
		this.setState({
			seconds : 0,
			minutes : this.props.minutes
		});
	}
	
	toggleTimer(startTimer) {
		if(startTimer) {
			this.timerIntervalID = setInterval(() => {
				let minutes = this.state.minutes;
				let seconds = this.state.seconds - 1;
				if(seconds < 0) {
					seconds = 59;
					minutes--;
				}
				if(minutes < 0) {
					console.log("stop!!!");
				}
				this.setState({
					minutes : minutes,
					seconds : seconds
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