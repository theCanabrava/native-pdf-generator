module.exports = {
    "env": {
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "it": "readonly",
        "module": "readonly",
        "console": "readonly",
        "err": "readonly",
        "jest": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/display-name": [0],

        "react/prop-types": [1, { "ignore": ["className", "children", "location", "params", "location*"]}],
    }
};
