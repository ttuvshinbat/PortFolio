import { useContext, createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export default function ThemeProvider(props) {
    const [theme, setTheme] = useState(true);
    const show = () => {
        setTheme(!theme)
    }
    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    );
}
