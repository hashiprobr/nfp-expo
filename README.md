nfp-expo
========

**[Not-For-Production](https://github.com/hashiprobr/nfp) Expo template based on
React Navigation, React Native Paper, and additional components, hooks, and
tools.**

If your project is a class assignment or a simple prototype, use this template
to have React Navigation and React Native Paper support with minimum
boilerplate, as well as components, hooks, and tools specifically designed for
simplifying the usage of popular features. The dependency versions were
carefully chosen to avoid runtime errors and warnings.


Default dependencies
--------------------

* [React Navigation](https://reactnavigation.org/)

* [Developer tools](https://reactnavigation.org/docs/devtools)

* [Elements Library](https://reactnavigation.org/docs/elements)

* [Stack Navigator](https://reactnavigation.org/docs/stack-navigator/)

* [Drawer Navigator](https://reactnavigation.org/docs/drawer-navigator/)

* [Material Bottom Tabs
  Navigator](https://reactnavigation.org/docs/material-bottom-tab-navigator/)

* [Material Top Tabs
  Navigator](https://reactnavigation.org/docs/material-top-tab-navigator/)

* [Fluid Transitions for React
  Navigation](https://github.com/fram-x/FluidTransitions)

* [react-navigation-collapsible](https://github.com/benevbright/react-navigation-collapsible)

* [react-native-screens](https://github.com/software-mansion/react-native-screens)

* [react-navigation-header-buttons](https://github.com/vonovak/react-navigation-header-buttons)

* [react-navigation-props-mapper](https://github.com/vonovak/react-navigation-props-mapper)

* [React Native Paper](https://callstack.github.io/react-native-paper/)

* [react-native-tab-view](https://github.com/satya164/react-native-tab-view)

* [React Native Bottom
  Sheet](https://gorhom.github.io/react-native-bottom-sheet/)

* [Expo SplashScreen](https://docs.expo.dev/versions/latest/sdk/splash-screen/)


Additional components
---------------------

* [react-native-aspect-image](https://github.com/hashiprobr/react-native-aspect-image)
  A React Native Image that keeps the source aspect ratio

* [react-native-rounded-view](https://github.com/hashiprobr/react-native-rounded-view)
  A React Native View that defines its border radius by percentage

* [react-native-paper-datetimepicker](https://github.com/hashiprobr/react-native-paper-datetimepicker)
  A React Native Paper Component for picking date or time

* [react-native-paper-dropdown](https://github.com/hashiprobr/react-native-paper-dropdown)
  A fork of Fateh Farooqui's react-native-paper-dropdown with additional
  configurability

* [react-native-paper-icon](https://github.com/hashiprobr/react-native-paper-icon)
  A React Native Paper Icon with size inferred from style

* [expo-pdf-reader](https://github.com/hashiprobr/expo-pdf-reader) A wrapper
  around Xavier Carpentier's rn-pdf-reader-js that gracefully degrades in the
  web

* [expo-three-view](https://github.com/hashiprobr/expo-three-view) An Expo
  Component for Three.js visualization with auto-resizing and built-in orbit
  controls

* [expo-camera](https://github.com/hashiprobr/expo-camera) A modified version of
  expo-camera with automatic ratio in Android and additional configurability


Additional hooks
----------------

* [react-create-state-context](https://github.com/hashiprobr/react-create-state-context)
  React function for simplifying the creation of state contexts

* [react-use-emitter-and-listener](https://github.com/hashiprobr/react-use-emitter-and-listener)
  React Hooks for emitting and listening to events with a syntax inspired by
  contexts and effects

* [react-use-loader](https://github.com/hashiprobr/react-use-loader) A React
  Hook for simplifying basic usage of Three.js module loaders

* [react-use-mount-and-update](https://github.com/hashiprobr/react-use-mount-and-update)
  React Hooks for separating different responsibilities of effects

* [react-use-refs](https://github.com/hashiprobr/react-use-refs) A React Hook
  for using multiple refs with a clean sintax

* [react-native-use-rest](https://github.com/hashiprobr/react-native-use-rest) A
  React Hook for simplifying requests to REST servers and the file upload
  features of expo-file-system

* [expo-use-camera](https://github.com/hashiprobr/expo-use-camera) A React Hook
  for simplifying basic usage of expo-camera

* [expo-use-locator](https://github.com/hashiprobr/expo-use-locator) A React
  Hook for simplifying basic usage of expo-location

* [expo-use-picker](https://github.com/hashiprobr/expo-use-picker) A React Hook
  for simplifying basic usage of expo-document-picker

* [expo-use-scanner](https://github.com/hashiprobr/expo-use-scanner) A React
  Hook for simplifying the barcode scanning features of expo-camera


Additional tools
----------------

### React Hook to toggle dark mode

In any component, you can import the `{ useDark }` hook from the `tools` folder.
This hook returns the getter and setter of a boolean state

``` js
const [dark, setDark] = useDark();
```

that represents whether dark mode is being used.

### Theme customization

Both the default and dark themes are based on:

* the default and dark themes of React Navigation;

* the default and dark themes of React Native Paper;

* the files `themes/DefaultTheme.js` and `themes/DarkTheme.js`,

with priority increasing from top to bottom.

The default mode is defined by the `"dark"` property of `settings.json`.

### Installation of Google Fonts.

1. Start with `npm start` instead of `expo start`.

2. Search the [@expo-google-fonts Directory](https://directory.vercel.app/) to
   discover the font name and variant names.

3. Install the `@expo-google-fonts` package corresponding to the font name.

4. Add to the object exported by `themes/GoogleFonts.js` an entry corresponding
   to the font name and variant names. See an example below.

   ``` js
   export default {
       'open-sans': [
           'OpenSans_300Light',
           'OpenSans_300Light_Italic',
           'OpenSans_400Regular',
           'OpenSans_400Regular_Italic',
       ],
       'open-sans-condensed': [
           'OpenSansCondensed_300Light',
           'OpenSansCondensed_300Light_Italic',
       ],
   };
   ```

5. You can now use any of the variant names as a value of `fontFamily`.

Starting with `npm start` instead of `expo start` executes, in parallel, a
watcher script that automatically detects which fonts are installed and
generates a file that imports the corresponding modules.

### Script to create a new navigation

Running

```
npm run create-navigation <path> <type>
```

will automatically create the boilerplate for a navigation component in
`components/<path>`. The `<type>` can be one of four values:

* `stack`;

* `drawer`;

* `material-top-tabs`;

* `material-bottom-tabs`.

### Script to create a new component

Running

```
npm run create-component <path>
```

will automatically create the boilerplate for a component in `components/<path>`
and its corresponding StyleSheet in `styles/<path>`.
