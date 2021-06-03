const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const RemarkHTML = require('remark-html')
// const RemarkFrontmatter = require('remark-frontmatter')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

const mode = process.env.ENV_BUILD_MODE || 'production'
const sourceMap =
  mode === 'production' ? 'nosources-source-map' : 'eval-source-map'
const cssExportLoader =
  mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader'

module.exports = {
  mode,
  devtool: sourceMap,
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.tsx', '.jsx', '.ts', '.js', '.css', '.scss'],
  },
  devServer: { historyApiFallback: true },
  entry: {
    app: { import: './src/index.tsx', dependOn: 'vendor' },
    vendor: [
      'react/jsx-runtime',
      'react-dom',
      'react-router-dom',
      '@loadable/component',
    ],
  },
  output: {
    filename: '[name].[contenthash:7].js',
    clean: true,
  },
  plugins: [
    new HTMLWebpackPlugin({ template: './src/assets/index.html' }),
    new CopyPlugin({ patterns: [{ from: 'src/public', to: '.' }] }),
  ].concat(mode === 'production' ? [new MiniCssExtractPlugin()] : []),
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: {
          loader: 'swc-loader',
          options: {
            sync: true,
            jsc: {
              parser: { syntax: 'typescript', tsx: true, dynamicImport: true },
              transform: { react: { runtime: 'automatic' } },
            },
          },
        },
      },
      {
        test: /\.css$/,
        use: [cssExportLoader, 'css-loader'],
      },
      {
        test: /\.s(c|a)ss$/,
        use: [cssExportLoader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.md$/,
        type: 'asset/source',
        use: [
          {
            loader: 'remark-loader',
            options: {
              remarkOptions: { plugins: [RemarkHTML] },
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[contenthash:7][ext][query]'
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[contenthash:7][ext][query]'
        }
      },
    ],
  },
  optimization: Object.assign({}, mode === 'production' ? {
    minimizer: ['...', new CssMinimizerPlugin(),]
  } : {
    runtimeChunk: true,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  })
}
