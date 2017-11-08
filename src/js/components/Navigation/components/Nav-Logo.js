import React from "react";
import { Link } from 'react-router-dom';

export default class NavigationLogo extends React.Component {
  render() {
    	return ( 
		<Link class="navbar-brand" to="/">
			<img src="http://ec2-54-252-234-67.ap-southeast-2.compute.amazonaws.com/wp-content/uploads/2017/10/MM-Logo-Small.png" />
		</Link>  
	);
  }
}