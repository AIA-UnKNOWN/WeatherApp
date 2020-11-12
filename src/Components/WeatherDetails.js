import './WeatherDetails.css';


function WeatherDetails(props) {
  return (
    <div id="WeatherDetails">
      <div className="Details">
        <div id="city-country">
          {props.city}, {props.country}
        </div>
        <div id="description">
          {props.desc}
        </div>
      </div>
      <p className="Details">Wind</p>
      <div className="Details">
        <div className="wind">
          <p className="wind-label">Speed</p>
          <p className="wind-label-value">{props.windSpeed}</p>
        </div>
        <div className="wind">
          <p className="wind-label">Degree</p>
          <p className="wind-label-value">{props.windDeg}</p>
        </div>
        <div className="wind">
          <p className="wind-label">Gust</p>
          <p className="wind-label-value">{props.windGust}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;