import { ForecastCard } from "@/components/ForecastCard";
import { TemperatureCard } from "@/components/MainTemperature";
import { MetricCard } from "@/components/MetricCard";
import { cities } from "@/data/cities";
import { getCurrentWeather } from "@/services/weather";
import { ForecastWeather, Metric } from "@/types/weather";
import { getWeatherIcon } from "@/utils/getWeatherIcon";
import { getForecast } from "@/services/forecast";
import { mapForecastPeriods } from "@/utils/mapForecastPeriods";
import { getDailyMinMax } from "@/utils/getDailyMinMax";
import Image from "next/image";


export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const city = cities.find(
    (city) => city.slug === slug
  );

  if (!city) {
    return <h1>City not found</h1>;
  }

  const weather = await getCurrentWeather(
  city.lat,
  city.lon
);

const isCold = weather.temperature < 0;
const forecastList = await getForecast(city.lat, city.lon);
const { min, max } = getDailyMinMax(forecastList);
const periods = mapForecastPeriods(forecastList);

const forecasts: ForecastWeather[] = [
  { name: "Dawn", temp: periods.Dawn ?? 0 },
  { name: "Morning", temp: periods.Morning ?? 0 },
  { name: "Afternoon", temp: periods.Afternoon ?? 0 },
  { name: "Night", temp: periods.Night ?? 0 },
];

const metrics: Metric[] = [
  {
    name: "Wind Speed",
    value: weather.windSpeed,
  },
  {
    name: "Sunrise",
    value: weather.sunrise,
    type: "time",
  },
  {
    name: "Sunset",
    value: weather.sunset,
    type: "time",
  },
  {
    name: "Humidity",
    value: weather.humidity,
  },
];

  return (
    <main className={`min-h-screen flex flex-col justify-center items-center gap-6 py-8 px-4 ${
      isCold ? "bg-[#CACACA] text-[#0F0F0F]" : "bg-[#2CAEFF] text-[#F9F9F9]"
    }`}>   
        <div className="gap-1 text-center">
            <h1 className="font-light text-5xl leading-[120%] text-center">{city.name}</h1>
            <p className="font-extralight text-2xl leading-[120%]">{weather.main}</p>
        </div>

        <TemperatureCard weather={weather} min={min} max={max} />

        <Image src={getWeatherIcon(weather.main)} alt={weather.main} width={176} height={176} className={weather.temperature >= 0 ? "invert" : "" }/>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-xl">
            {forecasts.map((forecast) => (
                <ForecastCard key={forecast.name} forecast={forecast} />
            ))}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:mt-10">
            {metrics.map((metric) => (
                <MetricCard key={metric.name} metric={metric} />
            ))}
        </div>

            
    </main>
  );
}