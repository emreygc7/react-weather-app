import { useContext, useRef } from "react"
import { weatherContext } from "../context/WeatherContext"
import style from '../assets/styles/header.module.css'


const Header = () => {

    const { cityInformation, setCityInformation } = useContext(weatherContext)

    const cityName = useRef()
    
    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            setCityInformation({...cityInformation, name: cityName.current.value})
            e.target.value = ""
        }
    }

    return(
     <header className={style.header}>
        <input type='text' ref={cityName} placeholder='&#x1F50E;&#xFE0E;' onKeyDown={handleKeyDown} />
        <button onClick={() => {setCityInformation({...cityInformation, name: cityName.current.value}); cityName.current.value = ""}} className={style.btn}>Search</button>
     </header>
    )
}

export default Header



