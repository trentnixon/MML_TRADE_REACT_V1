import React from "react";
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy'

export default class NavigationBurger extends React.Component {
	
	onclick(event){
		event.preventDefault();
		var target = event.target 
		var Offset = jQuery(target.getAttribute('href')).offset().top - 80;
		jQuery('html, body').animate({scrollTop: Offset},'slow','swing');
	}	
	
  render() { 
    	return ( 
				<div>
					<Scrollspy items={ ['Annual_Reports', 'Media_Release', 'Work_place', 'MM_Announcements','Contact',] }  currentClassName="is-current" offset={80} class="nav navbar-nav navbar-right" >
						<li><Link to="/" >Home</Link></li>
						<li class="scroll"><a  onClick={this.onclick} href="#Annual_Reports">ANNUAL REPORTS</a></li>
						<li class="scroll"><a  onClick={this.onclick} href="#Media_Release">MEDIA RELEASE</a></li>
						<li class="scroll"><a  onClick={this.onclick} href="#Work_place">WORKPLACE REPORTS</a></li>
						<li class="scroll"><a  onClick={this.onclick} href="#MM_Announcements">ANNOUNCEMENTS</a></li>
						<li><Link pageid='255' to="/news" >News</Link></li>
						<li class="scroll" ><a  onClick={this.onclick} href="#Contact">Contact</a></li>
				 	 </Scrollspy>
				</div>					
			  );
  	}
}