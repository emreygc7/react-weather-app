import { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast'


export const weatherContext = createContext() 


const WeatherContextProvider = ({ children }) => {
    

    const [cityInformation, setCityInformation] = useState({name: "konya", lat: 0, lon: 0 })
    const [currentWeather, setCurrentWeather] = useState(null)
    const [nextDaysWeather, setNextDaysWeather] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)


    
    const cityCoordinatesCall = async () => {
        const baseUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityInformation.name}&appid=${process.env.REACT_APP_API_KEY}`
        try{
            const response = await axios.get(baseUrl)
            setCityInformation({...cityInformation, lat: response.data[0].lat, lon: response.data[0].lon } )
        }catch{
            toast.error("City ​​not found. Please make sure you type it correctly.")
        }
        
    }

    const currentWeatherCall = async () => {
        const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${cityInformation.lat}&lon=${cityInformation.lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
        try{
            const response = await axios.get(baseUrl)
            setCurrentWeather(response.data)
        }catch{
            toast.error("Weather information is not available. Please try again later.")
        }
    }

    const nextDaysWeatherCall = async () => {
        const baseUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityInformation.lat}&lon=${cityInformation.lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
        try{
            const response = await axios.get(baseUrl)
            setNextDaysWeather(response.data.list)
            setIsLoaded(true)
        }catch{
            toast.error("Weather forecast data for the coming days is not available. Please try again later.")
        }
    }
    
    useEffect(() => {
        cityCoordinatesCall()
    },[cityInformation.name])

    useEffect(() => {
        currentWeatherCall()
        nextDaysWeatherCall()
    },[cityInformation.lat])

    

    const data = {
        cityInformation,
        setCityInformation,
        currentWeather,
        nextDaysWeather,
        isLoaded
    }

    return(
        <weatherContext.Provider value={data}>
            { children }
        </weatherContext.Provider>
    )
}

export default WeatherContextProvider