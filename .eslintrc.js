module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "array-bracket-spacing": [
            "error",
            "always"
        ],
        "indent": [
            "error",
            2
        ],
        "keyword-spacing": ["error", {
            "before": true,
            "after": true
        }],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "no-console": [ "off" ],
        "object-curly-spacing": [
             "error",
             "always"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "space-in-parens": [
            "error",
            "never"
        ]
    }

};
