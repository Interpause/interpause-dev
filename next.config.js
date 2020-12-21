module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate_sitemap')
    }
    return config
  },
}