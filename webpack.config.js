const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
    plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html'
		})
	],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js',
	},
    mode: process.env.NODE_ENV,
    module: {
		rules: [
			{
				test: /.jsx?/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					}
				}
			},
            {
                test: /\.(sa|sc|c)ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
              },
		]
	}
}