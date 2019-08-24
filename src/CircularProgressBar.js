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
		if(!this.state.restartFlag && this.props.restartFlag) {
			this.setState({
				restartFlag : true
			});
			this.restartAnimation();
		}
		
		if(this.state.restartFlag && !this.props.restartFlag) {
			this.setState({
				restartFlag : false
			});
			this.restartAnimation();
		}
	}
	
	restartAnimation() {
		let progressBar = document.getElementById("progressBar");
		let oldWrapper = document.getElementById("wrapper");
		let RightSpin = document.getElementById("right-spin");
		let LeftSpin = document.getElementById("left-spin");
		oldWrapper.parentElement.removeChild(oldWrapper);
		
		progressBar.appendChild(oldWrapper);
		let newWrapper = document.getElementById("wrapper");
		newWrapper.appendChild(LeftSpin);
		newWrapper.appendChild(RightSpin);
	}
	
	render() {
		let cssLeftSpin = {
			animationDuration : this.props.countDownTime+'s',
			animationPlayState : this.props.progressBarEnabled,
			borderColor : this.props.progressBarColor
		};
		let cssRightSpin = {
			animationDuration : this.props.countDownTime/2+'s',
			animationDelay : this.props.countDownTime/2+'s',
			animationPlayState : this.props.progressBarEnabled,
			borderColor : this.props.progressBarColor
		};
		let cssWrapper = {
			animationDelay : this.props.countDownTime/2+'s',
			animationPlayState : this.props.progressBarEnabled
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