const API_KEY = "a6cf1bc46ed15e0b7440f92af8856cff";

export async function searchCity(query) {
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=10&appid=${API_KEY}`;
  const res = await fetch(url);
  return res.json();
}
