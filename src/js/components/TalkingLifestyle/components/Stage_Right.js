import React from "react";

import SectionImage from "../../global/SectionImage";

var SmallIcons, MajorIcons, PanelImages;

export default class GlobalText extends React.Component {
	
	
	componentWillMount(){ 
	
		//const IconPath = 'http://ec2-54-252-234-67.ap-southeast-2.compute.amazonaws.com/wp-content/uploads/2017/10/';
		//VIDEO-WHITE.png
		//console.log(this.props.MajorIcons)
		
		// Create Major Icons
		if(this.props.MajorIcons){
			MajorIcons = this.props.MajorIcons.map((icon, i)=>{
					return(
							<div key={i} class="col-md-3 col-sm-3 Majoricon">
								<img src={this.props.IconPath+icon+'-WHITE.png'} />
							</div>
					)
			})
		}
		
		// Create Small Icons
		if(this.props.SmallIcons){		
			SmallIcons = this.props.SmallIcons.map((icon,i)=>{
				return(
						<div key={i} class="col-md-3 col-sm-3 Smallicon">
							<img src={this.props.IconPath+icon+'-WHITE.png'} />
						</div>
				)
			})
		}
	}
	
  render() {
	  
    return (
			<div class="col-md-6 col-sm-6 hidden-xs" id="Stage_Right">
				<div class="transparentDiv">
					<div class="container-fluid nopadding">
						
						<div class="col-md-12 nopadding">
							
							{MajorIcons}
							
							<h2 class="PanelHeading">{this.props.PanelHeader}</h2>
						</div>
					
						<div class="col-md-12 nopadding supportingContent">
							<img src={this.props.PanelImages} />
						</div>

							{SmallIcons}
					</div>
				</div>
			</div>
	);
  }
}