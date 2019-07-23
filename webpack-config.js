const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        polyfills: './src/polyfills.js',
        index: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: require.resolve('index.js'),
                use: 'imports-loader?this=>window'  //改变this指向
            },
            {
                test: require.resolve('globals.js'),
                use: 'exports-loader?file,parse=helpers.parse'
            }
        ],
    },
    plugins: [
        //把某个模块作为应用程序的一个全局变量，尽量避免设置全局依赖，不便于发挥模块化的优势
        new webpack.ProgressPlugin({
            // _: 'lodash', //以_整体引入lodash
            join: ['lodash', 'join']  //单独引入join，保证调用的join为lodash中方法
        })
    ]
};
