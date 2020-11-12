import { Component } from 'react';
import './Weather.css';


class Weather extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }
  
  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }
  
  tick() {
    this.setState({
      date: new Date()
    })
  }
  
  componentWillMount() {
    clearInterval(this.timerId);
  }
  
  render() {
    
    const date = this.state.date;
    
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const days = [
      'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
    ];
    const hours = [
      12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
      12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
    ];
    
    return (
      <div className="Weather">
        <div id="temp">
          <p>{this.props.temp}</p>
          <span>°C</span>
        </div>
        <div id="weather-details">
          <div id="w-icon">
            <img src={this.props.icon} alt="N/A" />
            <label>{this.props.main}</label>
          </div>
          <div id="date">
            <p>{days[date.getDay()]}, {date.getDate()} {months[date.getMonth()]}</p>
          </div>
          <div id="time">
            <p>{hours[date.getHours()]}:{date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()} {date.getHours() > 12 ? 'pm' : 'am'}</p>
          </div>
        </div>
      </div>
    );
  }
  
}

export default Weather;