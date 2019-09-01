import React from 'react';

/*
	Beep sound : https://freesound.org/data/previews/402/402853_7769958-lq.mp3
*/

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sessionMinutes : this.props.sessionLength,
			sessionSeconds : 0,
			
			breakMinutes : this.props.breakLength,
			breakSeconds : 0,
			
			minutesToBreakPoint : this.props.breakPoint,
			
			sessionTimerState : this.props.sessionTimerState,
			breakTimerState : this.props.breakTimerState,
			
			restartFlag : this.props.restartFlag,
			
			volumeFlag : true
		};
		
		this.audio = new Audio("https://freesound.org/data/previews/402/402853_7769958-lq.mp3");
		
		this.timerIntervalID = 0;
		this.breakTimerIntervalID = 0;
		
		this.updateSessionTimer = this.updateSessionTimer.bind(this);
		this.updateBreakTimer = this.updateBreakTimer.bind(this);
		
		this.reset = this.reset.bind(this);
		
		this.volumeChange = this.volumeChange.bind(this);
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
					if(minutes !== this.props.sessionLength//don't break from the starting point
						&& this.props.breakLengthFlag) {
							minutesToBreakPoint--;
					}
				}
				
				if(minutesToBreakPoint <= 0) {
					/*Ring one time to notify that the break has started*/
					if(this.state.volumeFlag) {
						let times = 0;
						this.audio.addEventListener('ended',() => {
							times++;
							if(times < 1) {
								this.audio.play();
							}
						});
						this.audio.play();
					}
					
					this.props.updateTimerState(this.props.breakTimerId, "running");
				}
				
				if(minutes < 0) {
					/*Ring three times to notify that the session has finished*/
					if(this.state.volumeFlag) {
						let times = 0;
						this.audio.addEventListener('ended',() => {
							times++;
							if(times < 3) {
								this.audio.play();
							}
						});
						this.audio.play();
					}
					
					clearInterval(this.timerIntervalID);
					this.props.reset();
				} else {
					this.setState({
						sessionMinutes : minutes,
						sessionSeconds : seconds,
						minutesToBreakPoint : minutesToBreakPoint
					});
				}
			}, 1000);
		} else if(sessionTimerState === "paused") {
			clearInterval(this.timerIntervalID);
		} else {
			console.log("Unknown argument given in updateSessionTimer function.");
		}
	}
	
	updateBreakTimer(breakTimerState) {
		if(breakTimerState === "running") {
			this.props.updateTimerState(this.props.sessionTimerId, "paused");
			
			this.breakTimerIntervalID = setInterval(() => {
				let seconds = this.state.breakSeconds;
				let minutes = this.state.breakMinutes;
				
				seconds--;
				if(seconds < 0) {
					seconds = 59;
					minutes--;
				}
				
				if(minutes < 0) {
					/*Ring two times to notify that the break has finished*/
					if(this.state.volumeFlag && this.state.sessionMinutes > 0) {
						let times = 0;
						this.audio.addEventListener('ended',() => {
							times++;
							if(times < 2) {
								this.audio.play();
							}
						});
						this.audio.play();
					}
					
					minutes = this.props.breakLength;
					seconds = 0;
					
					this.setState({
						minutesToBreakPoint : this.props.breakPoint
					});
					
					this.props.reset("breakTimer");
					this.props.updateTimerState(this.props.breakTimerId, "paused");
					this.props.updateTimerState(this.props.sessionTimerId, "running");
				}
				
				this.setState({
					breakSeconds : seconds,
					breakMinutes : minutes
				});
				
			}, 1000);
			
		} else if (breakTimerState === "paused") {
			clearInterval(this.breakTimerIntervalID);
		} else {
			console.log("Unknown argument given in updateBreakTimer function.");
		}
	}
	
	reset() {
		this.setState({
			sessionSeconds : 0,
			sessionMinutes : this.props.sessionLength,
			
			breakMinutes : this.props.breakLength,
			breakSeconds : 0,
			
			minutesToBreakPoint : this.props.breakPoint
		});
		
		this.props.updateTimerState(this.props.sessionTimerId, "paused");
		this.props.updateTimerState(this.props.breakTimerId, "paused");
	}
	
	volumeChange(e) {
		let flag = !this.state.volumeFlag;
		this.setState({
			volumeFlag : flag
		});
		
		let id = document.getElementById(e.target.id);
		if(flag) {
			id.classList.remove("fa-volume-off");
			id.classList.add("fa-volume-up");
		} else {
			id.classList.remove("fa-volume-up");
			id.classList.add("fa-volume-off");
		}
	}

	render() {
		// Session time string
		let sessionTime = "";
		if(this.state.sessionMinutes < 10) sessionTime = "0" + this.state.sessionMinutes;
		else sessionTime = this.state.sessionMinutes;
		sessionTime += ":";
		if(this.state.sessionSeconds < 10) sessionTime += "0" + this.state.sessionSeconds;
		else sessionTime += this.state.sessionSeconds;
		
		// Break timer string
		let breakTime = "";
		if(this.state.breakMinutes < 10) breakTime = "0" + this.state.breakMinutes;
		else breakTime = this.state.breakMinutes;
		breakTime += ":";
		if(this.state.breakSeconds < 10) breakTime += "0" + this.state.breakSeconds;
		else breakTime += this.state.breakSeconds;
		
		// paused & running state timer style
		let sessionTimerStyle = {};
		let breakTimerStyle = {};
		if(this.state.sessionTimerState === "paused") {
			sessionTimerStyle = {opacity : "0.8"};
		}
		if(this.state.breakTimerState === "paused") {
			breakTimerStyle = {opacity : "0.8"};
		}
		
		if(!this.props.breakLengthFlag) {
			breakTimerStyle.color = "#182f54";
		}
		
		return (
			<div className="Timer">
				<div className="display">
					<button id="volume" onClick={this.volumeChange} className="fa fa-volume-up" />
				
					<div className="sessionTime" style={sessionTimerStyle}>
						{sessionTime}
					</div>
					
					<div className="breakTime" style={breakTimerStyle}>
						{breakTime}
					</div>
				</div>
			</div>
		);
	}
}

export default Timer;