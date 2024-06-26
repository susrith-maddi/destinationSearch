// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    inputSearch: '',
  }

  onChangeSearch = event => {
    this.setState({inputSearch: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {inputSearch} = this.state
    const searchResults = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(inputSearch.toLowerCase()),
    )
    return (
      <div className="destinationSearch">
        <h1>Destination Search</h1>
        <div className="search">
          <input type="search" onChange={this.onChangeSearch} />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-img"
          />
        </div>
        <ul className="ul">
          {searchResults.map(each => (
            <DestinationItem singleDestination={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
