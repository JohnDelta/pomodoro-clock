import React from 'react';
import './App.css';
import CircularProgressBar from './CircularProgressBar.js';
import Timer from './Timer.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timerFlag : false
		};
		this.timerFlagToggle = this.timerFlagToggle.bind(this);
	}
	
	timerFlagToggle() {
		if(this.state.timerFlag) {
			this.setState({
				timerFlag : false
			});
		} else {
			this.setState({
				timerFlag : true
			});
		}
	}

	render() {
		return (
			<div className="App">
				<Timer 
					timerFlag={this.state.timerFlag}
				/>
				<CircularProgressBar 
					countDownTime={3} 
					progressBarSize={0.7} 
				/>
				<button
					onClick={this.timerFlagToggle}
				>
					press me!!
				</button>
			</div>
		);
	}
}

export default App;
