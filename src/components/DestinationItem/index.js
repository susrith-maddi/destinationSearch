// Write your code here
import './index.css'

const DestinationItem = props => {
  const {singleDestination} = props
  const {name, imgUrl} = singleDestination
  return (
    <li className="li">
      <img src={imgUrl} alt={name} className="img" />
      <p>{name}</p>
    </li>
  )
}
export default DestinationItem
