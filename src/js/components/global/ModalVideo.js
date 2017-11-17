import React from "react";

export default class VideoModal extends React.Component {
	componentDidMount(){
		
		
		$('.VideoModal').on('hidden.bs.modal', function (e) {
            $('video').each(function() {
                this.pause();
            });
        });

        $('.VideoModal').on('shown.bs.modal', function (e) {
            $(this).find('video')[0].play();
	
        });
		
	}
  render() {
    return (
		<div class="modal fade VideoModal " id={this.props.Modalid} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="vertical-alignment-helper">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-body">
							<div class="embed-responsive embed-responsive-16by9">
								<div class="embed-responsive-item">
									<video controls autoplay onclick="this.play()">
										<source src={this.props.videoid} type="video/mp4"/>
									</video>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>		
	);
  }
}