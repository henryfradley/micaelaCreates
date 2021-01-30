const path = require('path');


module.exports = {
  entry: './client/src/App.jsx',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/public')
  },
  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        'style-loader',
        // Translates CSS into CommonJS
        'css-loader',
        // Compiles Sass to CSS
        'sass-loader',
      ],
    },
    {
      test: /\.jsx?$/,
      include: path.resolve(__dirname, './client'),
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },

    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      loader: 'file-loader',
      // options: {
      //   name: path.resolve(__dirname, './client/public'),
      // },
    }]
  }
};

