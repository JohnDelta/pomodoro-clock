import React from 'react';
import './App.css';
import CircularProgressBar from './CircularProgressBar.js';
import Timer from './Timer.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sessionTimerState : "paused",
			breakTimerState : "paused",
			previousSessionTimerState : "running",
			previousBreakTimerState : "paused",
			
			// When restartFlag changes value, the app restarts
			timerEnabledFlag : false,
			resetSessionTimerFlag : false,
			resetBreakTimerFlag : false,
			sessionLength : 5,
			breakPoint : 1,
			breakLength : 1
		};
		
		/*Handle state of timers*/
		this.sessionTimerId = "sessionTimer";
		this.breakTimerId = "breakTimer";
		this.updateTimerState = this.updateTimerState.bind(this);
		
		/*Handle UI changes*/
		this.reset = this.reset.bind(this);
		this.resetBtn = this.resetBtn.bind(this);
		this.toggleTimer = this.toggleTimer.bind(this);
		this.sessionLengthChange = this.sessionLengthChange.bind(this);
		this.breakPointChange = this.breakPointChange.bind(this);
		this.breakLengthChange = this.breakLengthChange.bind(this);
	}
	
	updateTimerState(timerId, state) {
		if(timerId === this.sessionTimerId) {
			switch(state) {
				case "paused" : 
					this.setState({
						sessionTimerState : "paused"
					});
				break;
				case "running" :
					this.setState({
						sessionTimerState : "running"
					});
				break;
				default : 
					console.log("Unknown argument given in updateTimerState function.");
				break;
			}
		} else if (timerId === this.breakTimerId) {
			switch(state) {
				case "paused" : 
					this.setState({
						breakTimerState : "paused"
					});
				break;
				case "running" :
					this.setState({
						breakTimerState : "running"
					});
				break;
				default : 
					console.log("Unknown argument given in updateTimerState function.");
				break;
			}
		} else {
			console.log("Unknown argument given in updateTimerState function.");
		}
	}
	
	toggleTimer(e) {
		let id = document.getElementById("toggleTimerBtn");
		if(this.state.timerEnabledFlag) {
			id.classList.remove("fa-pause");
			id.classList.add("fa-play");
			
			this.setState({
				timerEnabledFlag : false,
				previousSessionTimerState : this.state.sessionTimerState,
				previousBreakTimerState : this.state.breakTimerState
			});
			
			this.updateTimerState(this.sessionTimerId, "paused");
			this.updateTimerState(this.breakTimerId, "paused");
		} else {
			id.classList.remove("fa-play");
			id.classList.add("fa-pause");
			
			this.setState({
				timerEnabledFlag : true
			});
			
			this.updateTimerState(this.sessionTimerId, this.state.previousSessionTimerState);
			this.updateTimerState(this.breakTimerId, this.state.previousBreakTimerState);
		}
	}
	
	reset(type="all") {
		if(type === "all") {
			this.setState({
				resetSessionTimerFlag : !this.state.resetSessionTimerFlag,
				resetBreakTimerFlag : !this.state.resetBreakTimerFlag
			});
			
			let id = document.getElementById("toggleTimerBtn");
			id.classList.remove("fa-pause");
			id.classList.remove("fa-play");
			id.classList.add("fa-play");
			
			this.setState({
				timerEnabledFlag : false,
				previousSessionTimerState : "running",
				previousBreakTimerState : "paused"
			});
			
			this.updateTimerState(this.sessionTimerId, "paused");
			this.updateTimerState(this.breakTimerId, "paused");
		} else if (type === "sessionTimer") {
			this.setState({
				resetSessionTimerFlag : !this.state.resetSessionTimerFlag
			});
		} else if (type === "breakTimer") {
			this.setState({
				resetBreakTimerFlag : !this.state.resetBreakTimerFlag
			});
		}
	}
	
	resetBtn(e) {
		this.reset();
	}
	
	sessionLengthChange(e) {
		if(e.target.value === "+") {
			if(this.state.sessionLength < 59) {
				this.setState({
					sessionLength : this.state.sessionLength + 1
				});
			} else {
				this.setState({
					sessionLength : 1
				});
			}
		} else if (e.target.value === "-") {
			if(this.state.sessionLength > 1) {
				this.setState({
					sessionLength : this.state.sessionLength - 1
				});
			} else {
				this.setState({
					sessionLength : 59
				});
			}
		}
	}
	
	breakPointChange(e) {
		if(e.target.value === "+") {
			if(this.state.breakPoint < this.state.sessionLength) {
				this.setState({
					breakPoint : this.state.breakPoint + 1
				});
			} else {
				this.setState({
					breakPoint : 1
				});
			}
		} else if (e.target.value === "-") {
			if(this.state.breakPoint > 1) {
				this.setState({
					breakPoint : this.state.breakPoint - 1
				});
			} else {
				this.setState({
					breakPoint : this.state.sessionLength
				});
			}
		}
	}
	
	breakLengthChange(e) {
		if(e.target.value === "+") {
			if(this.state.breakLength < 59) {
				this.setState({
					breakLength : this.state.breakLength + 1
				});
			} else {
				this.setState({
					breakLength : 1
				});
			}
		} else if (e.target.value === "-") {
			if(this.state.breakLength > 1) {
				this.setState({
					breakLength : this.state.breakLength - 1
				});
			} else {
				this.setState({
					breakLength : 59
				});
			}
		}
	}

	render() {
		let sessionTotalSeconds = this.state.sessionLength * 60;
		let breakTotalSeconds = this.state.breakLength * 60 + 1;
		let buttonStyle = {};
		if(this.state.timerEnabledFlag) {
			buttonStyle = {
				pointerEvents : "none",
				color : "#182f54"
			};
		}

		return (
			<div className="App">
				<div className="timer-container">
					<Timer
						updateTimerState={this.updateTimerState}
						
						sessionTimerState={this.state.sessionTimerState}
						breakTimerState={this.state.breakTimerState}
						
						sessionTimerId={this.sessionTimerId}
						breakTimerId={this.breakTimerId}
						
						sessionLength={this.state.sessionLength}
						breakPoint={this.state.breakPoint}
						breakLength={this.state.breakLength}
						
						restartFlag={this.state.resetSessionTimerFlag}
						reset={this.reset}
					/>
					
					<CircularProgressBar //Session Progress Bar Timer
						id={this.sessionTimerId}
						sessionTimerId={this.sessionTimerId}
						breakTimerId={this.breakTimerId}
						
						sessionTimerState={this.state.sessionTimerState}
						restartFlag={this.state.resetSessionTimerFlag}
						
						countDownTime={sessionTotalSeconds}
						progressBarSize={0.7}
						progressBarColor={"#4287f5"}
					/>
					
					<CircularProgressBar //Break Progress Bar Timer
						id={this.breakTimerId}
						sessionTimerId={this.sessionTimerId}
						breakTimerId={this.breakTimerId}
						
						breakTimerState={this.state.breakTimerState}
						restartFlag={this.state.resetBreakTimerFlag}
						
						countDownTime={breakTotalSeconds}
						progressBarSize={0.9}
						progressBarColor={"#91d5ff"}
					/>
				</div>
				
				<fieldset className="control-container" side="left">
					<legend>
						<p className="container-title">Session Length</p>
					</legend>
					<div className="content">
						<button className="button fa fa-plus control-operator"
							onClick={this.sessionLengthChange}
							value="+"
							style={buttonStyle}
						/>
						<div className="control-number">{this.state.sessionLength}</div>
						<button className="button fa fa-minus control-operator" 
							onClick={this.sessionLengthChange}
							value="-"
							style={buttonStyle}
						/>
					</div>
				</fieldset>
				
				<fieldset className="control-container" side="right">
					<legend>
						<p className="container-title">Break Point</p>
					</legend>
					<div className="content">
						<button className="button fa fa-plus control-operator" 
							onClick={this.breakPointChange}
							value="+"
							style={buttonStyle}
						/>
						<div className="control-number">{this.state.breakPoint}</div>
						<button className="button fa fa-minus control-operator" 
							onClick={this.breakPointChange}
							value="-"
							style={buttonStyle}
						/>
					</div>
				</fieldset>
				
				<fieldset className="control-container" side="bottom-first">
					<legend>
						<p className="container-title">Break Length</p>
					</legend>
					<div className="content">
						<button className="button fa fa-plus control-operator" 
							onClick={this.breakLengthChange}
							value="+"
							style={buttonStyle}
						/>
						<div className="control-number">{this.state.breakLength}</div>
						<button className="button fa fa-minus control-operator" 
							onClick={this.breakLengthChange}
							value="-" 
							style={buttonStyle}
						/>
					</div>
				</fieldset>
				
				<div className="control-container" side="bottom-second">
					<i
						id="toggleTimerBtn"
						onClick={this.toggleTimer}
						className="button button-control fa fa-play"
					/>
					<i
						onClick={this.resetBtn}
						className="button button-control fa fa-refresh"
					/>
				</div>
			</div>
		);
	}
}

export default App;
