import React from "react";
import { connect } from "react-redux";
var _ = require('lodash');

import Navigation from "./Navigation/";
import List_The_News from "./News/News_List";
import News_Item from  "./News/News_Item"

let DisplayTheNews;

@connect((store) =>{
		return{
			NEWS_ITEMS: store.NEWS_ITEMS.News_Items,
			FILTERED_NEWS_ITEMS: store.NEWS_ITEMS,
			NEWS_META: store.ABOUT			
		}
	})
	
export default class Layout extends React.Component {
  
  constructor() { super();}
  
  onPageLoad(){
		var Offset = jQuery("#ScrollToNews").offset().top - 80;
		jQuery('html, body').animate({scrollTop: Offset},'slow','swing');
	}
	
  DisplayNews(news_item, props){
	 	//  console.log(news_item, props)
	  	if(news_item != null)
			{ DisplayTheNews = <News_Item {... props} slug={props.match.params.news_item}/>}
		else
			{ DisplayTheNews = <List_The_News {... props}  />}
	 }
  
  UpdateMeta(){
	 	document.body.id = "News"
	 }
	 
  componentWillMount(){ 
  		//console.log(this.props.match.params.news_item);
  		this.DisplayNews(this.props.match.params.news_item, this.props) 
		// Change Body ID		
		this.UpdateMeta();
	}
	

	shouldComponentUpdate(nextProps, nextState){ return true;}
	componentWillUpdate(nextProps, nextState){ 
		//console.log(nextProps)
	
		this.DisplayNews(nextProps.match.params.news_item, nextProps) 
		
		// Change Body ID
		this.UpdateMeta();
		
		// Move to articles
		 this.onPageLoad();
	}	

	
  componentDidMount(){ this.onPageLoad(); }	

  
  render() {
	return (
      <div>
	  		<Navigation {... this.props} />
			<div id="NewsList">
				{DisplayTheNews}	
			</div>
      </div>
    );
  }
}
