// Write your code here

import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(previousState => ({balance: previousState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const firstChar = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="cash-withdrawal-container">
          <div className="name-container">
            <p className="character-s">{firstChar}</p>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <div className="amount-container">
              <p className="remaining-amount">{balance}</p>
              <br />
              <span className="currency">In Rupees</span>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-option">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
