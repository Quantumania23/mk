const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
  {
    webpack: (config, { }) => {
      // File loader for GLB files
      config.module.rules.push({
        test: /\.(glb)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next',
              name: 'static/media/[name].[hash].[ext]',
            },
          },
        ],
      });

      // URL loader for MP3 files
      config.module.rules.push({
        test: /\.(mp3)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // You can adjust the limit based on your needs
              fallback: 'file-loader',
              publicPath: '/_next',
              outputPath: 'static/media',
              name: '[name].[hash].[ext]',
            },
          },
        ],
      });

      return config;
    },
  },

]);
