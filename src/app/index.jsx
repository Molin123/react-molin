const React = require('react');
const ReactDOM = require('react-dom');

import { NavBar, Icon } from 'antd-mobile';


import styles from './../app.less';

export default class Index extends React.Component{
	render(){
        return(
            <div>
		    	<NavBar leftContent="返回" mode="light" onLeftClick={() => console.log('onLeftClick')}
		      		rightContent={[
		        		<Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
		        		<Icon key="1" type="ellipsis" />,
		      		]}
		    	>NavBar</NavBar>
		  	</div>
        )
    }
}
