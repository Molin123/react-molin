/**
 * Created by shiyanlin
 * 810975746@qq.com
 */
const React = require('react');
const ReactDOM = require('react-dom');

import { NavBar, Icon } from 'antd-mobile';

import {Link} from 'react-router-dom';

import styles from './../app.less';

export default class Index extends React.Component{
	testFetch = () => {
		fetch('../mock/list.json', {
			method:'get',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            credentials: 'include'
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
		    	<Link to='list'>app/list页面</Link>
		  	</div>
        )
    }
}
