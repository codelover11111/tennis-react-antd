const CracoLessPlugin = require('craco-less');
const themeStyles = require('./src/styles/theme');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: themeStyles,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};