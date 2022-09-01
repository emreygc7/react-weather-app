import React from "react";
import ReactDOM from "react-dom/client";
import './assets/styles/global.css'
import App from "./App";
import WeatherContextProvider from "./context/WeatherContext";
import ThemeContextProvider from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WeatherContextProvider>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </WeatherContextProvider>
);
