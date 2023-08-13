const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/assets/js/index.js',
    menu: './src/assets/js/menu.js',
    blog: './src/assets/js/blog.js',
    pricing: './src/assets/js/pricing.js',
    contact: './src/assets/js/contact.js',
    signup: './src/assets/js/signup.js',
    login: './src/assets/js/login.js',
    


  },
  output: {
    clean: true,
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devServer: {
    static: "./src",
    
    compress: true,
    port: 9000,
    hot: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
    }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
      chunks: ['index'],
      inject: true,
      minify: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/menu.html'),
      filename: 'menu.html',
      chunks: ['menu'],
      inject: true,
      minify: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/blog.html'),
      filename: 'blog.html',
      chunks: ['blog'],
      inject: true,
      minify: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/pricing.html'),
      filename: 'pricing.html',
      chunks: ['pricing'],
      inject: true,
      minify: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/contact.html'),
      filename: 'contact.html',
      chunks: ['contact'],
      inject: true,
      minify: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/login.html'),
      filename: 'login.html',
      chunks: ['login'],
      inject: true,
      minify: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/signup.html'),
      filename: 'signup.html',
      chunks: ['signup'],
      inject: true,
      minify: true,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
};