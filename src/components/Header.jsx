import React from 'react';
import Switch from '@material-ui/core/Switch';
import { useTheme, useSetTheme } from '../state/ThemeProvider';

const Header = () => {
    const theme = useTheme();
    const setTheme = useSetTheme();

    return (
        <header style={{ backgroundColor: theme ? 'black' : 'white' }}>
            <Switch
                checked={theme}
                onChange={() => setTheme((prevTheme) => !prevTheme)}
            />
            <span style={{ color: theme ? 'white' : 'black' }}>Dark Mode</span>
        </header>
    );
};

export default Header;
