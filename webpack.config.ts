import * as path from 'path'
import * as webpack from 'webpack'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

const pathOutput = {
  dist: path.resolve(__dirname, 'dist'),
  html: path.resolve(__dirname, 'src/assets/template/index.html')
}

function compiler(): webpack.Configuration {
  const { ENV } = process.env

  const mode = ENV !== 'production' ? 'development' : 'production'
  const filename =
    mode !== 'production' ? '[name].js' : '[name].[contenthash:7].js'

  const splitChunks = { chunks: 'all' as 'all', }
  const optimization =
    mode !== 'production'
      ? { splitChunks }
      : { splitChunks, minimizer: ['...', new CssMinimizerPlugin()] }
  const styleLoader =
    mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader
  const plugins =
    mode !== 'production'
      ? []
      : [
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash:7].css',
          chunkFilename: '[id].[contenthash:7].css',
        }),
        new BundleAnalyzerPlugin({ analyzerMode: "static" })
      ]

  return {
    entry: './src/index.tsx',
    output: { path: pathOutput.dist, filename, clean: true, },
    module: {
      rules: [
        { test: /\.tsx?$/, use: [{ loader: 'ts-loader', options: { transpileOnly: true } }], },
        { test: /\.css$/, use: [styleLoader, 'css-loader'], },
        { test: /\.s(a|c)ss$/, use: [styleLoader, 'css-loader', 'sass-loader'] }
      ],
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin(),
      new HtmlWebpackPlugin({ template: pathOutput.html, }),
      ...plugins,
    ],
    devServer: { hot: true },
    resolve: { extensions: ['.tsx', '.ts', '.jsx', '.js'] },
    mode,
    cache: { type: 'filesystem' },
    optimization,
  }
}

export default compiler
