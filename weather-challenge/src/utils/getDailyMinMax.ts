export function getDailyMinMax(list: any[]) {
  let min = Infinity;
  let max = -Infinity;

  list.forEach((item) => {
    min = Math.min(min, item.main.temp_min);
    max = Math.max(max, item.main.temp_max);
  });

  return { min, max };
}