/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown,
  faArrowUp,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';

import openWeartherMapApi from '../../services/OpeWeatherMapApi';

import backgrounds from '../../mocks/backgrounds';
import Cords from '../../models/Cords';
import OpenWeartherMap from '../../models/OpenWeartherMap';

type PropsCity = {
  cords: Cords;
  clearCity: any;
};

function City({ ...props }: PropsCity) {
  const [weather, setWeather] = useState<OpenWeartherMap>({
    id: 0,
    name: '',
    weather: [{}],
    main: {
      temp: 0,
      temp_max: 0,
      temp_min: 0,
      humidity: 0,
    },
    sys: {
      sunrise: 0,
      sunset: 0,
    },
    wind: {
      speed: 0,
    },
  });

  const [styleContainer, setStyleContainer] = useState('default');

  const backgroundColor = (id: string) => {
    const background = backgrounds?.filter((item) => {
      return item.id === id;
    })?.[0] || { backgroundName: 'default' };

    setStyleContainer(background.backgroundName);
  };

  useEffect(() => {
    openWeartherMapApi.getWeather(props.cords).then((resp) => {
      setWeather(resp.data);
      backgroundColor(resp.data.weather[0].icon);
    });
  }, []);

  return (
    <div className={`container-weather ${styleContainer}`}>
      <div className="nav">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={props.clearCity}
          className="nav-icon"
        />
      </div>
      {weather.name && (
        <div key={weather.id}>
          <div className="weather">
            <div>
              <p>{weather.name.toUpperCase()}</p>
              <span>{weather.weather?.[0].description}</span>
            </div>
          </div>
          <div className="temp">
            <div className="temp-now">
              <span>{Math.trunc(weather.main?.temp || 0)}</span>
            </div>
            <div className="temp-now-others">
              <div className="temp-now-others-ground">
                <p>&deg;C</p>
              </div>
              <div className="temp-now-others-max">
                <div className="temp-now-others-icon">
                  <FontAwesomeIcon icon={faArrowUp} />
                </div>
                <div className="temp-now-others-font">
                  <p>{Math.trunc(weather.main?.temp_max || 0)}&deg;</p>
                </div>
              </div>
              <div className="temp-now-others-min">
                <div className="temp-now-others-icon">
                  <FontAwesomeIcon icon={faArrowDown} />
                </div>
                <div className="temp-now-others-font">
                  <p>{Math.trunc(weather.main?.temp_min || 0)}&deg;</p>
                </div>
              </div>
            </div>
          </div>
          <div className="temp-img">
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
              alt="Weather"
            />
          </div>
          <div className="forcast">
            <div className="forcast-time">
              <div>
                <span>dawn</span>
              </div>
              <div>
                <img
                  src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}.png`}
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
                  src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}.png`}
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
                  src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}.png`}
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
                  src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}.png`}
                  alt="Weather"
                />
              </div>
              <div>
                <p>15&deg; C</p>
              </div>
            </div>
          </div>
          <div className="others">
            <div className="others-grid">
              <p>wind speed</p>
              <span>{weather?.wind?.speed}m/s</span>
            </div>
            <hr className={styleContainer} />
            <div className="others-grid">
              <p>sunrise</p>
              <span>{format(weather?.sys?.sunrise || 0, 'HH:MM')} AM</span>
            </div>
            <hr className={styleContainer} />
            <div className="others-grid">
              <p>sunset</p>
              <span>{format(weather?.sys?.sunset || 0, 'HH:MM')} PM</span>
            </div>
            <hr className={styleContainer} />
            <div className="others-grid">
              <p>humidity</p>
              <span>{weather?.main?.humidity}%</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default City;
