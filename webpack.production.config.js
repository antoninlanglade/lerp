var path = require("path");
var nodeExternals = require('webpack-node-externals');
var webpack = require('webpack');

module.exports = {
	 externals: [nodeExternals()],
     entry: './src/index.js',
     output: {
         path: path.resolve(__dirname, "build"),
         filename: 'lerp.min.js',
		 library: 'Lerp',
		 libraryTarget: 'umd',
		 umdNamedDefine: true,

     },
     plugins: [
        new webpack.optimize.UglifyJsPlugin({
		    mangle : true
		})
    ],
     module: {
	  loaders: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel',
	      query: {
	        presets: ['latest'],
            plugins: ['transform-decorators-legacy']
	      }
	    }
	  ]
	}
 };