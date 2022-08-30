import { useContext } from 'react'
import { weatherContext } from '../../../context/WeatherContext'
import style from '../../../assets/styles/weather.module.css'

const TopSide = () => {

    const { currentWeather, nextDaysWeather, isLoaded} = useContext(weatherContext)

   
  return (
        isLoaded == true  ? ( 
        <div className={style.topContainer}>
            <h1>{currentWeather.name}, {currentWeather.sys.country} </h1>
            <h1>{nextDaysWeather[0].dt_txt.substring(0, 16)}</h1>
        </div> ) : (null)
  )
}

export default TopSide

