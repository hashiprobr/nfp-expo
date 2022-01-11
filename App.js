import React from 'react';

import { Platform } from 'react-native';

import Main from './components/Main.js';

if (Platform.OS === 'web') {
    const warn = console.warn;
    console.warn = (warning) => {
        if (typeof warning !== 'string' || warning.indexOf('RCTAnimation') === -1) {
            warn(warning);
        }
    }
}

export default function App() {
    return (
        <Main />
    );
}
