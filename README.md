# react-molin

[react-molin](https://github.com/Molin123/react-molin)是一个全新的基于webpack2、react15、react-router4、antd-mobile的前端架构实现方案（h5）



# react-molin的优势

* 基于最新的webpack2、react15、react-router4
* 相比antd官方框架[dva](https://github.com/dvajs/dva)更加轻量级
* 支持多个单页面应用同时开发
* 不同页面css/js单独合并压缩
* 静态文件自动添加版本号
* ES2015
* less替代css
* fetch替代Ajax


# 项目依赖

* webpack^2.3.2
* antd-mobile^1.0.7
* react^15.4.2
* react-router-dom^4.0.0



# todoList

1. ~~支持多入口（3.30 done）~~
2. common拆分
3. 静态文件加戳
4. dev-server配置
5. 目录结构优化
6. webpack配置拆分
7. ~~使用react-router路由（3.30 done）~~
8. fetch语法支持
9. 静态文件输出



# 思考

1. .babelrc 中 "presets": [["es2015", "stage-0"]] 里面为什么不能加"react"
2. react-router  react-router-dom
3. BrowserRouter 未调试成功，最后选用 HashRouter
