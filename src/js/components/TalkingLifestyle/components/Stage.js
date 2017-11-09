import React from "react";
import { connect } from "react-redux";

var CreateBackgroundImage,DisplaybackgroundImage;

import Stage_Header from "./Stage_Header";
import Stage_Left from "./Stage_Left";
import Stage_Right from "./Stage_Right";


//Header
let title, subtitle, icon, logo,url, IconPath
// Left
let MainCopy, CSMedia;
// right
let PanelHeader, MajorIcons, SmallIcons, PanelImages

@connect((store) =>{
		return{
			Content: store.SHOWCASE,
			UI:store.UI
			}
	})

export default class ShowcaseStage extends React.Component {
	
	componentDidMount(){
	
		var d = document.getElementById("Stage");
		setTimeout(function(){ d.className += "showStage"; },10)
		
	}
	
	createStage(project){
			
		//console.log(project)
			
		// Create Stage
			CreateBackgroundImage = project.acf.cs_background_image.sizes.large
			DisplaybackgroundImage = { backgroundImage: 'url('+CreateBackgroundImage+')' } 
			IconPath = this.props.UI.IconPath;
			
		// Create Stage Header
			title = project.title.rendered;
			icon = project.acf.cs_header_icon
			logo = project.acf.cs_sponsors_logo;
			url = project.acf.cs_sponsorurl;
			
		// Create Stage Left
			MainCopy = project.content.rendered;
			CSMedia = project.acf.cs_media;
			
		// Create Stage Right
			PanelHeader= project.acf.cs_panelh1;
			MajorIcons = project.acf.cs_major_icons;
			SmallIcons = project.acf.cs_small_icons;
			PanelImages = project.acf.cs_panel_image.sizes.large;
	}
	
	componentWillMount(){ this.createStage(this.props.UI.Project.project) }
	shouldComponentUpdate(nextProps, nextState){ return true;}
	componentWillUpdate(nextProps, nextState){}

	render(){
		 
		return(
				<div id="Stage" style={DisplaybackgroundImage} >
					
					<Stage_Header 
					
						header={title}
						headerIcon={icon} 
						sponsorLogo={logo}
						sponsorURL={url}
						
					/>
					<Stage_Left 
						MainCopy={MainCopy}
						Media={CSMedia}
					/>
					<Stage_Right 
						PanelHeader={PanelHeader}
						MajorIcons = {MajorIcons}
						SmallIcons = {SmallIcons}
						PanelImages ={PanelImages}
						IconPath = {IconPath }
					/>
					
				</div>
			)
	}
}