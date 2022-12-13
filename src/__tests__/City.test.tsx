/* eslint-disable react/react-in-jsx-scope */
import { describe, it, vitest } from 'vitest';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import axios from 'axios';

import '@testing-library/jest-dom';

import City from '../components/city/City';
import openWeatherMapApi from '../services/OpeWeatherMapApi';

import Cords from '../models/Cords';
import OpenWeartherMap from '../models/OpenWeartherMap';

vitest.mock('axios');

describe('City', () => {
  it('should OpeWeatherMapApi return value', () => {
    act(() => {
      const data: OpenWeartherMap = {
        name: 'Recife',
        weather: [
          {
            icon: '01d',
          },
        ],
      };

      const weather = {
        data,
      };

      axios.get = vitest.fn().mockResolvedValue({
        data: {
          name: 'Recife',
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

      expect(openWeatherMapApi.getWeather(cords)).resolves.toEqual(weather);
    });
  });
});
