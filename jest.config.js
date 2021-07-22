module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transform: { "^.+\\.jsx?$": "babel-jest" },
    transformIgnorePatterns: [
      "node_modules/@invertase/react-native-apple-authentication"
    ]
  }