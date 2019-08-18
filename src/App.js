import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
		<div className="wrapper" data-anim="base wrapper">
		  <div className="circle left-spin" data-anim="base right"></div>
		  <div className="circle right-spin" data-anim="base right"></div>
		</div>
    </div>
  );
}

export default App;
