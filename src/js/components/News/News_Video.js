import React from "react";

export default class DisplayVideo extends React.Component {
	
  componentWillMount(){ 
 		console.log(this.props.video)
 }

  render() {
	return (
       <div class="col-md-8 col-md-offset-2" id="News_Video">
	   		<video controls width="100%" >
				<source src={this.props.video} type="video/mp4" />
			</video>
	   </div>
    );
  }
}
