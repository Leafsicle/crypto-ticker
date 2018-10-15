import React, { Component } from 'react'
import Coin from './Coin'
import Coins from './Coins.json'

class Bank extends Component {
	constructor(props) {
		super(props)
		this.state = { coins: [] }
	}
	fetchData = () => {
		fetch('https://api.coinmarketcap.com/v2/ticker/?limit=100')
			.then(response => {
				return response.json()
			})
			.then(myJson => {
				const newData = Object.values(myJson.data)
				this.setState({ coins: newData })
			})
	}
	componentDidMount() {
		this.fetchData()
		setInterval(() => {
			this.fetchData()
		}, 10000)
	}

	render() {
		let coins = Object.keys(this.state.coins).map(id => {
			let coin = this.state.coins[id]
			return (
				<Coin
					ranking={coin.rank}
					name={coin.name}
					symbol={coin.symbol}
					price={coin.quotes.USD.price}
					oneHourChange={coin.quotes.USD.percent_change_1h}
					oneDayChange={coin.quotes.USD.percent_change_24h}
				/>
			)
		})
		return (
			<div>
				<table>
					<tr class="toprow">
						<td className="ranking">Rank</td>
						<td className="name">Name</td>
						<td className="symbol">Symbol</td>
						<td className="price">Price</td>
						<td className="oneHourChange">1hour Change</td>
						<td className="oneDayChange">24hour Change</td>
					</tr>
					{coins}
				</table>
			</div>
		)
	}
}

export default Bank
