// Write your code here

import './index.css'

const DemominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button
        className="denomination-button"
        type="button"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DemominationItem
