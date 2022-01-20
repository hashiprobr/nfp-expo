import 'react-native-gesture-handler';

import merge from 'deepmerge';

import React, { createContext, useContext, useState } from 'react';

import { Platform } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer, DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';

import { Provider as PaperProvider, DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme } from 'react-native-paper';

import { DateTimeContainer } from '@hashiprobr/react-native-paper-datetimepicker';

import Main from './components/Main';

import CustomDefaultTheme from './themes/Default';
import CustomDarkTheme from './themes/Dark';

import settings from './settings.json';

// Ignoring a specific warning in the web. This is an
// horrible hack, but I could not find a way around it
// because the warning does make sense. The problem is
// that the library does not support react-native-web.

if (Platform.OS === 'web') {
    const warn = console.warn;
    console.warn = (warning) => {
        if (typeof warning !== 'string' || warning.indexOf('RCTAnimation') === -1) {
            warn(warning);
        }
    };
}

const defaultTheme = merge.all([NavigationDefaultTheme, PaperDefaultTheme, CustomDefaultTheme]);
const darkTheme = merge.all([NavigationDarkTheme, PaperDarkTheme, CustomDarkTheme]);

const ThemeContext = createContext();

function useDark() {
    return useContext(ThemeContext);
}

export { useDark };

export default function App() {
    const value = useState(settings.dark);

    const theme = value[0] ? darkTheme : defaultTheme;

    return (
        <ThemeContext.Provider value={value}>
            <PaperProvider theme={theme}>
                <SafeAreaProvider>
                    <NavigationContainer theme={theme}>
                        <DateTimeContainer theme={theme}>
                            <Main />
                        </DateTimeContainer>
                    </NavigationContainer>
                </SafeAreaProvider>
            </PaperProvider>
        </ThemeContext.Provider>
    );
}
