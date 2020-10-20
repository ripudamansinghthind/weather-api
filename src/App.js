
import React from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';


const API_KEY = 'ba1e88a3fb438de19ba098609b8c04a8';
class App extends React.Component {
  state = {
    temperature: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      })
  } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please Enter a value :)'
      })
  }
}
  render() {
    return (
      <div className="card">
        <div className="row-card">
          <div className='column-1-card'>
            <Titles />
          </div>
          <div className='column-2-card'>
            <Form getWeather = {this.getWeather} />
            <Weather 
            temperature={ this.state.temperature }
            city = { this.state.city }
            country = { this.state.country }
            humidity = { this.state.humidity }
            description = { this.state.description }
            error = { this.state.error } />
          </div>
        </div>
      </div>
    );
  }
}

export default App;