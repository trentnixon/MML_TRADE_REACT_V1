import React from "react";
import { connect } from "react-redux";
var _ = require('lodash');

import SectionHeader from "../global/SectionHeader";
import SectionText from "../global/SectionText";
import ShowcaseStage from "./components/Stage"
import SectionImage from "../global/SectionImage";

var DisplayProjects,UI,Header,Copy,ShowCaseStore,Stage;

// Fetch Actions
import {ShowStage,SelectedShowcase} from "../../actions/"

@connect((store) =>{
		return{
				Content: store.SHOWCASE,
				ABOUT:store.ABOUT.Site_Meta_data,
				UI:store.UI
			}
			
})	
export default class Showcase extends React.Component {
  
  	constructor() { super(); }
 
 	CreateShowcase(Showcase){
		
		return Showcase.map((project,i)=>{
			return(
					<div key={i} onClick={()=>this.DipatchShowStage(project)} class="col-md-4 col-sm-4 col-xs-6 showcaseItem">
						<div class="overlay"> 
							<div>
								<i class="fa fa-search-plus" aria-hidden="true"></i>
								<h3>Find our more about {project.title.rendered}</h3>
							</div>
						</div>
						<SectionImage 
							img={project.acf.cs_project_thumb} 
							AddClass="img-responsive center-block" 
						/>
					</div>
			)
		})
	}
 
	componentWillMount(){
			
			//console.log(this.props.Content.Showcase);
			
			DisplayProjects = this.CreateShowcase(this.props.Content.Showcase) 
			
			if(this.props.ABOUT != null)
				{
				let ACF = this.props.ABOUT.acf;
				Header = <SectionHeader text={ACF.campaign_showcase_header}/>;
				Copy =  <div dangerouslySetInnerHTML={{__html:ACF.campaign_showcase_copy}} />
			}
	}
	
	shouldComponentUpdate(nextProps, nextState){ return true;}

	componentWillUpdate(nextProps, nextState){
		//console.log(nextProps.Content.Showcase);
		
		if(_.isEmpty(nextProps.Content.Showcase) == false && nextProps.UI != null){
			
			DisplayProjects = this.CreateShowcase(nextProps.Content.Showcase)
			if(nextProps.UI.Stage) { Stage = <ShowcaseStage />;} else{ Stage='';}
		}		
	}

  componentDidMount(){}

  DipatchShowStage(project){ 

		this.props.dispatch(ShowStage())
		this.props.dispatch(SelectedShowcase(project))
	}

  render() {
	return (
		<section id="TalkingLifestyle" class="secondary">
			<div class="container"> {Stage} {Header} {Copy} {DisplayProjects} </div>
		</section>
	);
  }
}
