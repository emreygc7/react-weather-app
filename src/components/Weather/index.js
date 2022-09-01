import TopSide from './components/TopSide'
import LeftSide from './components/LeftSide'
import WeatherChart from './components/Chart'
import style from '../../assets/styles/weather.module.css'
import { useTheme } from '../../context/ThemeContext'

const Weather = () => {

  const { theme } = useTheme()

  return (
    <div className={theme === "dark" ? (`${style.mainContainer} ${style.dark}`) : (`${style.mainContainer} ${style.light}`)}>
        <TopSide />
        <div className={style.chartContainer} >
            <LeftSide />
            <WeatherChart />
        </div>
    </div>
  )
}

export default Weather


