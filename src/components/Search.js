import { useEffect, useState } from "react";
import Weather from "./Weather";

const api = {
    key: process.env.REACT_APP_API_KEY,
    base: 'https://api.openweathermap.org/data/2.5/',
    proxy : 'https://cors-anywhere.herokuapp.com/'
};

const Search = () => {

    const [city, setCity] = useState('jaipur');
    const [weather, setWeather] = useState({});
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        if(city.length === 0){
            setError(true);
            setErrorMessage("City name can't be empty");
            return;
        }
            
        setError(false);
        setErrorMessage(null);
        setIsLoading(true);
            
        fetch(`${api.base}weather?q=${city}&units=metric&appid=${api.key}`,{
            "method": "GET"
        }) 
        .then(res => {
            if(!res.ok){
                setErrorMessage('Error: Network problem');
                throw Error(errorMessage);
            }
            return res.json();
        })
        .then(data => { 
            if(data.cod !== 200){
                setErrorMessage('Error: Location not found :(');
                throw Error(errorMessage);
            }
            setWeather(data);
            setError(false);
            setErrorMessage(null);
            setIsLoading(false);
            // console.log(data);
        })
        .catch(err => {
            setError(true);
            setIsLoading(false);
            // console.log(err.message);
        })
    }, [city]);

    return (
        <div className="search">
            <div className="search-box">
                <label htmlFor="search-city">Enter City</label>
                <input 
                    type="text"
                    role="search"
                    id="search-city"
                    value={city}
                    onChange={ e => setCity(e.target.value) }
                />
            </div>
            <Weather 
                weather={weather}
                error={error}
                errorMessage={errorMessage}
                isLoading={isLoading}
            />
        </div>
    );
}
 
export default Search;