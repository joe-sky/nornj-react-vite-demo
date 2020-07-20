// @ts-check
const reactPlugin = require('vite-plugin-react');

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: 'react',
  plugins: [reactPlugin],
  alias: {
    nornj: 'nornj/dist/nornj.esm'
  }
};

module.exports = config;
