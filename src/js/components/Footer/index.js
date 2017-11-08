import React from "react";
import { connect } from "react-redux";

let FooterStore, UI,FooterLogos,FooterSocial;

// Connect
@connect((store) =>{
		return{ 
			ABOUT:store.ABOUT.Site_Meta_data
		}
	})
	
export default class Footer extends React.Component {	

  	componentWillMount(nextProps, nextState){
		
		let ACF = this.props.ABOUT.acf;
		FooterSocial = <div dangerouslySetInnerHTML={{__html:  ACF.footer_social_icons}} /> 
		FooterLogos = <div dangerouslySetInnerHTML={{__html:  ACF.footer_station_logos}} /> 
			
	}
  
  	render() {		  
 	   return (
    	  <section id="footer">
	  		<div class="container">
				<div class="row">
					<div class="col-md-4 col-sm-12 nopadding SocialIcons">
						{FooterSocial}
					</div>
					<div class="col-md-8 col-sm-12  nopadding StationLogos">
						{FooterLogos}
					</div>
				</div>
			</div>	  
	  	</section>
    )
  }
}