var path = require('path');

module.exports = {
  context: __dirname,
  entry: './index.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "index.js"
  },
  target: 'node',
  externals: {
    './external': 'commonjs ../external'
  }
}