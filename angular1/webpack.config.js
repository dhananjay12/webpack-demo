const {resolve}= require('path')
const webpackValidator = require('webpack-validator')
const {getIfUtils, removeEmpty} = require('webpack-config-utils')
const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
           filename:'bundle.[name].[chunkhash].js',
       },
       module: {
           loaders:[
               {test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
               {test: /\.html$/, loaders: ['raw-loader'] }
           ]
       },
       devtool: ifProd('source-map', 'eval'),
       plugins: removeEmpty([
           new ProgressBarPlugin(),
           ifProd(new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
            })),
            new HtmlWebpackPlugin({
                template: './index.html'
            })
       ])
   })
}