const fs = require('fs')
const projectWideBabelRC = JSON.parse(fs.readFileSync('../.babelrc'))

module.exports = { 
  ...projectWideBabelRC,

  presets: [
    ...projectWideBabelRC.presets,
    '@babel/preset-react'
  ],

  plugins: [
    ...(projectWideBabelRC.plugins || []),
    'styled-components'
  ]
}
