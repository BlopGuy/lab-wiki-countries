import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';
import CountriesList from './components/CountryList';
import CountryDetails from './components/CountryDetails';
import { BrowserRouter as Route } from 'react-router-dom';

class App extends React.Component {
  state = {
    countries: []
  }

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        this.setState({
          countries: response.data
        })

      })
  }
  render() {
    const { countries } = this.state;
    return (
      <div className="App">
        <div style={{ float: 'left', height: '900px', overflow: 'scroll' }}>
          <CountriesList countries={countries} />
        </div>
        <div style={{ float: 'right', marginRight: '500px' }}>
          <Route path='/:cca3' component = {CountryDetails}></Route>
        </div>
      </div>
    );
  }

}

export default App;
