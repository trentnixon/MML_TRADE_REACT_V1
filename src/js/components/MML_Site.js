import React from "react";
import ReactDOM from "react-dom";

// Import Router
	import { BrowserRouter as Router, Route, Link,Redirect,Switch} from 'react-router-dom';
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
	// history={customHistory} 
	const MMTradeSite = () => (
	  <Router MMLTrade="MMLTrade" basename="/" >
		<div>
			<Hero history={customHistory} />
				<div id="Page-Content">
					<Switch>
		 	 			<Route exact path={DevPath} component={Home}/>
						<Route exact path={DevPath+'information'} component={investorInformation}/>
						<Route exact path={DevPath+'news'} component={MML_News}/>
						<Route path={DevPath+'news/:article'} component={MML_News}/>
						<Route path={DevPath+'news_item/:article'} component={MML_News}/>
					</Switch>
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
