const path = require('path')

const config = {

	entry: {
		styles: './src/styles/index.scss'
	},

	output: {
		path: path.resolve(__dirname, "public/dist/assets"),
		filename: "[name].bundle.js"
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				loader: require.resolve("babel-loader"),
				query: {
					presets: ["env", "stage-0", "react"]
				}
			},
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: "json-loader"
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!autoprefixer-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
			},
			{
				test: /\. (png|jpg|gif|woff|woff2)$/,
				loader: 'url-loader?limit=8192'
			},
			{
				test: /\.(mp4|ogg|svg)$/,
				// the image ./src/img.jpg will be copy and renamed as such: dist/img/img-a4bd04.jpg  
				loader: 'file-loader?name=img/img-[hash:6].[ext]'
			}
		]
	},

	plugins: [
		// new webpack.optimize.UglifyJsPlugin(),
		// new HtmlWebpackPlugin({template: './src/index.html'})
	]
};

module.exports = config;