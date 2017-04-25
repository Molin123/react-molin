/**
 *  跨域接口代理配置
 *  Created by shiyanlin
 *  810975746@qq.com
 */

module.exports = {
    '/wapapi/User/taskOverView': {
        changeOrigin: true,
        target: 'http://www.baidu.com',
        secure: false,
    },
}