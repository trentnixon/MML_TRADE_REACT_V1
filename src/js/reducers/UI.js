const InitialState =
	{
		completed:false,
			path:'/',
			IMGPATH:'./img/',
			PDFPATH:'./pdf/',
			Stage:false,
			ShowcasePath:'./showcase/',
			IconPath:'http://ec2-54-252-234-67.ap-southeast-2.compute.amazonaws.com/wp-content/uploads/2017/10/',
			Project:[],
			Media:false,
			LoadSequence:{
				NEWS_ITEMS:false,
				HERO:false,
				ABOUT:false,
				SHOWREELS:false,
				MEDIAKIT:false,
				//WHATWEDO:false,
				CASESTUDIES:false,
				SHOWCASE:false,
				MCAST:false,
				//CAREERS:false,
				//CONTACT:false,
				//FOOTER:false,
				pp:true,
				II:true,
				//CONTACTFORM:false,	
			},
			SiteLoaded:false
	}

const UI_reducer = (state=InitialState, action) =>{
		switch(action.type){
			case "FETCH_UI":{
					return {...state, completed:action.payload}
					break
				}
			case "UI_READY":{
					return {...state, SiteLoaded:true}
					break
				}
			case "SHOW_STAGE":{
					return{...state,Stage:true}
				}
			case "CLOSE_STAGE":{
					return{...state,Stage:false}
				}
			case "SELECTED_SHOWCASE":{
					return{...state,Project:action.payload}
				}
			case "MEDIA_FULFILLED":{
					return{...state,Media:action.payload.data}
				}
			
			// Load sequence
			case "LOADED_NEWS":{ return {...state, LoadSequence:{...state.LoadSequence,NEWS_ITEMS:true}} }
			case "LOADED_SHOWCASES":{ return {...state, LoadSequence:{...state.LoadSequence,SHOWCASE:true}} }
			case "LOADED_MCAST":{ return {...state, LoadSequence:{...state.LoadSequence,MCAST:true}} }
			case "LOADED_CASESTUDIES":{ return {...state, LoadSequence:{...state.LoadSequence,CASESTUDIES:true}} }
			case "LOADED_MEDIAKIT":{ return {...state, LoadSequence:{...state.LoadSequence,MEDIAKIT:true}} }
			case "LOADED_SHOWREELS":{ return {...state, LoadSequence:{...state.LoadSequence,SHOWREELS:true}} }
			case "LOADED_HERO":{ return {...state, LoadSequence:{...state.LoadSequence,HERO:true}} }
			case "LOADED_ABOUT":{ return {...state, LoadSequence:{...state.LoadSequence,ABOUT:true}} }
		
		}
		return state;
	}
	
export default UI_reducer;	