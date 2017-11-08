import React from "react";
import ReactDOM from "react-dom";
// Import Router
//	import { HashRouter as Router, Route, Link} from 'react-router-dom';
//	import createBrowserHistory from 'history/createBrowserHistory'
//	const customHistory = createBrowserHistory()
// Import Redux
	import { Provider } from "react-redux";
//Fetch the Store
	import store from "./store/store";
//Load GA
	import ReactGA from 'react-ga';
// Include the Stylesheets
	require('../scss/app.scss');
	
// Components
	import MML_Create_Site from "./components/MML_Create_Site"
	
/*	
	//import Navigation from "./components/Navigation/";
	import Hero from "./components/HeroCarousel/";
    import Home from "./components/HomePage";
	import MML_News from "./components/MML_News";
	import MML_News_Item from "./components/MML_News_Item";
    import investorInformation from "./components/investorInformation";
	import Footer from "./components/Footer/";
	
	var DevPath ="/";
*/	

	ReactGA.initialize('UA-78166636-20');
	ReactGA.set({ page: window.location.pathname + "#Home" });
	ReactGA.pageview(window.location.pathname + "#Home");
/*
// Router

// <Hero />
// <Footer />
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
*/

// DOM Location
	const app = document.getElementById('app');	
// Export to DOM
ReactDOM.render(<Provider store={store}><MML_Create_Site /></Provider>,app);