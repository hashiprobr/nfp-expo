import React from 'react';

import { View } from 'react-native';

import { Text } from 'react-native-paper';

export default function MyComponent() {
    return (
        <View
            style={{
                flexGrow: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text>Open up Main.js to start working on your app!</Text>
        </View>
    );
}
