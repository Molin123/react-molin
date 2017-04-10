const React = require('react');
const ReactDOM = require('react-dom');

import { NavBar, Icon } from 'antd-mobile';


import styles from './home.less';

export default class Index extends React.Component{
	render(){
        return(
            <div className="home">
		    	<NavBar leftContent="返回2k4" mode="light" onLeftClick={() => console.log('onLeftClick')}
		      		rightContent={[
		        		<Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
		        		<Icon key="1" type="ellipsis" />,
		      		]}
		    	>NavBar</NavBar>
		    	<img src={require('./images/1.png')} />
		    	<div className="bg-test">5反反复复44444441111付付</div>
		  	</div>
        )
    }
}
