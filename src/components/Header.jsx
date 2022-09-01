import { useContext, useRef } from "react"
import { weatherContext } from "../context/WeatherContext"
import style from '../assets/styles/header.module.css'
import { useTheme } from "../context/ThemeContext"
import {MdDarkMode, MdLightMode} from 'react-icons/md'


const Header = () => {

    const { cityInformation, setCityInformation } = useContext(weatherContext)
    const { theme, setTheme } = useTheme()

    const cityName = useRef()
    
    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            setCityInformation({...cityInformation, name: cityName.current.value})
            e.target.value = ""
        }
    }

    return(
        <header className={theme === "dark" ? (`${style.dark} ${style.header}`) : (`${style.light} ${style.header}`)}>

            <input type='text' className={theme === "dark" ? (style.darkInputs) : (style.lightInputs)} ref={cityName} placeholder='&#x1F50E;&#xFE0E;' onKeyDown={handleKeyDown} />

            <button onClick={() => {setCityInformation({...cityInformation, name: cityName.current.value}); cityName.current.value = ""}} className={theme === "dark" ? (`${style.btn} ${style.darkInputs}`) : (`${style.btn} ${style.lightInputs}`) }>Search</button>
            
            {
                theme === "dark" ? (<MdLightMode onClick={() => setTheme("light")} cursor="pointer" />) : (<MdDarkMode onClick={() => setTheme("dark")} cursor="pointer" />) 
            }
            
        </header>
    )
}

export default Header



