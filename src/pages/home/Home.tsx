/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useState } from 'react';
import Cords from '../../models/Cords';
import City from '../../components/city/City';

import cities from '../../mocks/cities';

function Home() {
  const [city, setCity] = useState<Cords>({
    lat: 0,
    lon: 0,
  });

  const selectCity = (props: Cords) => {
    setCity(props);
  };

  const clearCity = () => {
    setCity({ lat: 0, lon: 0 });
  };

  return (
    <>
      {city.lat === 0 && (
        <div className="container">
          <div className="center">
            <div className="header">
              <p className="title">WEATHER</p>
              <span>select a city</span>
            </div>
            <div className="globo">
              <div className="globo-img">
                <img src="./src/assets/img/earth.png" alt="globo" />
              </div>
            </div>
            <div className="cities">
              {cities.map((item) => (
                <div key={item.id} className="cities-item">
                  <span
                    onClick={() => selectCity(item.cords)}
                    onKeyUp={() => selectCity(item.cords)}
                  >
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {city.lat !== 0 && <City cords={city} clearCity={clearCity} />}
    </>
  );
}

export default Home;
