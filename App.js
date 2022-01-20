import React from 'react';

import { Platform } from 'react-native';

import Main from './components/Main';

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

export default function App() {
    return (
        <Main />
    );
}
