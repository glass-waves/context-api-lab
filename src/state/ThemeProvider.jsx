import React, { createContext, useContext, useState } from 'react';
import Proptypes from 'prop-types';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(false);

    const state = { theme, setTheme };

    return (
        <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const { theme } = useContext(ThemeContext);
    return theme;
};

export const useSetTheme = () => {
    const { setTheme } = useContext(ThemeContext);
    return setTheme;
};
ThemeProvider.propTypes = {
    children: Proptypes.node.isRequired
};
