import React from "react";
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy'
import ReactGA from 'react-ga';

export default class NavigationBurger extends React.Component {

	onclick(event){
		event.preventDefault();
		let target = event.target;
		let Offset = jQuery(target.getAttribute('href')).offset().top - 80;
		jQuery('html, body').animate({scrollTop: Offset},'slow','swing');
        ReactGA.set({ page: window.location.pathname + target.getAttribute('href') });
        ReactGA.pageview(window.location.pathname + target.getAttribute('href'));
	}	

  render() { 
    	return ( 
				<div>
					<Scrollspy items={ ['Home', 'About', 'Video','CaseStudies','TalkingLifestyle','Mcast','Contact','information'] }  currentClassName="is-current" offset={80} class="nav navbar-nav navbar-right" >
						<li class="scroll"><a onClick={this.onclick} href="#Home">Home</a></li>
						<li class="scroll"><a onClick={this.onclick} href="#About">About us</a></li>
						<li class="scroll"><a onClick={this.onclick} href="#Video">Our Brands</a></li>
						<li class="scroll"><a onClick={this.onclick} href="#whatwedo">Our Difference</a></li>
						<li class="scroll"><a onClick={this.onclick} href="#TalkingLifestyle">Our Work</a></li>
						<li class="scroll"><a onClick={this.onclick} href="#Contact">Contact</a></li>
						<li><Link to="/news" >News</Link></li>
						<li><Link to="/information" >Investors</Link></li>
				 	 </Scrollspy>
				</div>					
			  );
  	}
}