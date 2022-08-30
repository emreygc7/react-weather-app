import React from 'react'
import TopSide from './components/TopSide'
import LeftSide from './components/LeftSide'
import WeatherChart from './components/Chart'
import style from '../../assets/styles/weather.module.css'

const Weather = () => {
  return (
    <div className={style.mainContainer}>
        <TopSide />
        <div className={style.chartContainer} >
            <LeftSide />
            <WeatherChart />
        </div>
    </div>
  )
}

export default Weather


