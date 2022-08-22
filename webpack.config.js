const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    output:{
        clean: true
    },
    module: {
        rules: [
            {
              test: /\.html$/i,
              loader: "html-loader",
              options:{
                sources: false
              }
            },
          ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Mi Webpack App',
            // filename: 'holamundo.html'
            template: './src/index.html'
        })
    ]
}