var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/ReactComponent.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'ReactComponent.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}