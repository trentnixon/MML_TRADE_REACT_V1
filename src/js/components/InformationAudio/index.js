import React from "react";
import { connect } from "react-redux";

import SectionHeader from "../global/SectionHeader";
import SectionText from "../global/SectionText";
import SectionImage from "../global/SectionImage";

let Header,Copy,Img, Logos, Map, ACF;
let gb_logo,gb_url, aw_logo, aw_url, bc_logo, bc_url, pr_logo, pr_url;
 
@connect((store) =>{
		return{
			ABOUT:store.ABOUT.Site_Meta_data,
			}
	})
	
export default class About extends React.Component {
  
  	constructor() {  super();  }

	componentWillMount(){
		let AboutMM = this.props.ABOUT;
		ACF = AboutMM.acf;
			
		Header = <SectionHeader text={AboutMM.title.rendered}/>;
		Copy =  <div dangerouslySetInnerHTML={{__html: AboutMM.content.rendered}} />
		Map = <SectionImage img={ACF.map} AddClass="img-responsive center-block" />;

	// Logos
		gb_logo= <SectionImage img={ACF["2gb_logo"].sizes.large} AddClass="" />;
		aw_logo= <SectionImage img={ACF["3aw_logo"]} AddClass="" />;
		pr_logo= <SectionImage img={ACF["6pr_logo"]} AddClass="" />;
		bc_logo= <SectionImage img={ACF["4bc_logo"]} AddClass="" />;
				
	// Create Links
		gb_url= <a href={ACF["2gb_url"]} target="_blank" class="floatingLink" id="Logo_2gb">{gb_logo}</a>
		aw_url= <a href={ACF["3aw_url"]} target="_blank" class="floatingLink" id="Logo_3aw">{aw_logo}</a> 
		bc_url= <a href={ACF["4bc_url"]} target="_blank" class="floatingLink" id="Logo_4bc">{bc_logo}</a> 
		pr_url= <a href={ACF["6pr_url"]} target="_blank" class="floatingLink" id="Logo_6pr">{pr_logo}</a>
	
	}	
  render() {
	 
	return (
      <section class="secondary" id="About" >
	  		<div class="container">
						{Header}
					<div class="col-md-6 nopadding">
						<div class="Map">
							{Map}
							{gb_url}
							{aw_url}
							{bc_url}
							{pr_url}
						</div>
					</div>
					<div class="col-md-6">
						{Copy}
					</div>
			</div>		
      </section>
    );
  }
}
