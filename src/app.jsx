const React = require('react');
const ReactDOM = require('react-dom');

import { Button } from 'antd-mobile';
class Init extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
        	<Button>Start</Button>
        )
    }
    componentDidMount(){
    }
}
ReactDOM.render(
	<Init />
,  document.querySelector('#init'));