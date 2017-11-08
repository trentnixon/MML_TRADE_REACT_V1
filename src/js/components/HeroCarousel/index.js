import React from "react";
import { connect } from "react-redux";

// Components
let DisplayHero;

// Connect
@connect((store) =>{
		return{
			HERO: store.HERO,
			}
	})
	
export default class Header extends React.Component {
	
	CreateHeros(HeroPanels){

			let backgroundImage='', Header='', Subheader='', ActiveClass='';

			return HeroPanels.map((hero,i)=>{
					
					backgroundImage='', Header='', Subheader='';
					
					backgroundImage = { backgroundImage: 'url('+hero.acf.banner_image.sizes.large+')' }
					
					if(hero.acf.banner_header != null){Header=hero.acf.banner_header}
					if(hero.acf.banner_sub_header != null) {Subheader = hero.acf.banner_sub_header}
					if(i == 0){ActiveClass = 'active'} else {ActiveClass ='';}
					
					return(
						<div class={"item "+ActiveClass} key={i}>
							<div class={"DisplaySlide  slide"+i}  style={backgroundImage}> 
								<div class="col-md-8 col-md-offset-2 top-description">
									<h2>{Header}</h2>
									<p>{Subheader}</p>
								</div>
							</div>
						</div>
					)
				})
	}
	
	componentWillMount(){ DisplayHero = this.CreateHeros(this.props.HERO.Slides);}
		
  	render() {
		return (
			<div id="Home">
			<div id="bg-fade-carousel" class="carousel slide " data-ride="carousel">
				<div class="carousel-inner">
					{DisplayHero}
				</div>
			</div>
			</div>
		)
  	}
}
