import React from "react";

	export default class LoadingPage extends React.Component {

  render() {
	return (
      <div>
	  		<h1>Site Loading - Loading Component</h1>
			{this.props.percentage} %
      </div>
    );
  }
}
