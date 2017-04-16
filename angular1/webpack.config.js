const {resolve}= require('path')

module.exports = () => {
    return {
        context : resolve('app'),
        entry: './app.js',
        output:{
            filename:'bundle.js',
        }
    }
}
