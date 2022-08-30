import { useContext } from 'react'
import { weatherContext } from '../../../context/WeatherContext'
import style from '../../../assets/styles/weather.module.css'

const LeftSide = () => {

    const {currentWeather, isLoaded} = useContext(weatherContext)

  return (
    isLoaded == true ? (
        <div className={style.leftSideContainer}>
            <div className={style.currentWeatherContainer}>
                <h2>{currentWeather.main.temp.toFixed(0)}°C {currentWeather.weather[0].main}</h2>
                <marquee behavior="alternate" direction="right" scrollamount="4">
                <img src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} alt="" />
                </marquee>
            </div>
            
            <div className={style.detailContainer}>
                <p>Felt temperature: <strong>{currentWeather.main.feels_like.toFixed(0)}°C</strong></p>
                <p>Minimum temperature: <strong>{currentWeather.main.temp_min.toFixed(0)}°C</strong></p>
                <p>Maximum temperature: <strong>{currentWeather.main.temp_max.toFixed(0)}°C</strong></p>
                <p>Humidity: <strong>{currentWeather.main.humidity}%</strong></p>
                <p>Wind speed: <strong>{Math.round(currentWeather.wind.speed.toFixed(0)*3.6)} km/h</strong></p>
            </div>

        </div>
    ) : (null)
  )
}

export default LeftSide
