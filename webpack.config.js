const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  devtool: 'none',

  mode: 'none',

  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin()
    ],
    namedModules: true,
    usedExports: true,
    sideEffects: true
  }
};