import 'react-native-gesture-handler';

import merge from 'deepmerge';

import React, { useEffect } from 'react';

import { Platform } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer, DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';

import { Provider as PaperProvider, DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme } from 'react-native-paper';

import { DateTimeContainer } from '@hashiprobr/react-native-paper-datetimepicker';

import * as SplashScreen from 'expo-splash-screen';

import { getFonts, useStyles, useDark, DarkContext, ErrorBoundary } from './tools';

import CustomDefaultTheme from './themes/DefaultTheme';
import CustomDarkTheme from './themes/DarkTheme';

import Main from './components/Main';

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

SplashScreen.preventAutoHideAsync();

const fonts = getFonts();

const defaultTheme = merge.all([NavigationDefaultTheme, PaperDefaultTheme, CustomDefaultTheme]);
const darkTheme = merge.all([NavigationDarkTheme, PaperDarkTheme, CustomDarkTheme]);

function App() {
    const loaded = useStyles(fonts);

    const dark = useDark();

    const theme = dark[0] ? darkTheme : defaultTheme;

    useEffect(() => {
        if (loaded.every((value) => value)) {
            SplashScreen.hideAsync();
        }
    }, loaded);

    return (
        <PaperProvider theme={theme}>
            <SafeAreaProvider>
                <NavigationContainer theme={theme}>
                    <DateTimeContainer theme={theme}>
                        <Main />
                    </DateTimeContainer>
                </NavigationContainer>
            </SafeAreaProvider>
        </PaperProvider >
    );
}

export default function BoundedApp() {
    return (
        <ErrorBoundary>
            <DarkContext.Provider>
                <App />
            </DarkContext.Provider>
        </ErrorBoundary>
    );
}
