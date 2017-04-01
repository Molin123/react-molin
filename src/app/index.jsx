const React = require('react');
const ReactDOM = require('react-dom');

import { NavBar, Icon } from 'antd-mobile';


import styles from './../app.less';

export default class Index extends React.Component{
	testFetch = () => {
		fetch('/wapapi/User/taskOverView',{
			method:'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            credentials: 'include',
            body:''
		})
		.then((res) => { return res.json(); })
        .then((data) => {
            console.log(data)
        })
        .catch((e) => { 
            
        });
	}
	componentDidMount () {
		this.testFetch()
	}
	render(){
        return(
            <div>
		    	<NavBar leftContent="返回1" mode="light" onLeftClick={() => console.log('onLeftClick')}
		      		rightContent={[
		        		<Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
		        		<Icon key="1" type="ellipsis" />,
		      		]}
		    	>NavBar</NavBar>
		  	</div>
        )
    }
}
