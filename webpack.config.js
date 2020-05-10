const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: [
    '@babel/polyfill', // enables async-await
    './src/index.js',
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};

// const isDev = process.env.NODE_ENV === 'development';
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = {
//   mode: isDev ? 'development' : 'production',
//   entry: [
//     '@babel/polyfill', // enables async-await
//     './src/index.js',
//   ],
//   output: {
//     path: __dirname,
//     filename: './public/bundle.js',
//   },

//   devtool: 'source-map',
//   watchOptions: {
//     ignored: /node_modules/,
//   },
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: isDev ? '[name].css' : '[name].[hash].css',
//       chunkFilename: isDev ? '[id].css' : '[id].[hash].css',
//     }),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//       },
//       {
//         test: /\.module\.s(a|c)ss$/,
//         loader: [
//           isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
//           {
//             loader: 'css-loader',
//             options: {
//               modules: true,
//               sourceMap: isDev,
//             },
//           },
//           {
//             loader: 'sass-loader',
//             options: {
//               sourceMap: isDev,
//             },
//           },
//         ],
//       },
//       {
//         test: /\.s(a|c)ss$/,
//         exclude: /\.module.(s(a|c)ss)$/,
//         loader: [
//           isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
//           'css-loader',
//           {
//             loader: 'sass-loader',
//             options: {
//               sourceMap: isDev,
//             },
//           },
//         ],
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.js', '.jsx', '.scss'],
//   },
// };
