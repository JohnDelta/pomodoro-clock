import React from 'react';
import './CircularProgressBar.css';

class CircularProgressBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			cssRightSpin : {
				animationDuration : 0+'s',
				animationDelay : 0+'s'
			},
			cssLeftSpin : {
				animationDuration : 0+'s',
				animationDelay : 0+'s'
			},
			cssWrapper : {
				animationDuration : 0+'s'
			},
			cssCircularProgressBar : {
				transform : 'scale(1)'
			}
		};
	}
	
	componentDidMount() {
		this.setState({
			cssRightSpin : {
				animationDuration : this.props.countDownTime/2+'s',
				animationDelay : this.props.countDownTime/2+'s'
			},
			cssLeftSpin : {
				animationDuration : this.props.countDownTime+'s'
			},
			cssWrapper : {
				animationDelay : this.props.countDownTime/2+'s'
			},
			cssCircularProgressBar : {
				transform : 'scale('+this.props.progressBarSize+')'
			}
		});
	}
	
	render() {
		return (
			<div className="CircularProgressBar" style={this.state.cssCircularProgressBar}>
				<div className="circle-background" />
				<div className="wrapper" style={this.state.cssWrapper}>
					<div className="circle right-spin" style={this.state.cssRightSpin} />
					<div className="circle left-spin" style={this.state.cssLeftSpin} />
				</div>
			</div>
		);
	}
}

export default CircularProgressBar;