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


// bundle模型用来异步加载组件
import Bundle from './bundle.js';

// 引入单个页面（包括嵌套的子页面）
// 同步引入
import Index from './app/index.js';
// 异步引入
import ListContainer from 'bundle-loader?lazy&name=app-[name]!./app/list.js';

const List = () => (
    <Bundle load={ListContainer}>
        {(List) => <List />}
    </Bundle>
)

class Init extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount() {
        console.log('will')
    }
    render() {
        return (
            <HashRouter>
                <Router basename="/">
                    <div>
                        <Route exact path="/" component={Index} />
                        <Route path="/list" component={List} />
                    </div>
                </Router>
            </HashRouter>
        )
    }
    componentDidMount(){
    }
}


// 配置路由，并将路由注入到id为init的DOM元素中
ReactDOM.render((
    <Init />
), document.querySelector('#init'))