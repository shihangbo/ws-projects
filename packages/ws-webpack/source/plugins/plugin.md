## plugin
- webpack 通过 plugins 实现各种功能；
- 开发者可以通过插件引入自己的行为到webpack构建流程中。但是需要理解一些webpack底层的内部特性来做相应的钩子；

## plugin
- 在webapck插件开发中，最重要的两个资源`compiler`和`compilation`对象；
- `compiler` 对象代表完整的 webpack 环境配置
- `compilation`对象代表了一次资源版本构建