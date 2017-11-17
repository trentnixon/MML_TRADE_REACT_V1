import React from "react";
import { Link } from 'react-router-dom';


const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();


import Audio from "./News_Audio";
import Video from "./News_Video";
import NewsHeader from "./News_Header"
import News_Share from "./News_Share";

let News_Item, News_Audio='', News_Video='', News_Header='', NewsTitle='', NewsExtract='', News_Image='';
export default class Show_a_News_Item extends React.Component {


	onPageLoad(){
		
		var Offset = jQuery("#ScrollToNews").offset().top - 80;
		jQuery('html, body').animate({scrollTop: Offset},'slow','swing');
		
	}
	
	CreateNewsList(List, SLUG)
		{
			return List.map((article,i)=>{
				if(article.slug === SLUG)
					{
						//console.log(article.acf.header_image, article.acf.audio_link);
						// CLear Media
						News_Audio='';
						News_Video='';
						
						if(article.acf.audio_link != ""){
							News_Audio = <Audio audio={article.acf.audio_link} />
						}
						
						if(article.acf.video_link != ""){
							console.log(article.acf.video_link);
							News_Video = <Video video={article.acf.video_link} />
						}
						
						/*Amend Site Meta data */
						$('title').text(entities.decode(article.title.rendered));
    					$('meta[name=description]').attr('content', entities.decode(article.title.rendered));
						$('meta[name=ogdescription]').attr('content', entities.decode(article.title.rendered));
						$('meta[name=ogtitle]').attr('content', entities.decode(article.title.rendered));
						$('meta[name=ogurl]').attr('content', window.location.href);
						$('meta[name=ogimage]').attr('content', article.acf.news_featured_image);
			
						 NewsTitle=entities.decode(article.title.rendered);
						 NewsExtract=entities.decode(article.title.rendered);
						 News_Header = article.acf.header_image;
						 News_Image=article.acf.news_featured_image;
						
						return(
						<div key={i} class="col-md-10 Display_newsItem">
							
							<h1>{entities.decode(article.title.rendered)}</h1>
							
							<div dangerouslySetInnerHTML={{__html:article.content.rendered}} /> 
							
							{News_Video}
							
							{News_Audio}
							
						</div>
					)
				}
			})
			
	}
  componentWillMount(){ 
	 News_Item = this.CreateNewsList(this.props.NEWS_ITEMS, this.props.slug)
	 
  }
  
  componentDidMount(){
	 
	  setTimeout(function(){ 
			var Offset = jQuery("#ScrollToNews").offset().top - 80;
			jQuery('html, body').animate({scrollTop: Offset},'slow','swing');
		
		 },800)
	 
	 }
  render() {
	
	return (
       <section class="secondary" id="News_Items" >
	   		<NewsHeader image={News_Header} />
	  		
			<div class="container" id="ScrollToNews">
				{News_Item}
				<News_Share
					NewsTitle={NewsTitle}
					NewsExtract={NewsExtract}
					News_Image={News_Image}
				/>
      		</div>

		</section>
    );
  }
}
