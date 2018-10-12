import React, { Component } from 'react'
import Coin from './Coin'
import Coins from './Coins.json'

class Bank extends Component {
	render() {
		let coins = Object.keys(Coins.data).map(id => {
			let coin = Coins.data[id]
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
