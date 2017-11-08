import React from "react";
import { connect } from "react-redux";

var _ = require('lodash');

import SectionHeader from "../global/SectionHeader";
import SectionText from "../global/SectionText";
import SectionImage from "../global/SectionImage";

let Header='',Copy='';
let DisplayMediaKit,FetchMediaKit,Surveys, PDF_URL, IMG_URL;

@connect((store) =>{
		return{
			MEDIAKIT: store.MEDIAKIT,
			ABOUT:store.ABOUT.Site_Meta_data,
			}
	})
export default class MediaKits extends React.Component {
	
	// Function to create Component UI
	CreateMediaKits(MediaKits){
	
		return MediaKits.map((survey, i)=>{

			var DivClass="col-md-2  col-sm-2 col-xs-6 DisplaymediaKits text-center";
			if(i==0){	DivClass="col-md-2  col-md-offset-1  col-sm-offset-1 col-sm-2 col-xs-6 DisplaymediaKits text-center"; }
					
			return(
					<div key={i} class={DivClass}>
						<a href={survey.acf.mk_pdf.url} target="_blank">
							<div class="overlay"> 
								<div>
									<i class="fa fa-cloud-download" aria-hidden="true"></i>
									<h3>Download the {survey.title.rendered} Media kit </h3>
								</div>
							</div>
							<SectionImage 
									img={survey.acf.mk_image} 
									AddClass="img-responsive center-block"
								/>
						</a>
					</div>
					)
				})
	}
	
	constructor() {super(); }

	componentWillMount(){ 
		
		// this.forceUpdate(); 
		
		// Create UI
		FetchMediaKit = this.props.MEDIAKIT.mediakit;
		DisplayMediaKit = this.CreateMediaKits(FetchMediaKit);
			
		if(_.isEmpty(this.props.ABOUT) == false)
			{
				let ACF = this.props.ABOUT.acf;
				Header = <SectionHeader text={ACF.media_kit_header}/>;
				Copy = <div dangerouslySetInnerHTML={{__html:ACF.media_kit_copy}} />
		}
	
	}


  render() {
	  
    return (
			<div id="MediaKits" class="text-center">
				{Header}
				{Copy}
				{DisplayMediaKit}
			</div>
    );
  }
}
