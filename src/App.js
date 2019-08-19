import React from 'react';
import './App.css';
import CircularProgressBar from './CircularProgressBar.js';

class App extends React.Component {

	render() {
		return (
			<div className="App">
				<div className="display">234:233</div>
				<CircularProgressBar 
					countDownTime={10} 
					progressBarSize={1} 
				/>
			</div>
		);
	}
}

export default App;
