const fs = require('fs')
const projectWideBabelRC = JSON.parse(fs.readFileSync('../.babelrc'))
module.exports = {
  ...projectWideBabelRC,
  plugins: [
    ...(projectWideBabelRC.plugins || []),
    ["@babel/plugin-proposal-pipeline-operator", { "proposal": "smart" }]
  ]
}
