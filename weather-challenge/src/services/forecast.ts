const API_KEY = process.env.OPENWEATHER_API_KEY;

export async function getForecast(lat: number, lon: number) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );

  if (!res.ok) {
    throw new Error("Erro ao buscar forecast");
  }

  const data = await res.json();

  return data.list;
}