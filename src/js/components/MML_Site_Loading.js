import React from "react";

	export default class LoadingPage extends React.Component {

  render() {
	return (
      <div id="LoadingScreen">
	  		<img 
				src="http://ec2-54-252-234-67.ap-southeast-2.compute.amazonaws.com/wp-content/uploads/2017/10/Macquarie_Media_RGB.png"
	  			class="loading_page_logo"
			/>
			
			<h3>Loading Content :   {this.props.percentage}% Complete</h3>
      </div>
    );
  }
}
