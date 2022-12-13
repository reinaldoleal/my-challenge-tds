/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import openWeartherMapApi from '../../services/OpeWeatherMapApi';

import backgrounds from '../../mocks/backgrounds';
import Cords from '../../models/Cords';
import OpenWeartherMap from '../../models/OpenWeartherMap';

import Others from '../others/Others';
import Forecast from '../forecast/Forecast';
import Temp from '../temp/Temp';

type PropsCity = {
  cords: Cords;
  clearCity: any;
};

function City({ cords, clearCity = () => {} }: PropsCity) {
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
    openWeartherMapApi.getWeather(cords).then((resp) => {
      setWeather(resp.data);
      backgroundColor(resp.data.weather[0].icon);
    });
  }, []);

  return (
    <div className={`container-weather ${styleContainer}`}>
      <div className="nav" onClick={clearCity} onKeyUp={clearCity}>
        <FontAwesomeIcon icon={faArrowLeft} className="nav-icon" />
      </div>
      <div className="container-weather-center">
        {weather.name && (
          <div key={weather.id}>
            <div className="weather">
              <div>
                <p>{weather.name.toUpperCase()}</p>
                <span>{weather.weather?.[0].description}</span>
              </div>
            </div>
            <Temp weather={weather} />
            <Forecast weather={weather} />
            <Others weather={weather} styleContainer={styleContainer} />
          </div>
        )}
      </div>
    </div>
  );
}

export default City;
