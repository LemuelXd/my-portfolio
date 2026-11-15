// Vercel serverless proxy: keep the OpenWeatherMap API key on the server.
export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;
  if (!apiKey) {
    return res.status(503).json({ error: "Weather service is not configured." });
  }

  const { city, lat, lon } = req.query || {};
  const hasCity = typeof city === "string" && city.trim().length > 0;
  const hasCoordinates = Number.isFinite(Number(lat)) && Number.isFinite(Number(lon));

  if (!hasCity && !hasCoordinates) {
    return res.status(400).json({ error: "Provide a city or valid latitude and longitude." });
  }

  const location = hasCity
    ? `q=${encodeURIComponent(city.trim())}`
    : `lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}`;
  const baseUrl = "https://api.openweathermap.org/data/2.5";
  const query = `${location}&appid=${encodeURIComponent(apiKey)}&units=metric`;

  try {
    const [currentResponse, forecastResponse] = await Promise.all([
      fetch(`${baseUrl}/weather?${query}`),
      fetch(`${baseUrl}/forecast?${query}`),
    ]);

    if (!currentResponse.ok || !forecastResponse.ok) {
      const status = currentResponse.status === 404 || forecastResponse.status === 404 ? 404 : 502;
      return res.status(status).json({
        error: status === 404 ? "City not found." : "Weather provider is temporarily unavailable.",
      });
    }

    const [weather, forecast] = await Promise.all([
      currentResponse.json(),
      forecastResponse.json(),
    ]);

    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
    return res.status(200).json({ weather, forecast });
  } catch {
    return res.status(502).json({ error: "Unable to retrieve weather data right now." });
  }
}