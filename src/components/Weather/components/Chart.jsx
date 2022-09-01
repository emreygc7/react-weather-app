import { useContext } from "react";
import { weatherContext } from "../../../context/WeatherContext";
import Chart from "react-apexcharts";
import { useTheme } from "../../../context/ThemeContext";

const WeatherChart = () => {
  const { nextDaysWeather, isLoaded } = useContext(weatherContext);
  const { theme } = useTheme()

  const chartConfig = {
    series: [
      {
        name: "Temperature °C",
        data: isLoaded == true ? nextDaysWeather.map((t) => t.main.temp.toFixed(0)) : null,
        color: "#eab308",
      },
      {
        name: "Felt Temperature °C",
        data: isLoaded == true ? nextDaysWeather.map((h) => h.main.feels_like.toFixed(0)) : null,
      },
      {
        name: "Min Temperature °C",
        data: isLoaded == true ? nextDaysWeather.map((min) => min.main.temp_min.toFixed(0)) : null,
        color: "#5eead4",
      },
      {
        name: "Max Temperature °C",
        data: isLoaded == true ? nextDaysWeather.map((max) => max.main.temp_max.toFixed(0)) : null,
      },
      {
        name: "Humidity %",
        data: isLoaded == true ? nextDaysWeather.map((h) => h.main.humidity.toFixed(0)) : null,
      },
      {
        name: "Wind speed km/h",
        data: isLoaded == true ? nextDaysWeather.map((w) => Math.round(w.wind.speed * (3.6).toFixed(0))) : null,
      },
    ],
    options: {
      chart: {
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: isLoaded == true ? nextDaysWeather.map((d) => d.dt_txt) : null,
        labels: {
          style: {
            colors: theme === "dark" ? "#fff" : "#000000"
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: theme === "dark" ? "#fff" : "#000000"
          },
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
        theme: "dark",
      },
      title: {
        text: "5-DAY WEATHER FORECAST",
        align: "left",
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: "14px",
          fontWeight: "100",
          fontFamily: "ubuntu, sans-serif",
          color: theme === "dark" ? "#fff" : "#000000"
        },
      },
      legend: {
        labels: {
          colors: theme === "dark" ? "#fff" : "#000000"
        },
      },
      fill: {
        opacity: 0,
      },
      responsive: [
        {
          breakpoint: 1024,
          options: {
            chart: {
              width: "100%",
              height: "200%",
            },
          },
        },
      ],
    },
  };

  return isLoaded == true ? (
    <div style={{width: '100%', height:'100%'}}>
    <Chart
      options={chartConfig.options}
      series={chartConfig.series}
      type="area"
      height={"85%"}
      width={"100%"}
    />
    </div>

  ) : null;
};

export default WeatherChart;
