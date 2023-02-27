import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
  {
    id: 'MADRID',
    capitalDisplayText: 'Madrid',
    country: 'Spain',
  },
  {
    id: 'MOSCOW',
    capitalDisplayText: 'Moscow',
    country: 'Russia',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  optionChanged = event => {
    console.log(event.target.value)
    this.setState({
      activeCapitalId: event.target.value,
    })
  }

  getCountry = () => {
    const {activeCapitalId} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalId,
    )
    console.log(activeCountryAndCapital)

    return activeCountryAndCapital.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry()

    return (
      <div className="bg">
        <div className="app-container">
          <h1 className="head">Countries And Capitals</h1>
          <div className="ques-container">
            <select
              value={activeCapitalId}
              className="capitals"
              onChange={this.optionChanged}
            >
              {countryAndCapitalsList.map(each => (
                <option value={each.id} key={each.id} className="option">
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="label">is capital of which country?</p>
          </div>
          <h1 className="country">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
