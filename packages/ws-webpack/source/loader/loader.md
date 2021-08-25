## loader
- webpack只能处理js的模块，如果需要处理其他类型的文件，需要使用loader进行转换；
- loader是webpack一个重要的概念，他是指用来将一段代码转换成另一段代码的webpack加载器。

## loader
- loader 执行顺序：从右到左，从下到上
- loader 分   类：pre在前，normal，行内inline，post在后，
- inline-loader
  1. -! 【没有`pre + normal`】不会让文件再去通过 `pre + normal` loader来处理 
  2. !  【没有`normal`】
  3. !! 【都不要，只要 `inline-loader` 处理】

- loader 默认有两部分组成，pitch 和 loader
  1. 如果 pitch 有返回值：
     中断后面loader的 pitch 执行，即中断后面loader执行
     直接执行前面已经执行过 pitch 的 loader，即跳过后面有所(包括自己的)loader