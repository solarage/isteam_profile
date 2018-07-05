let path = require('path');

module.exports = {
	entry: './src/store/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
		publicPath: 'dist/'
	},
	devServer: {
		overlay: true
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				// options: {
				// 	presets: ["env"] 
				// }
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: [
					'babel-loader',
					'eslint-loader'	
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {}	
					}
				]
			}
		]
	},
	devtool: 'source-map'
};
