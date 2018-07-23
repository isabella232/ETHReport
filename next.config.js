const withSass = require('@zeit/next-sass');

const dev = process && process.env && process.env.NODE_ENV === 'development';
const subDirPath = dev ? '' : '/';

module.exports =
  withSass({
    assetPrefix: subDirPath,
    exportPathMap: function(defaultPathMap) {
      return {
        '/': { page: '/' }
      }
    }
  });

module.exports.publicRuntimeConfig = { // Will be available on both server and client
  subDirPath: subDirPath
};
