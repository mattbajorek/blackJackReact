var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

var app = express();

if (process.env.NODE_ENV === 'production') {
	var compression = require('compression');
	app.use(compression());
} else {
	var config = require('../webpack.config.dev');
	var webpack = require('webpack');
	var webpackDevMiddleware = require('webpack-dev-middleware');
	var webpackHotMiddleware = require('webpack-hot-middleware');
	var compiler = webpack(config);
	app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
	app.use(webpackHotMiddleware(compiler));
}

app.use(express.static('./dist'));
app.use(favicon(path.resolve('favicon.ico')));

app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

var PORT = process.env.PORT || 3000;

app.listen(PORT, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", PORT);
});
