const React = require('react');
const ReactDOM = require('react-dom');

// 引入标准Fetch及IE兼容依赖
import 'whatwg-fetch';
import 'es6-promise/dist/es6-promise.min.js';
import 'fetch-ie8/fetch.js';

// 引入React-Router模块
import { HashRouter } from 'react-router-dom'
import { HashRouter as Router, Route } from 'react-router-dom'


// 引入单个页面（包括嵌套的子页面）
import Index from './app/index.jsx';
import List from './app/list.jsx';

class Init extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
        	   {this.props.children}
            </div>
        )
    }
    componentDidMount(){
    }
}


// 配置路由，并将路由注入到id为init的DOM元素中
ReactDOM.render((
    <HashRouter>
        <Router basename="/">
            <div>
                <Route exact path="/" component={Index} />
                <Route path="/list" component={List} />
            </div>
        </Router>
    </HashRouter>
), document.querySelector('#init'))