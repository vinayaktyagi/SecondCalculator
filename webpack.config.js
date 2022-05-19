const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
	"entry": "./index.js",
	"output": {
		path: path.resolve(__dirname,'./dist'),
		filename: 'main.js',
		publicPath:'/'
	},
	"module": {
		rules:[
			{test:/\.css$/,use:['style-loader', 'css-loader']},
			{test:/\.(js|jsx)$/,use:['babel-loader']}
		]
	},
	"mode": "development",
	"plugins":[
		new HtmlwebpackPlugin({
			template: './index.html'
		})
	]
}