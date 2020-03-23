const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const ROOT_PATH = __dirname;
const PATHS = {
  src: ROOT_PATH + '/app',
  build: ROOT_PATH + '/www',
  vendor: ROOT_PATH + '/app/vendor',
};

let isProd = !!process.env.NODE_ENV;

let plugins = renderPlugins();
isProd && plugins.push(new webpack.optimize.UglifyJsPlugin());
!isProd && plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = {
  // devtool: 'source-map',
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? false : 'source-map',

  entry: {
    app: PATHS.src + '/app.js',
    /*vendor_js: [
      PATHS.vendor + '/ionic/js/ionic.bundle.js',
      PATHS.vendor + '/swiper/js/swiper.js',
      'oclazyload',
    ],
    vendor_css: [
      PATHS.vendor + '/ionic/css/ionic.css',
      PATHS.vendor + '/swiper/css/swiper.css',
    ]*/
  },

  output: {
    path: PATHS.build,
    // publicPath: '/www/',
    filename: 'script/[name].bundle.[hash].js',
  },

  /*optimization: {
    splitChunks: {
      cacheGroups: {
        app: {
          name: "app",
          chunks: "initial",
          minChunks: 2,
          priority: 10,
        },
        vendors: {
          name: "vendor_js",
          chunks: "initial",
          minChunks: 2,
          priority: -10,
        },
        vendor_css: {
          name: "vendor_css",
          chunks: "initial",
          minChunks: 2,
          priority: 2,
        }
      }
    }
  },*/

  devServer: {
    contentBase: PATHS.build,
    historyApiFallback: true,
    inline: true,
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: isProd ? true : false
            },
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: false,
              localIdentName: '[name]-[local]--[hash:base64:5]'
            },
          },
          {
            loader: 'postcss-loader',
          }
        ]
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules|vendor/,
        use: {
          loader: 'babel-loader',
          options: { presets: [], plugins: [] },
        },
      },
      {
        test: /\.s[c|a]ss/,
        // reference <https://www.npmjs.com/package/extract-text-webpack-plugin>
        use: isProd
        ? ExtractTextPlugin.extract({ fallback: ['style-loader'], use: ['css-loader', 'sass-loader'], publicPath: '../' })
        : ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { importLoaders: 1 } },
          { loader: "postcss-loader" },
          { loader: "less-loader" }
        ],
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg|webp)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: 'images/'
            }
          },
          // {
          //   loader: 'file-loader',
          //   options: { name: '[name].[hash].[ext]', outputPath: 'images/' },
          // },
          // {
          //   loader: 'image-webpack-loader',
          //   options: { bypassOnDebug: true },
          // },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)\w*/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'fonts/'
        }
      },
      {
        test: /\.(tsv|cvs|geojson)\w*/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'data/'
        }
      }
    ]
  },

  plugins: plugins
};



function renderPlugins() {
  return [
    new webpack.BannerPlugin(' author: @xaoise \r\n date: ' + (new Date).getTime() + '\r\n url: www.baidu.com'),
    new webpack.NamedModulesPlugin(),
    /*new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor_js', 'vendor_css']
    }),*/
    new HtmlWebpackPlugin({
      template: PATHS.src + '/index.html',
      hash: true,
      minify: {
        collapseWhitespace: isProd ? true : false,
      },
    }),
    new ExtractTextPlugin({
      filename: 'style/[name].[hash].css',
      // disable: !isProd
    }),
    new CleanWebpackPlugin(PATHS.build + '/*', {
      root: ROOT_PATH,
      verbose: true,
      dry: false
    }),
    new CopyWebpackPlugin([
      { from: 'app/manifest.json' },
      { from: 'app/images/favicon.ico' },
      { from: 'resources/icon.png' },
    ]),
  ];
}
