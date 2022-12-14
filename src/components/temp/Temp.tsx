import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import OpenWeartherMap from '../../models/OpenWeartherMap';

type TempProps = {
  weather: OpenWeartherMap;
};

function Temp({ weather }: TempProps) {
  return (
    <>
      <div className="temp">
        <div className="temp-now">{Math.trunc(weather.main?.temp || 0)}</div>
        <div className="temp-now-others">
          <div className="temp-now-others-ground">&deg;C</div>
          <div className="temp-now-others-max">
            <div className="temp-now-others-icon">
              <FontAwesomeIcon icon={faArrowUp} />
            </div>
            <div className="temp-now-others-font">
              {Math.trunc(weather.main?.temp_max || 0)}&deg;
            </div>
          </div>
          <div className="temp-now-others-min">
            <div className="temp-now-others-icon">
              <FontAwesomeIcon icon={faArrowDown} />
            </div>
            <div className="temp-now-others-font">
              {Math.trunc(weather.main?.temp_min || 0)}&deg;
            </div>
          </div>
        </div>
      </div>
      <div className="temp-img">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
          alt="Weather"
        />
      </div>
    </>
  );
}

export default Temp;
