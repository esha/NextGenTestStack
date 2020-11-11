const package = require("./package.json")// eslint-disable-line
const webpack = require("webpack")// eslint-disable-line
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        PACKAGE_NAME: JSON.stringify(package.name),
        PACKAGE_VERSION: JSON.stringify(package.version),
      }),
    ],
    devServer: {
      allowedHosts: ["local.esha.com"],
    },
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/assets/variables.scss";
          `,
      },
    },
  },
}
