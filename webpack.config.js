const path = require('path')

module.exports = (env) => {
  
  const isProduction = env === "production";

  console.log("env", env)

  return {
    entry: './src/app.js',

    mode: 'none',
    node: {
      fs: 'empty'  //in order to enable fs with webpack
    },
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }, {
          test: /\.s?css$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
    devtool: isProduction? 'source-map': 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  }
}
// console.log(path.join(__dirname, 'public'));
// ABSOLUTE PATH : "/Users/beau/Desktop/deutsche-cards-glossary"

// manifest loader //https://gist.github.com/bronson/163d7d4dde2a845ea3d6af3a0d86d174

// you need to add `import './manifest.json'` to any of your javascript files