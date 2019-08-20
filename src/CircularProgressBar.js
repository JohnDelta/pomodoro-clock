import React from 'react';
import './CircularProgressBar.css';

class CircularProgressBar extends React.Component {
	render() {
		let cssLeftSpin = {
			animationDuration : this.props.countDownTime+'s',
			animationPlayState : this.props.progressBarEnabled
		};
		let cssRightSpin = {
			animationDuration : this.props.countDownTime/2+'s',
			animationDelay : this.props.countDownTime/2+'s',
			animationPlayState : this.props.progressBarEnabled
		};
		let cssWrapper = {
			animationDelay : this.props.countDownTime/2+'s',
			animationPlayState : this.props.progressBarEnabled
		};
		let cssCircularProgressBar = {
			transform : 'scale('+this.props.progressBarSize+')'
		};		
		
		return (
			<div className="CircularProgressBar" style={cssCircularProgressBar}>
				<div className="start-gap" part="left" />
				<div className="start-gap" part="right" />
				<div className="circle-background" />
				<div className="wrapper" style={cssWrapper}>
					<div className="circle right-spin" style={cssRightSpin} />
					<div className="circle left-spin" style={cssLeftSpin} />
				</div>
			</div>
		);
	}
}

export default CircularProgressBar;