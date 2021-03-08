module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
    config.performance
      .maxEntrypointSize(600000)
      .maxAssetSize(600000)
  }
}
