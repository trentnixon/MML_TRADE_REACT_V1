import React from "react";
import { connect } from "react-redux";
var _ = require('lodash');

import { UI_Ready } from "../actions";

import Loading from "./Site_loading";
import MML_SITE from "./MML_Site"

let DISPLAY_UI, Sequence, UI_Load_Complete=false, Loading_Progression=0;
@connect((store) =>{
		return{
			UI: store.UI
			}
	})
	
export default class LoadingPage extends React.Component {
  constructor() { super();}
  
  componentWillMount(){  DISPLAY_UI = <Loading percentage={0}/>  }
  
  shouldComponentUpdate(nextProps, nextState){ return true;}
  
  componentWillUpdate(nextProps, nextState){ 
		
	if(nextProps.UI.SiteLoaded == false)
	{	
		Loading_Progression=0;
		Sequence = nextProps.UI.LoadSequence;
		
		Object.keys(Sequence).map((key,i)=>{
				// Not rocket science here.. 10 cats each worth 10. If more are added, this will need to be better written
 				if(Sequence[key] == true) { Loading_Progression = Loading_Progression+10;}
				if(Loading_Progression == 100) { UI_Ready() }
			})
			
		DISPLAY_UI = <Loading percentage={Loading_Progression}/>
	}
	else if(nextProps.UI.SiteLoaded == true){  DISPLAY_UI = <MML_SITE />} 
 }
  
  render() {
	return ( <div>{DISPLAY_UI}</div> );
  }
}
