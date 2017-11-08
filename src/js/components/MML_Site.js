import React from "react";
import ReactDOM from "react-dom";

// Import Router
	import { HashRouter as Router, Route, Link} from 'react-router-dom';
	import createBrowserHistory from 'history/createBrowserHistory'
	const customHistory = createBrowserHistory()

// Components
	//import Navigation from "./components/Navigation/";
	import Hero from "./HeroCarousel/";
    import Home from "./HomePage";
	import MML_News from "./MML_News";
	import MML_News_Item from "./MML_News_Item";
    import investorInformation from "./investorInformation";
	import Footer from "./Footer/";

// Dev Path
	let DevPath ="/";	
	
	const MMTradeSite = () => (
	  <Router MMLTrade="MMLTrade" history={customHistory} >
		<div>
			<Hero history={customHistory} />
				<div id="Page-Content">
		 	 		<Route exact path={DevPath} component={Home}/>
					<Route exact path={DevPath+'information'} component={investorInformation}/>
					<Route exact path={DevPath+'news'} component={MML_News}/>
					<Route path={DevPath+'news/:news_item'} component={MML_News}/>
				</div>
			<Footer />
		</div>
	  </Router>
	)
	
			
export default class MML_Site extends React.Component {
  render() {
	return (
     		<MMTradeSite />
    );
  }
}
