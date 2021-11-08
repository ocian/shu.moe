import * as path from 'path'
import * as webpack from 'webpack'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const pathOutput = path.resolve(__dirname, 'dist')

function compiler(): webpack.Configuration {
  const { ENV } = process.env

  const mode = ENV !== 'production' ? 'development' : 'production'
  const filename =
    mode !== 'production' ? '[name].js' : '[name].[contenthash:7].js'

  return {
    entry: './src/index.tsx',
    output: {
      path: pathOutput,
      filename,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [{ loader: 'ts-loader', options: { transpileOnly: true } }],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/assets/template/index.html'),
        title: 'React App',
      }),
    ],
    devServer: { port: 9000, hot: true },
    resolve: { extensions: ['.tsx', '.ts', '.jsx', '.js'] },
    mode,
  }
}

export default compiler
