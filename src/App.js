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
			progressBarEnabled : "paused"
		};
		this.timerEnabledToggle = this.timerEnabledToggle.bind(this);
	}
	
	timerEnabledToggle() {
		if(this.state.timerEnabled) {
			this.setState({
				timerEnabled : false,
				progressBarEnabled : "paused"
			});
		} else {
			this.setState({
				timerEnabled : true,
				progressBarEnabled : "running"
			});
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
					/>
					<CircularProgressBar 
						countDownTime={totalSeconds}
						progressBarEnabled={this.state.progressBarEnabled}
						progressBarSize={0.7} 
					/>
				</div>
				
				<button
					onClick={this.timerEnabledToggle}
				>
					press me!!
				</button>
			</div>
		);
	}
}

export default App;
