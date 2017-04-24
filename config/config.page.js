/**
 *  生成页面配置
 *  Created by shiyanlin
 *  810975746@qq.com
 */

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