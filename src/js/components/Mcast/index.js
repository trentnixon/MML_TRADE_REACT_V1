import React from "react";
import { connect } from "react-redux";

import SectionHeader from "../global/SectionHeader";
import SectionText from "../global/SectionText";
import SectionImg from "../global/SectionImage";

let Header='', Copy='';
let Mcasts,Logo, ClickHere, DisplayMcast, FetchMCAST, IMG_URL;

@connect((store) =>{
		return{
			MCAST: store.MCAST,
			ABOUT:store.ABOUT.Site_Meta_data
			}
	})
	
export default class Mcast extends React.Component {

  	constructor() {  super();  }

	CreateBrandedPodcast(Podcasts){
			
			return Podcasts.map((cast,i)=>{

				return(
					<div key={i} class="col-md-3 col-sm-3 col-xs-6 castItem">
						<a href={cast.acf.bpc_url} target="_blank">
							<div class="overlay"> 
								<div>
									<i class="fa fa-headphones" aria-hidden="true"></i>
									<h3>Listen to {cast.title.rendered} on mcast.com.au</h3>
								</div>
							</div>
							<SectionImg 
								img={cast.acf.bpc_image.sizes.medium}
								AddClass="img-responsive center-block"
							/>
						</a>
					</div>
				)
		})
	}
	

  	componentWillMount(){
			
			FetchMCAST = this.props.MCAST.PODCASTS;
			
			DisplayMcast = this.CreateBrandedPodcast(FetchMCAST); 
			
			let ACF = this.props.ABOUT.acf;
			
			Header = <SectionHeader text={ACF.branded_podcast_header}/>;
			Copy = <div dangerouslySetInnerHTML={{__html:ACF.branded_podcast_copy}} /> 
	}

  render() {
	return (
      	<section id="Mcast">
			<div class="container">
				<div class="row">
					<div class="col-md-12 text-center">
						{Header}
					</div>			
				</div>
				<div class="row">	
					{Copy}
				</div>
				<div class="row">
					{DisplayMcast}
				</div>
			</div>
		</section>
    );
  }
}
