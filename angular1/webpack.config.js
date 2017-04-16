const {resolve}= require('path')
const webpackValidator = require('webpack-validator')
const {getIfUtils} = require('webpack-config-utils')

module.exports = (env) => {
   const {ifProd} = getIfUtils(env)
   return webpackValidator({
       context : resolve('app'),
       entry: {
           app: './app.js',
           vendor: ['angular/angular.js','angular-route/angular-route.js']
       },
       output :{
           path : resolve('dist'),
           publicPath: '/dist/',
           filename:'bundle.[name].js',
       },
       module: {
           loaders:[
               {test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
           ]
       },
       devtool: ifProd('source-map', 'eval'),
   })
}