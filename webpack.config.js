const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const RemarkHTML = require('remark-html')
const RemarkFrontmatter = require('remark-frontmatter')
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
    extensions: ['.tsx', '.jsx', '.ts', '.js'],
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
    path: path.resolve(__dirname, './docs')
  },
  plugins: [
    new HTMLWebpackPlugin({ template: './src/assets/index.html' }),
    new CopyPlugin({ patterns: ['./src/public/CNAME'] }),
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
        use: [
          { loader: 'html-loader' },
          {
            loader: 'remark-loader',
            options: {
              removeFrontMatter: false,
              remarkOptions: { plugins: [RemarkHTML, RemarkFrontmatter] },
            },
          },
        ],
      },
    ],
  },
}
