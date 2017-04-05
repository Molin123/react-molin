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


# 项目依赖

* webpack^2.3.2
* antd-mobile^1.0.7
* react^15.4.2
* react-router-dom^4.0.0


# 运行

```
git clone https://github.com/Molin123/react-molin.git
npm install --registry https://registry.npm.taobao.org info underscore 
npm run start
```

# 编译

```
npm run build
```

编译后的文件会生成到`output`目录下，直接将这个目录下的文件部署到服务器上即可。



# 目录结构

```
.
├── src
│   ├── app
│   │   ├── index.jsx
│   │   └── list.jsx
│   ├── home
│   │   ├── index.jsx
│   │   └── list.jsx
│   ├── home.jsx
│   ├── app.jsx
│   └── template.ejs
├── output
│   ├── css
│   ├── image
│   └── js
├── .babelrc
├── package.json
└── webpack.config.js
```



# todoList

1. ~~支持多入口（3.30 done）~~
2. ~~common拆分（暂时不做）~~
3. ~~静态文件加戳（3.31 done）~~
4. dev-server配置
5. 目录结构优化
6. ~~webpack配置拆分（暂时不需要）~~
7. ~~使用react-router路由（3.30 done）~~
8. ~~fetch语法支持（4.1 done）~~
9. ~~静态文件输出（3.31 done）~~
10. ~~打包后js文件过大（3.31 已做压缩处理 后期进一步优化）~~
11. ~~热更新（4.5 done）~~
12. ~~css打包存在问题（4.5 done）~~
13. 验证多less文件的合并情况
14. 热更新响应太慢，可能和start时的Warning有关
15. 图片目录



# future

1. redux
2. deploy
3. 。。。


# 思考

1. .babelrc 中 "presets": [["es2015", "stage-0"]] 里面为什么不能加"react"
2. react-router  react-router-dom
3. BrowserRouter 未调试成功，最后选用 HashRouter
4. new webpack.optimize.CommonsChunkPlugin('common')拆分后，本地开发无法加载到css，两个入口的js大小不一样
5. --inline 和 --hot 都何以实现热更新  区别？  对于[hash]和[chunkhash]支持？同时加上plugins会内存泄漏
