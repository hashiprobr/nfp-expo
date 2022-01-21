import 'react-native-gesture-handler';

import merge from 'deepmerge';

import React, { useState, useMemo } from 'react';

import { Platform } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer, DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';

import { Provider as PaperProvider, DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme } from 'react-native-paper';

import { DateTimeContainer } from '@hashiprobr/react-native-paper-datetimepicker';

import AppLoading from 'expo-app-loading';

import Main from './components/Main';

import { getFonts, useStyles, ThemeContext, ErrorBoundary } from './tools';

import CustomDefaultTheme from './themes/DefaultTheme';
import CustomDarkTheme from './themes/DarkTheme';

import settings from './settings.json';

// Ignoring a specific warning in the web. This is a
// terrible hack, but I could not find a way around it
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

const fonts = getFonts();

const defaultTheme = merge.all([NavigationDefaultTheme, PaperDefaultTheme, CustomDefaultTheme]);
const darkTheme = merge.all([NavigationDarkTheme, PaperDarkTheme, CustomDarkTheme]);

export default function App() {
    const loaded = useStyles(fonts);

    const [dark, setDark] = useState(settings.dark);
    const value = useMemo(() => [dark, setDark], [dark]);
    const theme = value[0] ? darkTheme : defaultTheme;

    return (
        loaded.every((value) => value) ? (
            <ThemeContext.Provider value={value}>
                <PaperProvider theme={theme}>
                    <SafeAreaProvider>
                        <NavigationContainer theme={theme}>
                            <DateTimeContainer theme={theme}>
                                <ErrorBoundary>
                                    <Main />
                                </ErrorBoundary>
                            </DateTimeContainer>
                        </NavigationContainer>
                    </SafeAreaProvider>
                </PaperProvider>
            </ThemeContext.Provider>
        ) : (
            <AppLoading />
        )
    );
}
