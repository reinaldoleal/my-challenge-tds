import axios from 'axios';
import Cords from '../models/Cords';

export const getWeather = (cords: Cords) => {
  return axios.get(import.meta.env.VITE_OPEN_WHEATHER_API, {
    params: {
      lat: cords.lat,
      lon: cords.lon,
      appid: import.meta.env.VITE_OPEN_WHEATHER_KEY,
      lang: 'eng',
      units: 'metric',
    },
  });
};

export const getHourly = (cords: Cords) => {
  return axios.get(import.meta.env.VITE_OPEN_WHEATHER_HOURLY_API, {
    params: {
      lat: cords.lat,
      lon: cords.lon,
      appid: import.meta.env.VITE_OPEN_WHEATHER_KEY,
      lang: 'eng',
      units: 'metric',
    },
  });
};
