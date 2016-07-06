/**
 * Created by jack on 16-7-4.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const SOURCEPATH = path.join(__dirname, 'src');
const DISTPATH = path.join(__dirname, 'build');

module.exports = {
	devtool: 'source-map',
	entry: [
		SOURCEPATH + '/app/app.js'
	],
	output:  {
		path: DISTPATH,
		publicPath: '/',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js']
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new HtmlWebpackPlugin({
			template: SOURCEPATH + '/index.html'
		}),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel'],
				include: SOURCEPATH
			},
			{
				test: /\.html$/,
				loader: 'html',
				query: {interpolate: true},
				include: SOURCEPATH
			}
		]
	}
}