import React from "react";
import { connect } from "react-redux";

//import  { WufooForm  } from "react-wufoo-embed";
var Wufoo = require('react-wufoo-embed');

import SectionHeader from "../global/SectionHeader";
import ContactDetails from "./Components/ContactDetails"
import ContactH2Title from "./Components/ContactLocationTitle"
import ContactForm from "./Components/ContactForm";

var ContactData = '';
var ContactValidation;
var SubmitForm = false;
 

 let Header, Info, wufoo_username, wufoo_host, wufoo_formhash; 
// Connect
@connect((store) =>{ return{ ABOUT:store.ABOUT.Site_Meta_data } })
	
export default class Contact extends React.Component {

  componentWillMount(nextProps, nextState){	
	
			let ACF = this.props.ABOUT.acf;
			Header = <SectionHeader text={ACF.contact_header}/>
		 	Info = <div dangerouslySetInnerHTML={{__html:ACF.contact_information}} />
			wufoo_username = ACF.wufoo_username;
		 	wufoo_host = ACF.wufoo_host;
		 	wufoo_formhash = ACF.wufoo_formhash;

	}
		
  render() {
    return (
      <section id="Contact">
	  	<div class="container">
      		{Header}
			<div class="col-md-6 col-sm-6">
				{Info}
			</div>
			<div class="col-md-6 col-sm-6">
				<Wufoo userName={wufoo_username} host={wufoo_host} formHash={wufoo_formhash} header="hide" />
			</div>
		</div>	 
      </section>
    );
  }
}
