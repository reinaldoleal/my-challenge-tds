import { useState } from 'react';

import Home from './pages/home/Home';
import City from './components/city/City';

import Cords from './models/Cords';

function App() {
  const [city, setCity] = useState<Cords>({ lat: 0, lon: 0 });

  const selectCity = (props: Cords) => {
    setCity(props);
  };

  const clearCity = () => {
    setCity({ lat: 0, lon: 0 });
  };

  return (
    <div>
      {city.lat === 0 ? (
        <Home selectCity={selectCity} />
      ) : (
        <City cords={city} clearCity={clearCity} />
      )}
    </div>
  );
}

export default App;
