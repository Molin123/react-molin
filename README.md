# react-molin

[react-molin](https://github.com/Molin123/react-molin)是一个全新的基于webpack2、react15、react-router4、antd-mobile的前端架构实现方案（h5）



# react-molin的优势

* 基于最新的webpack2、react15、react-router4
* 相比antd官方框架[dva](https://github.com/dvajs/dva)更加轻量级
* 支持多个单页面应用同时开发
* 不同入口页面css/js单独合并压缩
* 静态文件自动添加版本号
* 高清脚本解决方案，完美支持1px
* ES2015
* less替代css
* fetch替代Ajax
* ESlint在代码提交前进行规范检测


# 项目依赖

* webpack^2.3.2
* antd-mobile^1.0.7
* react^15.4.2
* react-router-dom^4.0.0


# 运行

```
git clone https://github.com/Molin123/react-molin.git
cd react-molin
npm install(如果报错，请使用cnpm) 
npm run start/npm run start-win
```

然后即可以访问[http://127.0.0.1:1024/home.html#/index](http://127.0.0.1:1024/home.html#/index)看到页面了

# 编译

```
npm run build/npm run build-win
```

编译后的文件会生成到`output`目录下，直接将这个目录下的文件部署到服务器上即可。



# 目录结构

```
.
├── src
│   ├── app
│   │   ├── images/
│   │   ├── index.js
│   │   └── list.js
│   ├── home
│   │   ├── images/
│   │   ├── index.js
│   │   └── list.js
│   ├── home.js
│   ├── app.js
│   ├── bundle.js
│   └── template.ejs
├── output
│   ├── images/
│   ├── **.html
│   ├── **.css
│   └── **.js
├── config
│   ├── config.page.js
│   ├── config.server.js
│   ├── config.deploy.js
│   └── config.proxy.js
├── mock
│   └── **.json
├── .babelrc
├── .eslintrc
├── gulpfile.js
├── package.json
└── webpack.config.js
```

1. 其中`home`和`app`是两个单独的页面
2. `src/template.ejs`为生成HTML文件的模板，可自由修改
3. `src/bundle.js`是代码分割模型
4. `output/`目录下是build后的生成文件，可直接部署到服务器


# 多页面入口配置

如果想在项目里面增加入口，只需要在`./config/config.page.js`中增加配置即可

```
module.exports = {
    "list": [{
        "name": "app",
        "entry": "./app.js",
        "title": "app页面",
        "filename": "app.html",
        "template": "template.ejs",
        "chunks": "app"
    }, {
        "name": "home",
        "entry": "./home.js",
        "title": "home页面",
        "filename": "home.html",
        "template": "template.ejs",
        "chunks": "home"
    }]
}
```


# todoList

1. ~~支持多入口（3.30 done）~~
2. ~~common拆分（暂时不做）~~
3. ~~静态文件加戳（3.31 done）~~
4. ~~dev-server配置（4.6 done）~~
5. ~~目录结构优化（4.7 done）~~
6. ~~webpack配置拆分（暂时不需要）~~
7. ~~使用react-router路由（3.30 done）~~
8. ~~fetch语法支持（4.1 done）~~
9. ~~静态文件输出（3.31 done）~~
10. ~~打包后js文件过大（3.31 做压缩处理 4.20 做代码拆分）~~
11. ~~热更新（4.5 done）~~
12. ~~css打包存在问题（4.5 done）~~
13. ~~验证多less文件的合并情况（4.6 done）~~
14. ~~图片目录（4.7 done）~~
15. ~~css压缩（4.24 done）~~
16. ~~代码拆分（4.20 done）~~


# 更新日志

### 1.0.1版本 2017/06/12
更新内容：
1. 修改webpack配置，开发环境下不压缩js/css，缩短热更新时间。
2. 增加代码部署功能`gulp deploy --env serverName`

### 1.0.2版本 2017/06/20
更新内容：
1. 升级webpack版本到3.0.0
2. 使用webpack3.0.0新功能——范围提升（Scope Hoisting ），提高JavaScript在浏览器中执行速度。



# hot和inline的区别

webpack-dev-server的inline和hot参数都可以在代码改变的时候实现浏览器页面自动更新，具体的区别请参考[webpack-dev-server中inline和HMR的区别](https://juejin.im/post/593e5454a0bb9f006b59d85a)

# react-router4如何做Code Splitting

react-router4做按需加载，需要使用[bundle-loader](https://github.com/webpack-contrib/bundle-loader)来实现。具体请参考[react-router4实现按需加载](https://juejin.im/post/58f9717e44d9040069d06cd6)

# 如何在react项目中使用ESlint检测代码规范

ESLint是js中目前比较流行的插件化的静态代码检测工具。通过使用它可以保证高质量的代码，尽量减少和提早发现一些错误。使用eslint可以在工程中保证一致的代码风格，特别是当工程变得越来越大、越来越多的人参与进来时，需要加强一些最佳实践。

[如何在react项目中使用ESlint检测代码规范](https://juejin.im/post/58ff0de18d6d810058a69a26)

# 代码部署

使用gulp-sftp实现文件上传到服务器上的指定目录。需要全局安装gulp`npm install -g gulp`。

在`config/config.deploy.js`中增加部署服务器的配置，可添加多个。

```
module.exports = {
    "testServer": {
        "host": '123.206.221.185',
        "remotePath": '/root/www',
        "user": 'root',
        "pass": 'password'
    },
    "testServer2": {
        "host": '123.206.221.185',
        "remotePath": '/root/www',
        "user": 'root',
        "pass": 'password'
    }
}
```

然后在build之后执行`gulp deploy --env testServer`即可将`./output`下的代码部署到对应的服务器上。


