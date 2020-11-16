const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isProduction = env && env.production
    return {
        mode: isProduction ? 'production' : 'development',
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: path.join(__dirname, 'node_modules')
                },
                {
                    use: [
                        MiniCSSExtractPlugin.loader, 
                        'css-loader',
                        'sass-loader'
                    ],
                    test: /\.s?css$/
                }
            ]
        },
        plugins: [
            new MiniCSSExtractPlugin()
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        },
        stats: {
            orphanModules: true
        }
    }
}
