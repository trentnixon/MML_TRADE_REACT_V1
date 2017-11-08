import React from "react";
import { connect } from "react-redux";

var _ = require('lodash');

import SectionHeader from "../global/SectionHeader";
import SectionText from "../global/SectionText";
import SectionImage from "../global/SectionImage";
import ModalVideo from "../global/ModalVideo";
import ModalOverlay from "../global/ModalOverlay";

let Header='',Copy='';
let Playlist, DisplayVideos,VideoStore;

@connect((store) =>{
		return{
			SHOWREELS:store.SHOWREELS,
			ABOUT:store.ABOUT.Site_Meta_data,
			}
	})
export default class Showreels extends React.Component {

	// Function to create Component UI
	DisplayShowreels(VideoStore)
		{
			return VideoStore.map((videos, i)=>{
				return(
					<div key={"Video_"+i} class="col-md-3 col-sm-3 col-xs-6 caseItem">
						<ModalOverlay id={"#video_"+i} title={videos.title.rendered}/>
							<SectionImage img={videos.acf.ssr_image} AddClass="img-responsive center-block" />
						<ModalVideo Modalid={"video_"+i} videoid={videos.acf.ssr_video_link}/>
					</div>
				)
			})
	}

	componentWillMount(){
			
			VideoStore = this.props.SHOWREELS.Showreels;
			
			DisplayVideos = this.DisplayShowreels(VideoStore);
			
			if(_.isEmpty(this.props.ABOUT) == false)
				{
					let ACF = this.props.ABOUT.acf;
					Header = <SectionHeader text={ACF.station_show_reel_header}/>;
					Copy = <SectionText text={ACF.station_show_reel_copy}/>
			}
	}
		
  render() {
	  	return (
					<div>
						{Header}
						{Copy}
						{DisplayVideos}
					</div>
			);
  	}
}
