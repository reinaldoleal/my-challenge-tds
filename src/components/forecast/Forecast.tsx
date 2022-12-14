import OpenWeartherMap from '../../models/OpenWeartherMap';

type ForecastProps = {
  weather: OpenWeartherMap;
};

function Forecast({ weather }: ForecastProps) {
  return (
    <div className="forcast">
      <div className="forcast-time">
        <div>
          <span>dawn</span>
        </div>
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather?.[0].icon}.png`}
            alt="Weather"
          />
        </div>
        <div>
          <p>13&deg; C</p>
        </div>
      </div>
      <div className="forcast-time">
        <div>
          <span>morning</span>
        </div>
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather?.[0].icon}.png`}
            alt="Weather"
          />
        </div>
        <div>
          <p>15&deg; C</p>
        </div>
      </div>
      <div className="forcast-time">
        <div>
          <span>afternoon</span>
        </div>
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather?.[0].icon}.png`}
            alt="Weather"
          />
        </div>
        <div>
          <p>15&deg; C</p>
        </div>
      </div>
      <div className="forcast-time">
        <div>
          <span>night</span>
        </div>
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather?.[0].icon}.png`}
            alt="Weather"
          />
        </div>
        <div>
          <p>15&deg; C</p>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
