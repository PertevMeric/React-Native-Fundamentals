React Native Application Template with react/navigation drawer.

Installing Dependencies

npm install @react-navigation/drawer

npx expo install react-native-gesture-handler react-native-reanimated

npm install react-native-reanimated@~2.2.0 #go for latest version

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"],
  };
};

npx expo start --clear

