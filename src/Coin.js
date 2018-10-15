import React, { Component } from 'react'

class Coin extends Component {
	state = {}
	render() {
		return (
			<tr class="coin #">
				<td className="ranking">{this.props.ranking}</td>
				<td className="name">{this.props.name}</td>
				<td className="symbol">{this.props.symbol}</td>
				<td className="price">{this.props.price}</td>
				<td className="delta1Hour">{this.props.oneHourChange}</td>
				<td className="delta24Hour">{this.props.oneDayChange}</td>
			</tr>
		)
	}
}

export default Coin
