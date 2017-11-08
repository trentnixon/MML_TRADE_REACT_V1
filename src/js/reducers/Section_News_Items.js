const InitialState ={
	News_Items:false,
	Filtered_News_Items:false,

	}

const News_items_reducer = (state=InitialState, action) =>{
		switch(action.type){
			case "FETCH_NEWS_ITEMS":{
					return {...state, News_Items:action.payload}
					break
				}
			case "FILTERED_NEWS_ITEMS":{
				
					return {...state, Filtered_News_Items:action.payload}
					break
				}
			case "STORE_CATEGORIES":{
					return {...state, Categories:action.payload}
					break
				}
			}
		return state;
	}
	
export default News_items_reducer;	