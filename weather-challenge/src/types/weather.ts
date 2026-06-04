export interface CurrentWeather {
  temperature: number;
  tempMin: number;
  tempMax: number;
  main: string;

  windSpeed: number;
  sunrise: number;
  sunset: number;
  humidity: number;
}

export interface ForecastWeather {
  name: 'Dawn' | 'Morning' | 'Afternoon' | 'Night';
  temp: number;
}


export interface Metric {
  name: "Wind Speed" | "Sunrise" | "Sunset" | "Humidity";
  value: number | string;
  type?: "number" | "time" | "percent";
}
