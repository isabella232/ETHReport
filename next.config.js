const withSass = require('@zeit/next-sass')
module.exports =
  withSass({
    assetPrefix: isProduction ? '/ETHPrize' : '',
    exportPathMap: function(defaultPathMap) {
      return {
        '/': { page: '/' }
      }
    }
  });
