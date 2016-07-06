/**
 * Created by jack on 16-7-5.
 */
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var CONFIG = require('./webpack.config.js');

var compiler = webpack(CONFIG);

var server = new WebpackDevServer(compiler, {
	hot: true,
	stats: { colors: true }
});

server.listen(8080, "localhost", function() {
	console.log('server is ready on localhost:8080')
});
