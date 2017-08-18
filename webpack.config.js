var path    = require('path');
var webpack = require('webpack');

var plugins = [
  new webpack.NoErrorsPlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      screw_ie8: true,
      warnings: false
    }
  })
]

module.exports = {
  devtool: 'cheap-source-map',
  resolve: {
    extensions: ['', '.js']
  },
  entry: [ './src/index' ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'Dialog'
  },
  externals: {
   react: {
     root: 'React',
     commonjs2: 'react',
     commonjs: 'react',
     amd: 'react'
   }
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: /src/
      },
    ]
  }
};
