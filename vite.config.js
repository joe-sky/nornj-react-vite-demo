// @ts-check
const reactPlugin = require('vite-plugin-react');
const babel = require('rollup-plugin-babel');

const isProd = process.env.VITE_ENV === 'production';

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: 'react',
  plugins: [reactPlugin],
  rollupInputOptions: {
    plugins: [
      babel({
        babelrc: false,
        presets: ['@babel/preset-react'],
        plugins: ['nornj-in-jsx'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      })
    ]
  }
};

if (!isProd) {
  config.alias = {
    nornj: 'nornj/dist/nornj.esm'
  };
}

module.exports = config;
