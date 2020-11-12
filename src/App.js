import { Component } from 'react';
import './App.css';

import Weather from './Components/Weather';
import LocationSearch from './Components/LocationSearch';
import WeatherDetails from './Components/WeatherDetails';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.getValue = this.getValue.bind(this);
    this.state = {
      location: 'Baliuag',
      api: null,
      loaded: false
    }
  }
  
  componentDidMount() {
    this.timerId = setInterval(
      () => this.updateApi(),
      1000
    );
  }
  
  updateApi() {
    const location = this.state.location;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f8c6e17977b1c186cae65d7b92ecee25`;
    
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          location,
          api: data,
          loaded: true
        })
      });
  }
  
  componentWillMount() {
    clearInterval(this.timerId);
  }
  
  getValue() {
    // Get the value
    const loc = document.querySelector('#locationSearch');
    
    if (loc.value !== '') {
      this.setState({
        location: loc.value
      })
    }
    
    loc.value = '';
  }
  
  render() {
    const api = this.state.api;
    const loaded = this.state.loaded;
    
    return (
      <div className="App">
        <div id="WeatherApp">
          <LocationSearch
            search={this.getValue}
          />
          <Weather
            temp={!loaded || !api ? 'N/A' : Math.floor(api.main.temp)}
            icon={!loaded || !api ? null : `http://openweathermap.org/img/wn/${api.weather[0].icon}.png`}
            main={!loaded || !api ? null : api.weather[0].main}
          />
          <WeatherDetails
            city={!loaded || !api ? 'N/A' : api.name}
            country={!loaded || !api ? 'N/A' : api.sys.country}
            desc={!loaded || !api ? 'N/A' : api.weather[0].description}
            windSpeed={!loaded || !api ? 'N/A' : api.wind.speed}
            windDeg={!loaded || !api ? 'N/A' : api.wind.deg}
            windGust={!loaded || !api ? 0 : api.wind.gust || 0}
          />
        </div>
      </div>
    );
  }
  
}

export default App;
