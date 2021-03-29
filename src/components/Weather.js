const Weather = ({ weather, error, errorMessage, isLoading }) => {

    return (
        <div className="weather">
            <div className="weather-container">
                {error && <p className="error-message">{errorMessage}</p>}

                {isLoading && <p className="loading-message">Loading...</p>}

                {weather.cod === 200 && 
                    <div>
                        <div className="place-and-time">
                            <div className="place">
                                {weather.name}, {weather.sys.country}
                            </div>
                            <div className="time">
                                {weather.weather[0].description}
                            </div>
                        </div>
                        <div className="weather-data">
                            <div className="temp-and-icon">
                                <div>
                                    <div className="temperature">
                                        {Math.round(weather.main.temp)}°C 
                                    </div>
                                    <div className="feels-like">
                                        Feels like {Math.round(weather.main.feels_like)}°C
                                    </div>
                                </div>
                                <i className={`wi wi-owm-${weather.weather[0].id} icon`}></i>
                            </div>
                            <div className="wind-and-humidity">
                                <div className="wind">
                                    <i className="wi wi-strong-wind icon-sm"></i>
                                    {Math.round(weather.wind.speed * 3.6)} km/h &nbsp; Wind
                                </div>
                                <div className="humidity">
                                    <i className="wi wi-humidity icon-sm icon-sm-2"></i>
                                    {weather.main.humidity} % &nbsp; Humidity
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}
 
export default Weather;