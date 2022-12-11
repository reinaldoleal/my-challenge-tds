import axios from 'axios';
import Cords from '../models/Cords';

const OpenWeatherMapApi = {
  getWeather: async (cords: Cords) => {
    return axios.get(import.meta.env.VITE_OPEN_WHEATHER_API, {
      params: {
        lat: cords.lat,
        lon: cords.lon,
        appid: import.meta.env.VITE_OPEN_WHEATHER_KEY,
        lang: 'eng',
        units: 'metric',
      },
    });
  },
  getHourly: async (cords: Cords) => {
    return axios.get(import.meta.env.VITE_OPEN_WHEATHER_HOURLY_API, {
      params: {
        lat: cords.lat,
        lon: cords.lon,
        appid: import.meta.env.VITE_OPEN_WHEATHER_KEY,
        lang: 'eng',
        cnt: 4,
      },
    });
  },
};

export default OpenWeatherMapApi;
