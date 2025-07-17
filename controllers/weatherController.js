export const getWeatherController = async (req, res) => {

    try{
        const city = req.params.city;
        const weatherResponse = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`);
        const weatherData = await weatherResponse.json();

        if (weatherData.cod !== 200) {
            return res.status(404).json({ error: weatherData.message || 'City not found' });
          }

        const result = {
            city: weatherData.name,
            temp: (weatherData.main.temp - 273.15).toFixed(1),
            condition: weatherData.weather[0].main,
        }
        console.log(result);

        res.json(result);



    }catch(error){
        console.error("API call failed:", error);

        res.status(500).send("API call failed");
    }
}