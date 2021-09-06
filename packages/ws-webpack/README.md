# `ws-webpack`

> TODO: description

## webpack流程
1. 找到webpack包lib文件下的webpack.js文件，开始执行
2. webpack第一步，校验参数 options，`const compiler = webpack(webpackOptions) 语句开始执行`
3. 创建 compiler = createCompiler() => const compiler = new Compiler(options.context)
    - 配置默认参数 options属性
    - 给 compiler对象 赋值options属性
    - 配置 NodeEnvironmentPlugin 环境插件，让 compiler对象具有 读写模块的方法
    - 挂载插件
    - 返回 compiler对象
    - const compiler = webpack(webpackOptions) 语句结束，compiler对象创建完成
5. 开始编译的入口 `compiler.run() 语句开始执行`