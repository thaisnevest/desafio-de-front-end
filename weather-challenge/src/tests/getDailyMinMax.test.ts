import { getDailyMinMax } from "@/utils/getDailyMinMax";

describe("getDailyMinMax", () => {
  it("should return correct min and max temperatures", () => {
    const mockList = [
      { main: { temp_min: 10, temp_max: 20 } },
      { main: { temp_min: 5, temp_max: 25 } },
      { main: { temp_min: 8, temp_max: 18 } },
    ];

    const result = getDailyMinMax(mockList);

    expect(result).toEqual({
      min: 5,
      max: 25,
    });
  });

  it("should handle negative temperatures correctly", () => {
    const mockList = [
      { main: { temp_min: -10, temp_max: 0 } },
      { main: { temp_min: -8, temp_max: 5 } },
      { main: { temp_min: -3, temp_max: 13 } }
    ];

    const result = getDailyMinMax(mockList);

    expect(result).toEqual({
      min: -10,
      max: 13,
    });
  });
});