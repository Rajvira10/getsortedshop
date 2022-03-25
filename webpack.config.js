const path = require('path')

module.exports = {
  mode: 'none',  
  entry: path.resolve(__dirname, 'pages', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
}