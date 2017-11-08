import React from "react";

export default class News_Header extends React.Component {
	
  componentWillMount(){ }

  render() {
	  var header = {
		backgroundImage: "url(" + this.props.image + ")"
      };
	return (
       <div id="News_Header" style={header}>
	   		
	   </div>
    );
  }
}