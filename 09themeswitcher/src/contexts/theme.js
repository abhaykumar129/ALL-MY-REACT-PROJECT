//  first step



import { createContext, useContext } from "react";


//  yeha pe hmne functionality lijha hai   
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}



// first step theme.js
// second step :  app.js

// third step :   ThemeBtnjsx
