/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { describe, it, vitest } from 'vitest';
import { render } from '@testing-library/react';

import axios from 'axios';

import '@testing-library/jest-dom';

import City from '../components/city/City';
import openWeatherMapApi from '../services/OpeWeatherMapApi';

import Cords from '../models/Cords';

vitest.mock('axios');

describe('City', () => {
  it('should OpeWeatherMapApi return value', async () => {
    const weather = {
      data: {
        name: 'TESTE',
        weather: [
          {
            icon: '01d',
          },
        ],
      },
    };

    axios.get = vitest.fn().mockResolvedValue({
      data: {
        name: 'TESTE',
        weather: [
          {
            icon: '01d',
          },
        ],
      },
    });

    const cords: Cords = {
      lat: 0,
      lon: 0,
    };

    render(<City cords={cords} clearCity={() => {}} />);

    await expect(openWeatherMapApi.getWeather(cords)).resolves.toEqual(weather);
  });
});
