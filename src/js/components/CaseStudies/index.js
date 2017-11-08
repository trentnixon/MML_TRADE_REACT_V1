import React from "react";
import { connect } from "react-redux";

import SectionHeader from "../global/SectionHeader";
import SectionText from "../global/SectionText";
import ModalVideo from "../global/ModalVideo";
import SectionImage from "../global/SectionImage";
import ModalOverlay from "../global/ModalOverlay";

let Header='',Copy='';
let DisplayProjects,Project, CaseStudies;

@connect((store) =>{
		return{
			CASESTUDIES: store.CASESTUDIES,
			ABOUT:store.ABOUT.Site_Meta_data
			}
	})
	
export default class CreateCaseStudies extends React.Component {

	CreateCaseStudy(CaseStudy)
		{
			return CaseStudy.map((caseitem, i)=>{
		
				return(
					<div key={"Video_"+i} class="col-md-3 col-sm-3 col-xs-6 caseItem">
						<ModalOverlay id={"#video_"+i} title={caseitem.title.rendered}/>
							<SectionImage img={caseitem.acf.cs_image} AddClass="img-responsive center-block" />
						<ModalVideo Modalid={"video_"+i} videoid={caseitem.acf.cs_video_link}/>					
					</div>
				)
			})
	}
	
  	componentWillMount(){
			
			CaseStudies = this.props.CASESTUDIES.CaseStudies;
			DisplayProjects = this.CreateCaseStudy(CaseStudies); 
		
			if(_.isEmpty(this.props.ABOUT) == false){
					let ACF = this.props.ABOUT.acf;
					Header = <SectionHeader text={ACF.case_studies_header}/>;
					Copy = <div dangerouslySetInnerHTML={{__html:ACF.case_studies_copy}} />
			}
		} 
		
  render() {
	
    return (
      	<section id="CaseStudies">
			<div class="container">
       			{Header}
				{Copy}
				{DisplayProjects}
			</div>
		</section>
    );
  }
}
