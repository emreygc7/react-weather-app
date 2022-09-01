import { createContext, useContext, useState, useEffect } from "react";

const themeContext = createContext()


const ThemeContextProvider = ({ children }) => {

    const defaultTheme = localStorage.getItem("theme") || "dark"

    const [theme, setTheme] = useState(defaultTheme)

    useEffect(() =>{
        localStorage.setItem("theme", theme)
    },[theme])

    const themeData = {
        theme,
        setTheme
    }

    return(
        <themeContext.Provider value={themeData}>
            {children}
        </themeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(themeContext)
}

export default ThemeContextProvider