import React from "react";
import { connect } from "react-redux";

import SectionHeader from "../global/SectionHeader";
import SectionText from "../global/SectionText";
import SectionImage from "../global/SectionImage";

let DisplaySlider1BGImage, DisplaySlider2BGImage;
// Slide 1
	// left
		let SliderLeftH1, LeftContent
	// right
		let RightContent, SliderRightH1
// Slide 2
	let Slider2H1, Slider2Copy

// Connect
@connect((store) =>{ return{ ABOUT:store.ABOUT.Site_Meta_data } })

export default class WhatWeDo extends React.Component {

  	componentWillMount(){

			let ACF = this.props.ABOUT.acf;
		// Left
			SliderLeftH1 = ACF.wwd_header_1;
			LeftContent = <div dangerouslySetInnerHTML={{__html: ACF.wwd_content_area_1}} /> ;
					
		// Right
			SliderRightH1 = ACF.wwd_header_2;
			RightContent = <div dangerouslySetInnerHTML={{__html: ACF.wwd_content_area_2}} /> ;
					
		// Panel 2
			Slider2H1 = ACF.wwd_header_2;
			Slider2Copy = <div dangerouslySetInnerHTML={{__html: ACF.wwd_content_area_3}} /> ;
					
			DisplaySlider1BGImage = { backgroundImage: 'url('+ACF.wwd_background_image_1.url+')' }
			DisplaySlider2BGImage = { backgroundImage: 'url('+ACF.wwd_background_image_2.url+')' }
	}

  render() {
	  	
    return (
      	<section id="whatwedo" class=" content-dark" >
			<div id="bg-carousel" class="carousel slide " data-ride="carousel">
				<div class="carousel-inner">
					
					<div class="item active slide0"  style={DisplaySlider1BGImage}> 
						<div class="container">
							<div class="col-md-7 col-sm-12  col-xs-12 SlideShow">
								<h1>{SliderLeftH1}</h1>
								{LeftContent}
							</div>
							<div class="col-md-5 col-sm-12 col-xs-12 SlideShow">
								<h1>{SliderRightH1}</h1>
								{RightContent}
							</div>
						</div>
					</div>
					<div class="item  slide1"   style={DisplaySlider2BGImage}> 
						<div class="container">
							<div class="col-md-6 col-md-offset-6 SlideShow">
								<h1>{Slider2H1}</h1>
								<p>{Slider2Copy}</p>
							</div>
						</div>
					</div>
				
				</div>
			</div>
		</section>
    );
  }
}
