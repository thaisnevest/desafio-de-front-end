import { mapForecastPeriods } from "@/utils/mapForecastPeriods";

describe("mapForecastPeriods", () => {
  it("should map forecast timestamps to correct daily periods", () => {
    const mockList = [
      { dt_txt: "2026-06-04 03:00:00", main: { temp: 10 } },
      { dt_txt: "2026-06-04 09:00:00", main: { temp: 15 } },
      { dt_txt: "2026-06-04 15:00:00", main: { temp: 20 } },
      { dt_txt: "2026-06-04 21:00:00", main: { temp: 12 } },
    ];

    const result = mapForecastPeriods(mockList);

    expect(result).toEqual({
      Dawn: 10,
      Morning: 15,
      Afternoon: 20,
      Night: 12,
    });
  });
});