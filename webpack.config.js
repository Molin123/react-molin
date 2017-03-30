const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	context: path.resolve(__dirname, './src'),
	// 配置服务器
	devServer: {
	    contentBase: path.resolve(__dirname, './src'),  // New
	},
	entry: {
		app: './app.jsx',
		home: './home.jsx'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js',
	},
  	module: {
    	rules: [
      		{
		        test: /\.less$/,
		        // use: ['style-loader', 'css-loader', 'less-loader'],      // 将css打包到js里面
		        // 将css单独打包，需要plugins
		        use: ExtractTextPlugin.extract({
			        fallback: 'style-loader',
			        //resolve-url-loader may be chained before lesss-loader if necessary
			        use: ['css-loader', 'less-loader']
		        })
      		},
      		{
		        test: /\.js[x]?$/,
		        use: [{
		          	loader: 'babel-loader',
		          	options: { presets: ['es2015', 'stage-0', 'react'] }
		        }],
		        exclude: /node_modules/
		    },
		    {
      			test: /\.css$/,
      			use: ['style-loader', 'css-loader']
      		},
      		{
      			test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
      			use: ['url-loader']
      		}
    	],
  	},
  	// ant需要
	resolve: {
	  	modules: ['node_modules', path.join(__dirname, './node_modules')],
	  	extensions: ['.web.js', '.js', '.json'],     // webpack2 不再需要一个空的字符串
	},
  	plugins: [
	    // new ExtractTextPlugin('style.css')     // 指定css文件名 打包成一个css
	    // 分开打包多个css
	    new ExtractTextPlugin({
	      filename: '[name].bundle.css',
	      allChunks: true,
	    }),
	]
};