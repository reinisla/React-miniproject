module.exports = {
  entry: "./src/App.js",
  output: {
    path: "./",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {	
      	exclude: /node_modules/,
        loader: "babel",
        test: /\.js$/,
        query: {
        	presets: ['es2015','react','react-hmre' ]
        }
      },
      {
        loaders: ["style-loader","css-loader","sass-loader"],
        test: /\.scss$/
      }
    ]
  }
}
