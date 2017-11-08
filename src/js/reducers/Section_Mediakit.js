const InitialState ={mediakit:{}}

const MediaKit_reducer = (state=InitialState, action) =>{
		switch(action.type){
			case "FETCH_MEDIAKIT":{
					return {...state, mediakit:action.payload}
					break
				}
			}
		return state;
	}
	
export default MediaKit_reducer;	