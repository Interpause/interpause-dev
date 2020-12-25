module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (isServer) {
      require('./scripts/generate_sitemap');
    }else{
      config.node = { fs: 'empty' };
    }
    return config
  },
  reactStrictMode: true,
}