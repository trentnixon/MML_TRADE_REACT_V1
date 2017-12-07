import React from "react";
import { Link } from 'react-router-dom';
var _ = require('lodash');

import {Filtered_News} from  "../../actions/";

import SectionHeader from "../global/SectionHeader";
import SectionText from "../global/SectionText";


let News_Item, FilteredNews=[], Selectcategories, CategoryCheck, content, Title;
export default class News_Filter extends React.Component {
	

  constructor(props) {
    	super(props);
    	this.state = {
				cat:"",
				Cat_list:false,
			};
  	}
	
	filterList(event){
		
		// Really basic filter function
		// Seach posts using lodash for the users query ( > than 4 characters ) against the title and post content.
		// Store the results in the reducer that is passed to the news list component for display
		let i=0
		if(event.target.value.length > 4)
			{
				let results, FilteredNews=[];
		
				this.props.NEWS_ITEMS.map((article,i)=>{
			
					//console.log(article.categories, this.state.cat, article.categories.indexOf(parseInt(this.state.cat)));
					
					// Check to see if the article is in the selected Category
					CategoryCheck = article.categories.indexOf(parseInt(this.state.cat))
					//console.log(CategoryCheck);
					if(CategoryCheck != -1 || this.state.cat == "")
						{
							let  title = article.title.rendered;
							let  content = article.content.rendered;
    		
							// Check Post Title for String
							results = _.includes(title.toLowerCase(), event.target.value.toLowerCase());
					
								if(results == true){ FilteredNews.push(article); }
								else{
									// If not in Title, Check Post Content
									results = _.includes(content.toLowerCase(), event.target.value.toLowerCase());
									if(results == true){ FilteredNews.push(article);}
								}
						}
				}) // Close .Map

				// Send to Action
				Filtered_News(FilteredNews)
				
			} // close if
		else if(event.target.value.length < 4){		
			// String not long enough, so display all articles
			// Send to Action
			Filtered_News(this.props.FILTERED_NEWS_ITEMS.News_Items)
		
		} // Close if else
		
	} //close function
	
	
	
	
	filterCat(event){ 
		this.setState({ cat: event.target.value });
		// Fire Filter	
		// $("#filter").change();	
	}
	
	CreateCategoryFilter(categories){
		if(categories != null)
		{
			this.setState({ Cat_list: true });
			return categories.map((category)=>{
				return(
						<option value={category.id}>{category.name}</option>
					)
			}) 	    
		}
	}	
	
	componentWillMount(){}
	shouldComponentUpdate(nextProps, nextState){ return true;}
	componentWillUpdate(nextProps, nextState){
			if(this.state.Cat_list == false){
				Selectcategories = this.CreateCategoryFilter(nextProps.FILTERED_NEWS_ITEMS.Categories)	
			}
			//console.log(nextProps)
			
			
			const PAGEID=275;
			nextProps.NEWS_META.About.map((page,i)=>{
			if(page.id === PAGEID)
				{ 
					content = <div dangerouslySetInnerHTML={{__html: page.content.rendered}} /> ;
					Title = <SectionHeader text={page.title.rendered}/>;
			}
		})
			
			
	}
  	
	render() {
/*
		Old Select Category Code. 
		Keep here incase it was to be returned. To re apply, insert after input div
		
		<div class="col-md-3">
			<select className="form-control form-control-lg" onChange={this.filterCat.bind(this)} >
				<option value="" >All</option>
					{Selectcategories}
			</select>
		</div>

*/
		return (
       	<section id="News_Items_Filter" >
	  		<div class="container">
				<form>
					<fieldset className="form-group">
						<div class="col-md-12 nopadding">
							<input type="text" id="filter" className="form-control form-control-lg" placeholder="Filter Articles" onChange={this.filterList.bind(this)}/>
						</div>
						
					</fieldset>
				</form>
				{Title}
				{content}
      		</div>
		</section>
    );
  }
}
