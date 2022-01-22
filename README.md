nfp-expo-css
============

**A branch of [nfp-expo](https://github.com/hashiprobr/nfp-expo) with adaptations
and additions to use CSS instead of React Native StyleSheets.**

The script to create a new component creates the boilerplate for the
corresponding CSS in `css/<path>` and starting with `npm start` instead of `expo
start` executes, in parallel, a watcher script that automatically converts all
CSS files in the `css` folder to corresponding StyleSheet files in the `styles`
folder.

Please note that you should not edit or commit the `styles` folder, because it
is supposed to be a mirror of the `css` folder.
