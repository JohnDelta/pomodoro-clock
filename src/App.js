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
	
	timerEnabledToggle(e) {
		if(this.state.timerEnabled) {
			this.setState({
				timerEnabled : false,
				progressBarEnabled : "paused"
			});
			e.target.classList.remove("fa-pause-circle");
			e.target.classList.add("fa-play-circle");
			
		} else {
			this.setState({
				timerEnabled : true,
				progressBarEnabled : "running"
			});
			e.target.classList.remove("fa-play-circle");
			e.target.classList.add("fa-pause-circle");
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
				
				<i
					onClick={this.timerEnabledToggle}
					className="button fa fa-play-circle"
				/>
			</div>
		);
	}
}

export default App;
