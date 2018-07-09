const withSass = require('@zeit/next-sass');

const dev = process && process.env && process.env.NODE_ENV === 'development';

module.exports =
  withSass({
    assetPrefix: dev ? '' : '/ETHPrize',
    exportPathMap: function(defaultPathMap) {
      return {
        '/': { page: '/' }
      }
    }
  });
