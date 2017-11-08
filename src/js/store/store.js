import { createStore, applyMiddleware } from "redux";
// Import the Requests
	import axios from 'axios';
import { createLogger } from 'redux-logger'
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducer from "../reducers/index";
//createLogger()
const middleware = applyMiddleware(promise(), thunk);
const store = createStore(reducer,middleware);


const domain='http://ec2-54-252-234-67.ap-southeast-2.compute.amazonaws.com/wp-json/wp/v2/';

// Fetch the media items first; then the content;
let media = domain+'media?per_page=100';
axios.get(media)
  .then(function (response) {
  	 
	 // Store the Media files then collect the rest of the content
	 //store.dispatch({ type:"MEDIA", payload: axios.get(media) })

	// Home Page Meta Data
	axios.get(domain+'pages?id=2').then(function (response) {
			store.dispatch({ type:"FETCH_ABOUT", payload:response.data  })
			store.dispatch({ type:"SITE_META", payload:response.data  })
			
			store.dispatch({ type:"LOADED_ABOUT", payload: true })
			store.dispatch({ type:"LOADED_META", payload: true })
  	})
	
	
	// let pages = domain+'wp-json/wp/v2/pages?id=2';

	// Hero
	axios.get(domain+'hero_images?order=asc').then(function (response) {
			store.dispatch({ type:"FETCH_HERO", payload:response.data  })
			store.dispatch({ type:"LOADED_HERO", payload: true })
  	})
	
	//Show Reels
	axios.get(domain+'station_showreels?order=asc').then(function (response) {
			store.dispatch({ type:"FETCH_SHOWREELS", payload: response.data })
			store.dispatch({ type:"LOADED_SHOWREELS", payload: true })
  	})
	
	// Media Kits  		
	axios.get(domain+'media_kits?order=asc').then(function (response) {
			store.dispatch({ type:"FETCH_MEDIAKIT", payload:response.data})
			store.dispatch({ type:"LOADED_MEDIAKIT", payload: true })
  	})
	
	
	// Case Studies
	axios.get(domain+'case_studies?order=asc').then(function (response) {
			store.dispatch({ type:"FETCH_CASESTUDIES", payload:response.data })
			store.dispatch({ type:"LOADED_CASESTUDIES", payload: true })
  	})
	
	//Mcast
	axios.get(domain+'branded_podcasts?order=asc').then(function (response) {
			store.dispatch({ type:"FETCH_MCAST", payload:response.data })
			store.dispatch({ type:"LOADED_MCAST", payload: true })
  	})
	
	// Talking Lifestyle Campign Showcase
	axios.get(domain+'show_case?order=asc').then(function (response) {
			store.dispatch({ type:"FETCH_SHOWCASE", payload: response.data})
			store.dispatch({ type:"LOADED_SHOWCASES", payload: true })
  	})
	
	// News Items
	axios.get(domain+'news_item').then(function (response) {
			store.dispatch({ type:"FETCH_NEWS_ITEMS", payload: response.data })
			store.dispatch({ type:"LOADED_NEWS", payload: true })
  	})
	// News Categories
	axios.get(domain+'categories/?news_item').then(function (response) {
			store.dispatch({ type:"STORE_CATEGORIES", payload: response.data })
  	})
	
	
	
	/*
	
	// Pages
	// Privacy Policy
	store.dispatch({ type:"FETCH_PP", payload: axios.get("./json/Page_PrivacyPolicy.json") })
	// Privacy Policy
	store.dispatch({ type:"FETCH_II", payload: axios.get("./json/Page_InvestorInformation.json") })	
	
		*/
	
	// Close off UI Load
	store.dispatch({ type:"FETCH_UI", payload: true })
		
  })

// Dispatch the data bfore loading the site

	// OLD json calls
	// store.dispatch({ type:"FETCH_SHOWREELS", payload: axios.get("./json/Section_Showreels.json") })
	// store.dispatch({ type:"FETCH_MEDIAKIT", payload: axios.get("./json/Section_MediaKit.json") })
	// store.dispatch({ type:"FETCH_CASESTUDIES", payload: axios.get("./json/Section_CaseStudies.json") })
	// store.dispatch({ type:"FETCH_MCAST", payload: axios.get("./json/Section_Mcast.json") })
	//store.dispatch({ type:"FETCH_HERO", payload: axios.get("./json/Section_Hero.json") })
	//store.dispatch({ type:"FETCH_ABOUT", payload: axios.get("./json/Section_About.json") })
	//store.dispatch({ type:"FETCH_CAREERS", payload: axios.get("./json/Section_Careers.json") })
	//store.dispatch({ type:"FETCH_CONTACT", payload: axios.get("./json/Section_Contact.json") })


export default store;
