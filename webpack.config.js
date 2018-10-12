const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.join( __dirname, '/public/dist' ),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};
