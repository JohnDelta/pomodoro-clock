import React from 'react';
import './CircularProgressBar.css';

class CircularProgressBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			cssRightSpin : {
				animationDuration : 0,
				animationDelay : 0
			},
			cssLeftSpin : {
				animationDuration : 0,
				animationDelay : 0
			},
			cssWrapper : {
				animationDuration : 0
			}
		};
	}
	
	componentDidMount() {
		this.setState({
			cssRightSpin : {
				animationDuration : this.props.time,
				animationDelay : 0
			},
			cssLeftSpin : {
				animationDuration : this.props.time,
				animationDelay : this.props.time
			},
			cssWrapper : {
				animationDelay : this.props.time
			}
		});
	}
	
	render() {
		return (
			<div className="CircularProgressBar">
				<div className="wrapper" style={this.state.cssWrapper}>
					<div className="circle right-spin" style={this.state.cssRightSpin} />
					<div className="circle left-spin" style={this.state.cssLeftSpin} />
				</div>
			</div>
		);
	}
}

export default CircularProgressBar;