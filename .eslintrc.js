module.exports = {
  env: {
    "react-native/react-native": true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      js: true
    },
    sourceType: "module"
  },
  plugins: ["react", "react-native", "css-modules"],
  extends: ["plugin:react-native/all", "plugin:css-modules/recommended"],

  rules: {
    // "react-native/no-unused-styles": 2,
    // "react-native/split-platform-components": 2,
    // "react-native/no-inline-styles": 2,
    // "react-native/no-color-literals": 2,
    "css-modules/no-unused-class": [2, { camelCase: true }],
    "css-modules/no-undef-class": [2, { camelCase: true }]
  },
  settings: {
    react: {
      createClass: "createReactClass", // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: "React", // Pragma to use, default to "React"
      version: "15.0", // React version, default to the latest React stable release
      flowVersion: "0.53" // Flow version
    },
    propWrapperFunctions: ["forbidExtraProps"] // The names of any functions used to wrap the
    // propTypes object, e.g. `forbidExtraProps`.
    // If this isn't set, any propTypes wrapped in
    // a function will be skipped.
  }
};