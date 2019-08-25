import React from 'react';
import './CircularProgressBar.css';

class CircularProgressBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			restartFlag : this.props.restartFlag
		};
		this.restartAnimation = this.restartAnimation.bind(this);
	}
	
	componentDidUpdate() {
		if(this.state.restartFlag !== this.props.restartFlag) {
			this.setState({
				restartFlag : this.props.restartFlag
			});
			this.restartAnimation();
		}
	}
	
	restartAnimation() {
		let progressBar = document.getElementById(this.props.id+"progressBar");
		let oldWrapper = document.getElementById(this.props.id+"wrapper");
		let RightSpin = document.getElementById(this.props.id+"right-spin");
		let LeftSpin = document.getElementById(this.props.id+"left-spin");
		oldWrapper.parentElement.removeChild(oldWrapper);
		
		progressBar.appendChild(oldWrapper);
		let newWrapper = document.getElementById(this.props.id+"wrapper");
		newWrapper.appendChild(LeftSpin);
		newWrapper.appendChild(RightSpin);
	}
	
	render() {
		let animationState = "";
		if(this.props.id === this.props.sessionTimerId) {
			animationState = this.props.sessionTimerState;
		} else if(this.props.id === this.props.breakTimerId) {
			animationState = this.props.breakTimerState;
		}
		
		let cssLeftSpin = {
			animationDuration : this.props.countDownTime+'s',
			animationPlayState : animationState,
			borderColor : this.props.progressBarColor
		};
		let cssRightSpin = {
			animationDuration : this.props.countDownTime/2+'s',
			animationDelay : this.props.countDownTime/2+'s',
			animationPlayState : animationState,
			borderColor : this.props.progressBarColor
		};
		let cssWrapper = {
			animationDelay : this.props.countDownTime/2+'s',
			animationPlayState : animationState
		};
		let cssCircularProgressBar = {
			transform : 'scale('+this.props.progressBarSize+')'
		};		
		
		return (
			<div id={this.props.id+"progressBar"} className="CircularProgressBar" style={cssCircularProgressBar} >
				<div className="start-gap" part="left" />
				<div className="start-gap" part="right" />
				<div className="circle-background" />
				<div id={this.props.id+"wrapper"} className="wrapper" style={cssWrapper}>
					<div id={this.props.id+"right-spin"} className="circle right-spin" style={cssRightSpin} />
					<div id={this.props.id+"left-spin"} className="circle left-spin" style={cssLeftSpin} />
				</div>
			</div>
		);
	}
}

export default CircularProgressBar;