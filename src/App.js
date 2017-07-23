import React, { Component } from 'react';
import './App.css';
import data from './names';

class App extends Component {
	constructor() {
		super();
		this.selectName = this.selectName.bind(this)
		this.selectRandomNumber = this.selectRandomNumber.bind(this)
		this.state = {
			names: data,
			winner: ''
		}
	}

	selectRandomNumber(min, max) {
		min = Math.ceil(min)
		max = Math.floor(max)
		return Math.floor(Math.random() * (max - min + 1)) + min
	}

	selectName() {
		let totalNameLength = this.state.names.length
		let number = this.selectRandomNumber(0, totalNameLength)
		let winner = this.state.names[number].name
		return this.setState({winner: winner})
	}

	render() {
		return (
			<div className="App">
				<button className="raffleButton" onClick={this.selectName}>Select Winner</button>
				<h2>{this.state.winner}</h2>
			</div>
		);
	}
}

export default App;
