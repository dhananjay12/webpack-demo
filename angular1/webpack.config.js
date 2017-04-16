const {resolve}= require('path')
const webpackValidator = require('webpack-validator')

module.exports = () => {
    return webpackValidator({
        context : resolve('app'),
        entry: './app.js',
        output:{
            path : resolve('dist'),
            publicPath: '/dist/',
            filename:'bundle.js',
        }
    })
}