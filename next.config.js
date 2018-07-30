const composePlugins = require('next-compose-plugins')
const withTypeScript = require('@zeit/next-typescript')
const TypeScriptChecker = require('fork-ts-checker-webpack-plugin')
const path = require('path')
const withSourceMaps = require('@zeit/next-source-maps')
const withMDX = require('@zeit/next-mdx')
const mdxImagesPlugin = require('remark-images')
const mdxEmjoiPlugin = require('remark-emoji')

module.exports = composePlugins([
  [ withTypeScript, {
    webpack(config, options) {
      if(options.isServer) {
        config.plugins.push(new TypeScriptChecker({
          tslint: path.join(__dirname, './tslint.json')
        }))
      }
      return config
    }
  }],

  [ withMDX, {
    mdPlugins: [
      mdxImagesPlugin,
      mdxEmjoiPlugin
    ]
  }],

  // alternative config (tried with no debugging success)
  // [ withMDX, {
  //   webpack(config, options) {
  //     config.module.rules.push({
  //       test: /\.md$/,
  //       use: [
  //         options.defaultLoaders.babel, {
  //           loader: '@mdx-js/loader',
  //           options: {
  //             mdPlugins: [
  //               mdxImagesPlugin,
  //               mdxEmjoiPlugin
  //             ]
  //           }
  //         }
  //       ]
  //     })
  //     return config
  //   }
  // }]

  [ withSourceMaps ]

])