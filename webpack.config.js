const HtmlWebpackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin           = require("copy-webpack-plugin");


module.exports = {
    mode: 'development',
    output:{
        clean: true
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            exclude: /styles\.css$/i,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /styles\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
                'css-loader'
            ],
        },
            {
              test: /\.html$/i,
              loader: "html-loader",
              options:{
                sources: false
              }
            },
            
          {
            test: /\.(png|jpe?g|gif)$/,
            use: [
              {
                loader: 'file-loader',
              }
            ]
          }
          ],

          
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Mi Webpack App',
            // filename: 'holamundo.html'
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
          filename: '[name].css',
          ignoreOrder: false
        }),
        new CopyPlugin({
          patterns: [
            {from: 'src/assets/', to:'assets/'}
          ],
        }),
    ]
}