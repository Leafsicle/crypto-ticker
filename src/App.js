import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Bank from './Bank'
import axios from 'axios'
// import Footer from './Footer'

class App extends Component {
	componentDidMount() {
		axios
			.get(`https://api.coinmarketcap.com/v2/ticker/?limit=40`)
			.then(response => {
				this.setState(response.data)
			})
	}
	render() {
		return (
			<div>
				<Header />
				<Bank />
			</div>
		)
	}
}

export default App
