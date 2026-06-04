import { CurrentWeather } from "@/types/weather";
import Image from "next/image";
import { getDailyMinMax } from "@/utils/getDailyMinMax";

interface MainTemperatureProps {
    weather: CurrentWeather;
    min: number;
    max: number;
}

export function TemperatureCard({ weather, min, max }: MainTemperatureProps) {
    return (
    <div className="flex items-start justify-center font-extralight gap-2">
      
      <span className="text-9xl font-extralight leading-[120%]">
        {Math.round(weather.temperature)}
      </span>

      <div className="flex flex-col justify-between gap-6 py-4">
        
        <span className="text-[42px] font-extralight leading-[120%]">°C</span>
        
        <div className="flex flex-col text-base font-extralight">
          <span className="flex items-center gap-1">
            <Image src="/max.svg" alt="Max temperature" width={16} height={16} className="invert" />
            <span>{Math.round(max)}°</span>
          </span>
          <span className="flex items-center gap-1">
            <Image src="/min.svg" alt="Min temperature" width={16} height={16} className="invert" />   
            <span>{Math.round(min)}°</span>
          </span>
        </div>

      </div>

    </div>
    );
}