import { cities } from "@/data/cities";
import CityCard from "@/components/CityCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-start items-center min-h-screen pt-10 gap-6 md:gap-8 md:pt-[150px]">
      
      <div className="gap-1">
        <h1 className="font-light text-5xl leading-[120%] text-center">Weather</h1>
        <p className="font-extralight text-2xl leading-[120%] text-center">Select a city</p>
      </div>

      <Image src="/world.svg" alt="World icon" width={176} height={176}/>

      <div className="grid grid-cols-3 grid-rows-2 gap-6 md:gap-8 text-xl font-normal place-items-center">
        {cities.map((city) => (
          <CityCard
            key={city.slug}
            city={city}
          />
        ))}
      </div>
    </main>
  );
}