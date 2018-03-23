const join = require('path').join;
const webpack = require('webpack');

module.exports = {
    output: {
        path: join(__dirname, '../public/assets'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js'],
        modules: [
            join(__dirname, '../node_modules'),
            join(__dirname, '../src')
        ]
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            "styled-components" : {
                ssr: true, 
                displayName: true 
            }
        })
    ]
};
