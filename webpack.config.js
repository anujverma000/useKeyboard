const path = require('path');

const webpackConfig = () => ({
  name: 'useKeyboard',
  mode: 'production',
  target: 'web',
  entry: {
    useKeyboard: './src/index.ts',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  output: {
    path: path.resolve(__dirname, `build/`),
    filename: `[name].js`,
    library: `[name]`,
    libraryTarget: 'commonjs2',
  },
});

module.exports = webpackConfig();
