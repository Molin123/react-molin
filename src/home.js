/**
 * Created by shiyanlin
 * 810975746@qq.com
 */
const React = require('react');
const ReactDOM = require('react-dom');

// 引入标准Fetch及IE兼容依赖
import 'whatwg-fetch';
import 'es6-promise/dist/es6-promise.min.js';
import 'fetch-ie8/fetch.js';

// 引入React-Router模块
import { HashRouter } from 'react-router-dom'
import { HashRouter as Router, Route } from 'react-router-dom'


// 引入单个页面（包括嵌套的子页面）同步方式
import Index from './home/index.js';
import List from './home/list.js';


import styles from './home.less';

class Init extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
            </div>
        )
    }
}

const routes = [
    { 
        path: '/index',
        component: Index
    },
    { 
        path: '/list',
        component: List
    }
]

const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        // 把自路由向下传递来达到嵌套。
        <route.component {...props} routes={route.routes}/>
    )}/>
)


// 配置路由，并将路由注入到id为init的DOM元素中
ReactDOM.render((
    <HashRouter>
        <Router basename="/">
            <div>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route}/>
                ))}
            </div>
        </Router>
    </HashRouter>
), document.querySelector('#init'))

if(module.hot){
    module.hot.accept()
}