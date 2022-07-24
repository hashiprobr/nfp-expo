const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync({
        ...env,
        babel: {
            dangerouslyAddModulePathsToTranspile: [
                '@hashiprobr/expo-camera',
                '@hashiprobr/expo-pdf-reader',
                '@hashiprobr/expo-three-view',
                '@hashiprobr/expo-use-camera',
                '@hashiprobr/react-create-state-context',
                '@hashiprobr/react-native-aspect-image',
                '@hashiprobr/react-native-paper-datetimepicker',
                '@hashiprobr/react-native-paper-dropdown',
                '@hashiprobr/react-native-paper-icon',
                '@hashiprobr/react-native-rounded-view',
            ],
        },
    }, argv);
    return config;
};
