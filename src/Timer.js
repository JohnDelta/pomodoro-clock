import React from 'react';

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds : 0,
			minutes : 0,
			timerFlag : false
		};
		this.timerIntervalID = 0;
		this.toggleTimer = this.toggleTimer.bind(this);
	}
	
	componentDidUpdate() {
		if(this.props.timerFlag && !this.state.timerFlag) {
			this.setState({
				timerFlag : true
			});
			this.toggleTimer(true);
		}
		
		if(!this.props.timerFlag && this.state.timerFlag) {
			this.setState({
				timerFlag : false
			});
			this.toggleTimer(false);
		}
	}
	
	toggleTimer(startTimer) {
		if(startTimer) {
			this.timerIntervalID = setInterval(() => {
				console.log("start");
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