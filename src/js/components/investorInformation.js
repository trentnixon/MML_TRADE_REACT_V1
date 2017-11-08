import React from "react";
import { connect } from "react-redux";

import Navigation from "./Navigation/";
import Contact from "./Contact/";

//var Copy,Header,Docs, MediaRelease, workplace,Announcements, II,PDFPATH;
let content=''
@connect((store) =>{
		return{
			PAGE: store.ABOUT
		}
	})
export default class Layout extends React.Component {
  	constructor() { super();}
	
	
	onPageLoad(){
		//event.preventDefault();
		//var target = event.target 
		var Offset = jQuery("#Header").offset().top - 80;
		jQuery('html, body').animate({scrollTop: Offset},'slow','swing');
	}	
	
	
	componentWillMount(){
		const PAGEID=255;
		this.props.PAGE.About.map((page,i)=>{
			if(page.id === PAGEID)
				{ 
					content = <div dangerouslySetInnerHTML={{__html: page.content.rendered}} /> ;
			}
		})
	
	}

	componentDidMount(){ this.onPageLoad(); }

  render() {
   return (
   			<div>
				<Navigation {... this.props}/>
					<section class="secondary" id="Information" >
						<div class="container">
							<div class="col-md-12" id="Header">
								<div class="row">
									{content}
								</div>
							</div>
						</div>
					</section>
					<Contact />
		</div>
	);
  }
}
