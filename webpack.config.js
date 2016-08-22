var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './src/main.js',
	output: {
		filename: 'bundle.js',
		path: 'dist'
	},
	module: {
		loaders: [
			{ test: /\.html$/, loader: 'html-loader' },
			{ 
				test: /\.scss$/, 
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
				include: [ /node_modules/ ]
			},
			{ 
				test: /\.scss$/, 
				loader: 'style-loader!css-loader!sass-loader',
				exclude: [ /node_modules/ ]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file?name=fonts/[name].[ext]'
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			jquery: 'jquery',
			$: 'jquery'
		}),
		new ExtractTextPlugin('[name].css')
	],
	devServer: {
		contentBase: 'dist',
		port: 3000,
		inline: true
	}
};
