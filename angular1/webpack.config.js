const {resolve}= require('path')
const webpackValidator = require('webpack-validator')
const {getIfUtils} = require('webpack-config-utils')

module.exports = (env) => {
    const {ifProd} = getIfUtils(env)
    return webpackValidator({
        context : resolve('app'),
        entry: './app.js',
        output:{ 
            path : resolve('dist'),
            publicPath: '/dist/',
            filename:'bundle.js',
        },
        devtool: ifProd('source-map', 'eval'),
    })
}
