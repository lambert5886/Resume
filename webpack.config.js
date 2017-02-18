
var path = require('path');
var webpack = require('webpack');
var config = {
		entry: ['webpack-dev-server/client?http://localhost:8080',
    			'webpack/hot/dev-server',
    			path.resolve(__dirname,'./app/index.js')],
		output: {
			path: path.resolve(__dirname,'./app/build'),
			filename: 'bundle.js',
			publicPath: './app/build/'
		},
		plugins: [
   			 new webpack.HotModuleReplacementPlugin()
  		],
		module: {
			loaders: [{
				test: /\.js|jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0'
			},{
				test: /\.css$/,
				exclude: /node_modules/,
      			loader: 'style-loader!css-loader'
					  
			},{
				test: /\.less$/,
				exclude: /node_modules/,
				loader: 'style-loader!css-loader!less-loader'					  
			},{
				test: /\.(png!jpg)$/,
				exclude: /node_modules/,
				loader: 'url?limit=25000'
			},{
				test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
				 loader: 'url-loader?limit=50000&name=[path][name].[ext]'
			}]
		},
		devServer: {
			contentBase: path.join(__dirname,'./app/build'),
			compress: true
		}
};

	
	module.exports = config;