import React from 'react';
import './App.css';
import CircularProgressBar from './CircularProgressBar.js';
import Timer from './Timer.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timerEnabled : false,
			progressBarEnabled : "paused",
			// When restartFlag changes value, the app restarts
			restartFlag : false,
			sessionLength : 5,
			breakPoint : 1,
			breakLength : 2
		};
		this.timerEnabledToggle = this.timerEnabledToggle.bind(this);
		this.timerReset = this.timerReset.bind(this);
		this.sessionLengthChange = this.sessionLengthChange.bind(this);
		this.breakPointChange = this.breakPointChange.bind(this);
		this.breakLengthChange = this.breakLengthChange.bind(this);
	}
	
	timerReset() {
		if(this.state.restartFlag) {
			this.setState({
				restartFlag : false
			});
		} else {
			this.setState({
				restartFlag : true
			});
		}
	}
	
	timerEnabledToggle(e) {
		if(this.state.timerEnabled) {
			this.setState({
				timerEnabled : false,
				progressBarEnabled : "paused"
			});
			e.target.classList.remove("fa-pause");
			e.target.classList.add("fa-play");
			
		} else {
			this.setState({
				timerEnabled : true,
				progressBarEnabled : "running"
			});
			e.target.classList.remove("fa-play");
			e.target.classList.add("fa-pause");
		}
	}
	
	sessionLengthChange(e) {
		if(e.target.value === "+" && this.state.sessionLength < 59) {
			this.setState({
				sessionLength : this.state.sessionLength + 1
			});
		} else if (e.target.value === "-" && this.state.sessionLength > 0) {
			this.setState({
				sessionLength : this.state.sessionLength - 1
			});
		}
	}
	
	breakPointChange(e) {
		if(e.target.value === "+" && this.state.breakPoint < this.state.sessionLength) {
			this.setState({
				breakPoint : this.state.breakPoint + 1
			});
		} else if (e.target.value === "-" && this.state.breakPoint > 1) {
			this.setState({
				breakPoint : this.state.breakPoint - 1
			});
		}
	}
	
	breakLengthChange(e) {
		if(e.target.value === "+" && this.state.breakLength < 59) {
			this.setState({
				breakLength : this.state.breakLength + 1
			});
		} else if (e.target.value === "-" && this.state.breakLength > 1) {
			this.setState({
				breakLength : this.state.breakLength - 1
			});
		}
	}

	render() {
		let totalSeconds = this.state.sessionLength * 60;

		return (
			<div className="App">
				<div className="timer-container">
					<Timer 
						timerEnabled={this.state.timerEnabled}
						minutes={this.state.sessionLength}
						restartFlag={this.state.restartFlag}
					/>
					<CircularProgressBar
						restartFlag={this.state.restartFlag}
						countDownTime={totalSeconds}
						progressBarEnabled={this.state.progressBarEnabled}
						progressBarSize={0.7} 
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
						/>
						<div className="control-number">{this.state.sessionLength}</div>
						<button className="button fa fa-minus control-operator" 
							onClick={this.sessionLengthChange}
							value="-"
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
						/>
						<div className="control-number">{this.state.breakPoint}</div>
						<button className="button fa fa-minus control-operator" 
							onClick={this.breakPointChange}
							value="-"
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
						/>
						<div className="control-number">{this.state.breakLength}</div>
						<button className="button fa fa-minus control-operator" 
							onClick={this.breakLengthChange}
							value="-" 
						/>
					</div>
				</fieldset>
				
				<div className="control-container" side="bottom-second">
					<i
						onClick={this.timerEnabledToggle}
						className="button button-control fa fa-play"
					/>
					<i
						onClick={this.timerReset}
						className="button button-control fa fa-refresh"
					/>
				</div>
			</div>
		);
	}
}

export default App;
