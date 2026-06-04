import Link from "next/link";
import { City } from "@/types/city";

interface CityCardProps {
  city: City;
}

export default function CityCard({ city }: CityCardProps) {
  return (
    <Link href={`/city/${city.slug}`}>
      {city.name}
    </Link>
  );
}