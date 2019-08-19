import React from 'react';
import './App.css';
import CircularProgressBar from './CircularProgressBar.js';

class App extends React.Component {

	render() {
		return (
			<div className="App">
				<CircularProgressBar time={"10s"}/>
			</div>
		);
	}
}

export default App;
