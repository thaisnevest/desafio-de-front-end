export function getWeatherIcon(main: string) {
  const icons: Record<string, string> = {
    Clear: "/weather-icons/clear.svg",
    Clouds: "/weather-icons/clouds.svg",
    Rain: "/weather-icons/rain.svg",
    Drizzle: "/weather-icons/drizzle.svg",
    Thunderstorm: "/weather-icons/thunderstorm.svg",
    Snow: "/weather-icons/snow.svg",
    Smoke: "/weather-icons/smoke.svg",
    Fog: "/weather-icons/fog.svg",
    Sand: "/weather-icons/sand.svg",
    Ash: "/weather-icons/ash.svg",
    Squall: "/weather-icons/squall.svg",
    Tornado: "/weather-icons/tornado.svg",
  };

  return icons[main] || "/weather-icons/clouds.svg";
}