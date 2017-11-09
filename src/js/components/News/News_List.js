import React from "react";
import { Link } from 'react-router-dom';
import {Filtered_News} from  "../../actions/";

import Filter from "./News_Filter";
import NewsHeader from "./News_Header"

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

let News_List, ArticleNum=0, News_Header='';
export default class List_The_News extends React.Component {
	
	
	CreateNewsList(List)
		{
			return List.map((article,i)=>{
				//console.log(article);
				return(
						<div key={i} class="col-md-4 newsItem">
							<img src={article.acf.news_featured_image} class="article_thumb" />
							<h1>{entities.decode(article.title.rendered)}</h1>
							<div dangerouslySetInnerHTML={{__html:article.excerpt.rendered}} /> 
							<div class="cta">
								<Link to={"/news/"+article.slug} class="btn btn-primary btn-showreel" > See Full Article</Link>
							</div>
						</div>
				)
			})
	}
 
 	findHeader(Meta){
		const PAGEID=275;
			Meta.NEWS_META.About.map((page,i)=>{
			if(page.id === PAGEID)
				{ 
					//console.log(page.acf.news_header)
					News_Header = page.acf.news_header
				}
			})
	}
 
  	componentWillMount(){ 

			if(this.props.FILTERED_NEWS_ITEMS.Filtered_News_Items == false)
				{ Filtered_News(this.props.FILTERED_NEWS_ITEMS.News_Items) }
	}

	shouldComponentUpdate(nextProps, nextState){ return true;}
	componentWillUpdate(nextProps, nextState){ 		
		News_List = this.CreateNewsList(nextProps.FILTERED_NEWS_ITEMS.Filtered_News_Items);
		ArticleNum = nextProps.FILTERED_NEWS_ITEMS.Filtered_News_Items.length
		this.findHeader(nextProps)
	}
	
  render() {
	return (
		<div>
       		<NewsHeader image={News_Header} />
			
			<Filter {... this.props}/>
			
			<section class="" id="List_The_News" >
	  			<div class="container"  id="ScrollToNews">
					<div class="col-md-12">
						<p class="Num_Articles"><span>{ArticleNum}</span> Articles Found</p>
					</div>
	  				{News_List}
      			</div>
			</section>
		</div>
    );
  }
}
