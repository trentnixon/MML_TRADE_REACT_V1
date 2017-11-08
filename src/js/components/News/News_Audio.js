import React from "react";

export default class DisplayAudio extends React.Component {
	
  componentWillMount(){ }

  render() {
	return (
       <div id="News_Audio">
	   		<iframe src={this.props.audio} width="100%" height="180" frameborder="0"></iframe>
	   </div>
    );
  }
}