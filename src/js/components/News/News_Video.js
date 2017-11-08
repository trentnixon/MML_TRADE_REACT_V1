import React from "react";

export default class DisplayVideo extends React.Component {
	
  componentWillMount(){ }

  render() {
	return (
       <div class="col-md-8 col-md-offset-2" id="News_Video">
	   		<video width="100%" controls="">
				<source src="http://www.macquariemedia.com.au/video/2GB%20873.mp4" type="video/mp4" />
			</video>
	   </div>
    );
  }
}
