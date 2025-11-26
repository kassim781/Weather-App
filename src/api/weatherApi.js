const API_KEY = "a6cf1bc46ed15e0b7440f92af8856cff";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function fetchCurrentWeather(city) {
  const url = `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`;
  const res = await fetch(url);
  return res.json();
}

export async function fetchForecast(city) {
  const url = `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`;
  const res = await fetch(url);
  return res.json();
}
