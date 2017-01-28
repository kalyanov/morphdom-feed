var path = require('path');

module.exports = {
	entry: {
		app: ['./src/index.js']
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		publicPath: '/assets/',
		filename: 'bundle.js'
	},
	devServer: {
		inline: true
	}
};