const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false ,
})
// const NodepolyfillPlugin = require('node-polyfill-webpack-plugin')
// configureWebpack:(config)=>{
//   const plugins=[]
//   plugins.push(new NodepolyfillPlugin())
// }