var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var PUBLIC_PATH = path.resolve(__dirname, 'public');
var SOURCE_PATH = path.resolve(__dirname, 'src');

module.exports = {
	entry: [
		'./src'
	],
	output: {
		path: PUBLIC_PATH,
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		outputPath: PUBLIC_PATH
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: SOURCE_PATH
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract(
					'style-loader',
					'css-loader',
					'less-loader'
				)
			},
			{
				test: /\.json$/,
				loader: 'json'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.css'),
		new CopyWebpackPlugin([{
			from: 'src/index.html'
		}], {})
	]
};