import React from "react";

import Navigation from "./Navigation/";
import Header from "./Header/";
import About from "./InformationAudio/";
import Videos from "./videos/";
import Latest_News from "./News/News_Home_Page_Widget";
import WhatWeDo from "./WhatWeDo/";
import CaseStudies from "./CaseStudies/";
import TalkingLifestyle from "./TalkingLifestyle/";
import Mcast from "./Mcast/";
import Careers from "./Careers/";
import Contact from "./Contact/";


export default class Layout extends React.Component {
  constructor() { super();}
  
  UpdateMeta(){
	 	document.body.id = "Main"
	 }
  componentWillMount(){ 
  		// Change Body ID
		this.UpdateMeta();
	}
	componentWillUpdate(nextProps, nextState){ 
		// Change Body ID
		this.UpdateMeta();
	}
  render() {
	return (
      <div>
	  	<Navigation {... this.props} />
			<About />
			<Videos />
			<Latest_News />
			<WhatWeDo />
			<CaseStudies />
			<TalkingLifestyle />
			<Mcast />
			<Careers />
			<Contact />
      </div>
    );
  }
}
