const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: {
		main: './src/index.js'
	},
  	output: {
		path: path.join(__dirname, '..', 'dist'),
		filename: 'main.js'
  	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							modules: true,
							localIdentName: '[name]__[local]___[hash:base64:5]',
							minimize: true,
						}
					},
					{
						loader: 'less-loader'
					}
				]
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					{
						loader: 'file-loader'
					},
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true,
							disable: true,
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	plugins: [
		new HtmlWebpackPlugin({ 
			template: path.join(__dirname, '../src/index.html'), 
			filename: './index.html' ,
		})
	],
	devServer: {
		port: 8088
	}
}