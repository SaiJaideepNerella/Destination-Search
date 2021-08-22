// Write your code here
import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {destinationDetails} = this.props
    const {name, imgUrl} = destinationDetails
    return (
      <li className="destination-items">
        <img src={imgUrl} className="destination-image" alt={name} />
        <p className="name">{name}</p>
      </li>
    )
  }
}
export default DestinationItem
