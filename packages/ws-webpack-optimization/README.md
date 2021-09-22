# `ws-webpack-optimization`

> TODO: description

## 实战
- 如何配置和启动项目
- 进行数据性能分析
- 编译时间的优化
- 编译体积的优化
- 如何运行更快


### 数据性能分析
```js
// webpack编译失败的错误提示
yarn add --dev friendly-errors-webpack-plugin node-notifier
// 分析打包速度
yarn add --dev speed-measure-webpack5-plugin
// 体积分析
yarn add --dev webpack-bundle-analyzer
```

### 编译时间的优化
- 减少处理文件
  1. 配置`resolve.extensions:['.js','.json']`, 制定extensions之后可以在`require`或者`import`的时候不加拓展名，查找对应资源会依次添加拓展名进行匹配；
  2. 配置`resolve.alias`别名，针对第三方库，如Date，jQuery，lodash等
- 缩小查找范围
```js
resolve: {
  extensions: ['.js', '.vue', '.json'],
  alias: {
    'vue': 'node_module/vue/dist/vue.esm.js',
    '@': resolve('src'),
  }
},
// 第三方库的解决：外部依赖，外部引入，直接使用，不打包 - 减小体积
externals:{
  vue:'vue'
},
// 自定义loader处理
resolveLoader:{
  modules:[loadersPath,'node_module]
}

```

