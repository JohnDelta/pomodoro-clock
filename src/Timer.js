import React from 'react';

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sessionLength : this.props.sessionLength,
			sessionMinutes : this.props.sessionLength,
			sessionSeconds : 0,
			
			breakLength : this.props.breakLength,
			breakMinutes : this.props.breakLength,
			breakSeconds : 0,
			
			breakPoint : this.props.breakPoint,
			minutesToBreakPoint : this.props.breakPoint,
			
			sessionTimerState : this.props.sessionTimerState,
			breakTimerState : this.props.breakTimerState,
			
			restartFlag : this.props.restartFlag
		};
		
		this.timerIntervalID = 0;
		this.breakTimerIntervalID = 0;
		
		this.updateSessionTimer = this.updateSessionTimer.bind(this);
		this.updateBreakTimer = this.updateBreakTimer.bind(this);
		
		this.reset = this.reset.bind(this);
	}
	
	componentDidUpdate() {
		if(this.props.sessionTimerState !== this.state.sessionTimerState) {
			this.setState({
				sessionTimerState : this.props.sessionTimerState
			});
			this.updateSessionTimer(this.props.sessionTimerState);
		}
		
		if(this.props.breakTimerState !== this.state.breakTimerState) {
			this.setState({
				breakTimerState : this.props.breakTimerState
			});
			this.updateBreakTimer(this.props.breakTimerState);
		}
		
		if(this.props.restartFlag !== this.state.restartFlag) {
			this.setState({
				restartFlag : this.props.restartFlag
			});
			this.reset();
		}
	}
	
	updateSessionTimer(sessionTimerState) {
		if(sessionTimerState === "running") {
			this.timerIntervalID = setInterval(() => {
				let minutesToBreakPoint = this.state.minutesToBreakPoint;
				let minutes = this.state.sessionMinutes;
				let seconds = this.state.sessionSeconds - 1;
				
				if(seconds < 0) {
					seconds = 59;
					minutes--;
				}
				
				if(seconds === 0) {
					if(minutes !== this.state.sessionLength) {//don't break from the starting point
						minutesToBreakPoint--;
					}
				}
				
				if(minutesToBreakPoint === 0) {
					this.props.updateTimerState(this.props.breakTimerId, "running");
				}
				
				if(minutes < 0) {
					console.log("stop!!!");
					this.props.updateTimerState(this.props.sessionTimerId, "paused");
					this.props.reset();
				}
				
				this.setState({
					sessionMinutes : minutes,
					sessionSeconds : seconds,
					minutesToBreakPoint : minutesToBreakPoint
				});
			},1000);
		} else if(sessionTimerState === "paused") {
			clearInterval(this.timerIntervalID);
		} else {
			console.log("Unknown argument given in updateSessionTimer function.");
		}
	}
	
	updateBreakTimer(breakTimerState) {
		this.props.updateTimerState(this.props.sessionTimerId, "paused");
		
		if(breakTimerState === "running") {
			console.log("I'm running!");
		} else if (breakTimerState === "paused") {
			console.log("I'm paused.");
		} else {
			console.log("Unknown argument given in updateBreakTimer function.");
		}
	}
	
	reset() {
		this.setState({
			sessionLength : this.props.sessionLength,
			sessionSeconds : 0,
			sessionMinutes : this.props.sessionLength,
			
			breakLength : this.props.breakLength,
			breakMinutes : this.props.breakLength,
			breakSeconds : 0,
			
			minutesToBreakPoint : this.props.breakPoint,
			breakPoint : this.props.breakPoint
		});
		
		this.props.updateTimerState(this.props.sessionTimerId, "paused");
		this.props.updateTimerState(this.props.breakTimerId, "paused");
	}

	render() {	
		let time = "";
		if(this.state.sessionMinutes < 10) time = "0" + this.state.sessionMinutes;
		else time = this.state.sessionMinutes;
		time += ":";
		if(this.state.sessionSeconds < 10) time += "0" + this.state.sessionSeconds;
		else time += this.state.sessionSeconds;
		
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