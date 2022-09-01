import { useContext } from 'react'
import { weatherContext } from '../../../context/WeatherContext'
import style from '../../../assets/styles/weather.module.css'
import { useTheme } from '../../../context/ThemeContext'

const TopSide = () => {

    const { currentWeather, nextDaysWeather, isLoaded} = useContext(weatherContext)
    const { theme } = useTheme()

   
  return (
        isLoaded == true  ? ( 
        <div className={theme === "dark" ? (`${style.topContainer} ${style.dark}`) : (`${style.topContainer} ${style.light}`)}>

            <h1 className={theme === "dark" ? (style.darkh1) : (style.lighth1)}>{currentWeather.name}, {currentWeather.sys.country} </h1>

            <h1 className={theme === "dark" ? (style.darkh1) : (style.lighth1)}>{nextDaysWeather[0].dt_txt.substring(0, 16)}</h1>
            
        </div> ) : (null)
  )
}

export default TopSide

