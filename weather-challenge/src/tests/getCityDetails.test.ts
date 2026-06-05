import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CityPage from "@/app/city/[slug]/page";

import * as weatherService from "@/services/weather";
import * as forecastService from "@/services/forecast";

jest.mock("@/services/weather");
jest.mock("@/services/forecast");

const mockCity = {
  name: "Recife",
  slug: "recife",
  lat: 0,
  lon: 0,
};

describe("getCityDetails", () => {
  beforeEach(() => {
    (weatherService.getCurrentWeather as jest.Mock).mockResolvedValue({
      temperature: 28,
      main: "Clear",
      windSpeed: 10,
      sunrise: "06:00",
      sunset: "18:00",
      humidity: 70,
    });

    (forecastService.getForecast as jest.Mock).mockResolvedValue([
      { dt_txt: "2026-06-04 03:00:00", main: { temp: 10 } },
      { dt_txt: "2026-06-04 09:00:00", main: { temp: 20 } },
    ]);
  });

  it("should render city page content", async () => {
    const Page = await CityPage({
      params: Promise.resolve({ slug: "recife" }),
    });

    render(Page);

    expect(await screen.findByText("Recife")).toBeInTheDocument();
    expect(await screen.findByText("Clear")).toBeInTheDocument();
  });
});