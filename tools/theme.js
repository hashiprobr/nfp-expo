import { createContext, useContext } from 'react';

const ThemeContext = createContext();

function useDark() {
    return useContext(ThemeContext);
}

export { useDark, ThemeContext };
