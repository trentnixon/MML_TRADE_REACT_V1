import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();


import SectionHeader from "../global/SectionHeader";

let News_List;
@connect((store) =>{
		return{
			NEWS_ITEMS: store.NEWS_ITEMS.News_Items
			}
	})
export default class News_Home_Page_Widget extends React.Component {
	
	CreateNewsList(List)
		{
			let ArticleLimit=4;
			return List.map((article,i)=>{
				if(i < ArticleLimit)
				{
					return(
						<div key={i} class="col-md-3 HomePagenewsItem">
							<Link to={"/news/"+article.slug}><img src={article.acf.news_featured_image} class="article_thumb" /> </Link>
							<h2><Link to={"/news/"+article.slug}>{entities.decode(article.title.rendered)}</Link></h2>
						</div>
					)
				}
			})
	}
 
  componentWillMount(){  News_List = this.CreateNewsList(this.props.NEWS_ITEMS) }
  
  render() {
	return (
       <section class="" id="Home_Page_News_Widget" >
	  		<div class="container">
				<div class="row">
					<SectionHeader text="Latest from Macquaire Media Limted"/>
	  				{News_List}
					<div class="col-md-12 text-center"><Link to="/news" class="btn btn-primary btn-widget-more">All Articles</Link></div>
      			</div>
			</div>
		</section>
    );
  }
}
