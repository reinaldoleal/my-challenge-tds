import axios from "axios";

export const getWeather = (cords: any) => {
  return axios.get(import.meta.env.VITE_OPEN_WHEATHER_API, {
    params: {
      lat: cords.lat,
      lon: cords.lon,
      appid: import.meta.env.VITE_OPEN_WHEATHER_KEY,
      lang: "eng",
      units: "metric",
    },
  });
};

export const getHourly = (cords: any) => {
  return axios.get(import.meta.env.VITE_OPEN_WHEATHER_HOURLY_API, {
    params: {
      lat: cords.lat,
      lon: cords.lon,
      appid: import.meta.env.VITE_OPEN_WHEATHER_KEY,
      lang: "eng",
      units: "metric",
    },
  });
};
