import React from "react";
import { connect } from "react-redux";
var _ = require('lodash');

import Navigation from "./Navigation/";
import News_Item from "./News/News_Item";

@connect((store) =>{
		return{
			NEWS_ITEMS: store.NEWS_ITEMS
			}
	})
	
export default class Layout extends React.Component {
  constructor() { super();}
  componentWillMount(){ 
  	//console.log(this.props.match.params.article)
  }
  render() {
	return (
      <div>
	  		<Navigation  {... this.props}/>
			<h1>MML News Header</h1>
			<News_Item {... this.props}/>
      </div>
    );
  }
}
