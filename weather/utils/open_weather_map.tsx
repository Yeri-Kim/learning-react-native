const WEATHER_API_KEY = 'bbeb34ebf60ad50f7893e7440a1e2b0b';
const API_STEM = 'http://api.openweathermap.org/data/2.5/weather?';

const zipUrl = zip => `${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`;

const fetchForecast = async zip => {
  const res = await fetch(zipUrl(zip));
  const result = await res.json();

  return result.cod === '404' ? {
    main: '',
    desc: '',
    temp: 0
  } : {
    main: result.weather[0].main,
    desc: result.weather[0].description,
    temp: result.main.temp
  }
};

export default fetchForecast;