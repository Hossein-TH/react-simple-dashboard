import React,{ useContext } from 'react';
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./Styles/global";
import {ThemeContext} from "./Context/themeContext";
import { lightTheme, darkTheme } from "./Styles/theme";
import Dashboard from "./Containers/Dashboard";


const App = () => {

    const context = useContext(ThemeContext);
    const {theme} = context;

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyles/>
                <Dashboard/>
            </>
        </ThemeProvider>
    )

};

export default App;
