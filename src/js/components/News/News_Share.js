import React from "react";

import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  EmailShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const TwitterIcon = generateShareIcon('twitter');
const EmailIcon = generateShareIcon('email');

let IconSize = 32;
export default class News_Share extends React.Component {
	
  componentWillMount(){ }

  render() {
	 
	return (
       <div class="col-md-10" id="News_Share">
	   		<ul class="social_share">	
				<li>
				<FacebookShareButton 
					url={window.location.href}
					quote={this.props.NewsExtract}
				>
					<FacebookIcon size={IconSize} round={true} />
				</FacebookShareButton>
				</li>
				<li>				
				<GooglePlusShareButton url={window.location.href}>
					<GooglePlusIcon size={IconSize} round={true} />
				</GooglePlusShareButton>
				</li>
				<li>
				<LinkedinShareButton url={window.location.href}>
					<LinkedinIcon size={IconSize} round={true} />
				</LinkedinShareButton>
				</li>
				
				<li>
				<TwitterShareButton url={window.location.href}>
					<TwitterIcon size={IconSize} round={true} />
				</TwitterShareButton>
				</li>
				<li>
					<EmailShareButton url={window.location.href}>
						<EmailIcon size={IconSize} round={true} />
					</EmailShareButton>
				</li>
			</ul>
	   </div>
    );
  }
}
