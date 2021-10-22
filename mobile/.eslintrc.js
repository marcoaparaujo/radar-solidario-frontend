module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
      "airbnb",
      "prettier",
      "prettier/react",
      "plugin:react/recommended",
      '@react-native-community'
    ],
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly",
      __DEV__: 'readonly'
    },
    parser: "@babel/eslint-parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
        "react",
        "prettier"
    ],
    rules: {
      "prettier/prettier": "error",
      "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".js"] }],
      "import/prefer-default-export": "off",
      "no-param-reassign": "off",
      "no-console": ["error", { allow: ["tron"] }]
    }
};
