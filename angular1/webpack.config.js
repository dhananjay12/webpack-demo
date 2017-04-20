const {resolve}= require('path')
const webpackValidator = require('webpack-validator')
const {getIfUtils, removeEmpty} = require('webpack-config-utils')
const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
               {test: /\.html$/, loaders: ['raw-loader'] }
           ],
           rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
                })
            }
            ]
       },
       devtool: ifProd('source-map', 'eval'),
       plugins: removeEmpty([
           new ProgressBarPlugin(),
           new ExtractTextPlugin(ifProd('styles.[name].[chunkhash].css', 'styles.[name].css')),
           ifProd(new InlineManifestWebpackPlugin()),
           ifProd(new webpack.optimize.CommonsChunkPlugin({
                names: ['vendor', 'manifest']
            })),
            new HtmlWebpackPlugin({
                template: './index.ejs'
            })
       ])
   })
}