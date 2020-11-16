module.exports = {
  plugins:
    process.env === 'production'
      ? [
          require('autoprefixer'),
          require('cssnano')({
            preset: 'default',
          }),
        ]
      : [],
};
