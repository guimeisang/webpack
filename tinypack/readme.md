## 了解一波基础

### 先理解下什么是模块化，CommonJS、AMD/CMD、ES6 Modules
> [我觉得是讲的最为清楚的文档](https://github.com/muwoo/blogs/issues/28)

### CommonJS 部分
- Node.js是commonJS 规范的主要实践者，他有四个重要的环境变量为模块化的实现提供支持：module,exports,require,global。由于在服务端，模块文件都是存在本地磁盘，读取速度很快，所以能够使用同步加载；

### AMD
> 异步加载，所有依赖这个模块的语句，都定义在一个回调函数中，等加载完之后，这个回调函数才会运行。
> AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。
> 性能较好

```js
    // 定义 moduleA 依赖a,b模块；
    define(['./a', './b'], (a, b) => {
        a.doSomething();
        b.doSomething();
    })

    // 使用
    require(['./moduleA'], (moduleA) => {
        // ...
    })
```

### CMD
> CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。
> AMD 推崇前置，提前执行，CMD推崇依赖就近，延迟执行。
> 代码在运行时，首先是不知道依赖的，需要遍历所有的require关键字，找出后面的依赖。具体做法是将function toString后，用正则匹配出require关键字后面的依赖。显然，这是一种牺牲性能来换取更多开发便利的方法。CMD对于开发来说比较友好，因为他不需要去记忆各个依赖。AMD则需要开发记忆所有的依赖关系，但是性能会好点；



### ES6 Module
主要是import和export两个命令，ES6 Modules 不是对象，import 命令会被javascript引擎静态分析，在编译时引入模块代码，而不是在代码运行时加载，所以无法条件加载。

### ES6 模块与 CommonJS 模块的差异
- CommonJS 模块输出的是一个对象（运行后的值）、ES6 模块输出的是代码引用；
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。


### 总之
- es6 modules 是一个编译时就会确定模块依赖关系的方式
- CommonJS的模块规范中，Node 在对 JS 文件进行编译的过程中，会对文件中的内容进行头尾包装，在头部添加(function (export, require, modules, __filename, __dirname){\n 在尾部添加了\n};。这样我们在单个JS文件内部可以使用这些参数


## AST基础知识
> 抽象语法树  

![js源代码抽象语法结构的树状表现形式](https://pic2.zhimg.com/80/v2-d67bace15cbbf7dd0bfd539d478e3bed_hd.jpg)

## 正文

> 转换前：

```js
// index.js
import a from './test'
console.log(a)

// test.js
import b from './message'
const a = 'hello' + b
export default a

// message.js
const b = 'world'
export default b
```

> 转换后

```js
(function(modules){
    // ...
})({
    // ...
})
```
这是一个自执行函数，执行的时候不断的往底层去找文件，然后再一级一级的返回到根文件 index.js

> 其他
- [Babylon和babel-traverse详解](https://github.com/xtx1130/blog/issues/7)







