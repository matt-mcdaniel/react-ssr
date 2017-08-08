const path = require('path');

const development = {
    name: 'client',
    target: 'web',
    entry: './client.js',
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'client.js',
        publicPath: '/static/'
    },
    resolve: {
        extensions: ['.js']
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules\/)/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    }
};

const server = {
    name: 'server',
    target: 'node',
    entry: './server.js',
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        publicPath: '/static/'
    },
    devtool: 'source-map',
    resolve: development.resolve,
    module: development.module
};

module.exports = [development, server];
