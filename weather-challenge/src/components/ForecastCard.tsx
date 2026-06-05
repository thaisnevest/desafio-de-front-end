import { ForecastWeather } from "@/types/weather";
import Image from "next/image";

interface ForecastCardProps {
    forecast: ForecastWeather;
}

export const forecastIcons = {
  Dawn: "/icons/dawn.svg",
  Morning: "/icons/morning.svg",
  Afternoon: "/icons/afternoon.svg",
  Night: "/icons/night.svg",
} as const;


export function ForecastCard({ forecast }: ForecastCardProps) {
    return (
        <div className="flex flex-col items-center gap-4 text-xl font-extralight w-[92px] h-[128px]">
            <span>{forecast.name}</span>
            <Image src={forecastIcons[forecast.name]} alt={`${forecast.name} icon`} width={48} height={48} className={forecast.temp >= 0 ? "invert" : ""} />
            <span>{Math.round(forecast.temp)}°C</span>
        </div>
    );
}