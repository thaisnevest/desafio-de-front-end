import { getWeatherIcon } from "@/utils/getWeatherIcon";

// tested only the main weather conditions and the fallback.

describe("getWeatherIcon", () => {
  it("should return correct icon for main weather conditions", () => {
    expect(getWeatherIcon("Clear")).toBe("/weather-icons/clear.svg");
    expect(getWeatherIcon("Rain")).toBe("/weather-icons/rain.svg");
    expect(getWeatherIcon("Clouds")).toBe("/weather-icons/clouds.svg");
  });

  it("should return fallback icon for unknown weather condition", () => {
    expect(getWeatherIcon("AlienWeather")).toBe("/weather-icons/clouds.svg");
    expect(getWeatherIcon("")).toBe("/weather-icons/clouds.svg");
    expect(getWeatherIcon(undefined as any)).toBe("/weather-icons/clouds.svg");
  });
});