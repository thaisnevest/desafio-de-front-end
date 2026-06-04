type ForecastItem = {
  dt_txt: string;
  main: {
    temp: number;
  };
};

function getHour(dt_txt: string) {
  return Number(dt_txt.split(" ")[1].split(":")[0]);
}

export function mapForecastPeriods(list: ForecastItem[]) {
  let dawn = null;
  let morning = null;
  let afternoon = null;
  let night = null;

  list.forEach((item) => {
    const hour = getHour(item.dt_txt);

    if (hour === 3) dawn = item.main.temp;
    if (hour === 9) morning = item.main.temp;
    if (hour === 15) afternoon = item.main.temp;
    if (hour === 21) night = item.main.temp;
  });

  return {
    Dawn: dawn,
    Morning: morning,
    Afternoon: afternoon,
    Night: night,
  };
}