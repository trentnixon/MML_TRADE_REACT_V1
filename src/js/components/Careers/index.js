import React from "react";
import { connect } from "react-redux";

import SectionHeader from "../global/SectionHeader";
import SectionText from "../global/SectionText";
import SectionImage from "../global/SectionImage";

let Header='', Copy='';
let BgStyle,SupportingStyle,SupportingImg,BackgroundImage, FetchCareer;

// Connect
@connect((store) =>{ return{ ABOUT:store.ABOUT.Site_Meta_data, } })
	
export default class Careers extends React.Component {
	constructor() {  super();  }
	
	ResizeImage(){
		// Resize the image to fit the height
			setTimeout(function(){
				var BoxHeight = jQuery("#Careers .DarkBox").height()
				jQuery(".DarkBox > div.col-md-5").css('height',BoxHeight);
			},100);
		}

	componentWillMount(){
			let ACF = this.props.ABOUT.acf;
			Header = <SectionHeader text={ACF.careers_header}/>;
			Copy = <div dangerouslySetInnerHTML={{__html:ACF.careers__copy}} /> 
		}
  render() {
 	// resize the BG image on render
 	this.ResizeImage();
 
    return (
      	<section id="Careers" class="parallax content-dark" data-stellar-background-ratio="0.3">
			<div class="container">
				<div class="col-md-8 col-md-offset-2 DarkBox nopadding">
					<div class="col-md-5 nopadding supportingImage" >&nbsp;</div>
					<div class="col-md-7">
						{Header}
						{Copy}
					</div>
				</div>
			</div>
		</section>
    );
  }
}
