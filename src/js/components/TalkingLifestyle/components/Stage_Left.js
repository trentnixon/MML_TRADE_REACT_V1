import React from "react";

export default class StageLeft extends React.Component {
  render() {
    return (
			<div class="col-md-6 col-sm-6" id="Stage_Left">
				<div class="TextBox">
					<div dangerouslySetInnerHTML={{__html: this.props.MainCopy}} />
				</div>
				<div class="embed-responsive embed-responsive-16by9">
					<video controls autoplay>
						<source src={this.props.Media} type="video/mp4"/>
					</video>
				</div>
			</div>
	);
  }
}