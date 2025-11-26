// Static example dataset: 8 countries with a few states/cities each.
// You can expand as needed.
export const weatherData = [
  {
    country: 'United States',
    code: 'US',
    states: [
      { name: 'New York', temp: 12, humidity: 60, wind: 6, condition: 'cloudy' },
      { name: 'San Francisco', temp: 16, humidity: 70, wind: 5, condition: 'fog' },
      { name: 'Miami', temp: 28, humidity: 80, wind: 8, condition: 'sunny' },
    ],
  },
  {
    country: 'United Kingdom',
    code: 'UK',
    states: [
      { name: 'London', temp: 9, humidity: 75, wind: 12, condition: 'rain' },
      { name: 'Manchester', temp: 7, humidity: 78, wind: 10, condition: 'rain' },
    ],
  },
  {
    country: 'India',
    code: 'IN',
    states: [
      { name: 'Chennai', temp: 33, humidity: 60, wind: 5, condition: 'sunny' },
      { name: 'Mumbai', temp: 30, humidity: 70, wind: 7, condition: 'cloudy' },
      { name: 'Delhi', temp: 26, humidity: 40, wind: 6, condition: 'haze' },
    ],
  },
  {
    country: 'Australia',
    code: 'AU',
    states: [
      { name: 'Sydney', temp: 22, humidity: 55, wind: 10, condition: 'sunny' },
      { name: 'Melbourne', temp: 18, humidity: 60, wind: 9, condition: 'cloudy' },
    ],
  },
  {
    country: 'Canada',
    code: 'CA',
    states: [
      { name: 'Toronto', temp: -2, humidity: 65, wind: 12, condition: 'snow' },
      { name: 'Vancouver', temp: 7, humidity: 80, wind: 8, condition: 'rain' },
    ],
  },
  {
    country: 'Germany',
    code: 'DE',
    states: [
      { name: 'Berlin', temp: 6, humidity: 70, wind: 7, condition: 'cloudy' },
      { name: 'Munich', temp: 4, humidity: 75, wind: 6, condition: 'snow' },
    ],
  },
  {
    country: 'Japan',
    code: 'JP',
    states: [
      { name: 'Tokyo', temp: 15, humidity: 60, wind: 6, condition: 'clear' },
      { name: 'Osaka', temp: 17, humidity: 63, wind: 5, condition: 'clear' },
    ],
  },
  {
    country: 'Brazil',
    code: 'BR',
    states: [
      { name: 'São Paulo', temp: 24, humidity: 70, wind: 6, condition: 'cloudy' },
      { name: 'Rio de Janeiro', temp: 29, humidity: 75, wind: 8, condition: 'sunny' },
    ],
  }
];
