import React from 'react';
import './App.css';
import CircularProgressBar from './CircularProgressBar.js';
import Timer from './Timer.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timerEnabled : false,
			minutes : 3,
			seconds : 0,
			progressBarEnabled : "paused",
			// When restartFlag changes value, the app restarts
			restartFlag : false
		};
		this.timerEnabledToggle = this.timerEnabledToggle.bind(this);
		this.timerReset = this.timerReset.bind(this);
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

	render() {
		let totalSeconds = this.state.minutes * 60;

		return (
			<div className="App">
				<div className="timer-container">
					<Timer 
						timerEnabled={this.state.timerEnabled}
						minutes={this.state.minutes}
						seconds={this.state.seconds}
						restartFlag={this.state.restartFlag}
					/>
					<CircularProgressBar
						restartFlag={this.state.restartFlag}
						countDownTime={totalSeconds}
						progressBarEnabled={this.state.progressBarEnabled}
						progressBarSize={0.7} 
					/>
				</div>
				<div className="bottom-container">
					<i
						onClick={this.timerEnabledToggle}
						className="button fa fa-play"
					/>
					<i
						onClick={this.timerReset}
						className="button fa fa-refresh"
					/>
				</div>
				<div className="side-container" side="right">
					<p className="container-title">Session Length</p>
					<i className="fa fa-plus control-operator" />
					<i className="control-number">34</i>
					<i className="fa fa-minus control-operator" />
				</div>
				<div className="side-container" side="left">
					<p className="container-title">Session Length</p>
					<i className="fa fa-plus control-operator" />
					<i className="control-number">34</i>
					<i className="fa fa-minus control-operator" />
				</div>
				<div className="bottom-container">
					<p className="container-title">Break Length</p>
				</div>
			</div>
		);
	}
}

export default App;
