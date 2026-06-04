import { CurrentWeather } from "@/types/weather";

const API_KEY = process.env.OPENWEATHER_API_KEY;

export async function getCurrentWeather(
  lat: number,
  lon: number
): Promise<CurrentWeather> {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  
  const data = await response.json();

  console.log(data.main)

  if (!response.ok) {
    throw new Error("Erro ao buscar clima");
  }

  return {
    temperature: data.main.temp,
    tempMin: data.main.temp_min,
    tempMax: data.main.temp_max,
    main: data.weather[0].main,
    windSpeed: data.wind.speed,
    humidity: data.main.humidity,
    sunrise: data.sys.sunrise, // 👈 timestamp cru
    sunset: data.sys.sunset,   // 👈 timestamp cru
  };
};