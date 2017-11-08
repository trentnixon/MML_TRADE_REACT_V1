const InitialState ={}

const Mcast_reducer = (state=InitialState, action) =>{
		switch(action.type){
			case "FETCH_MCAST":{
					return {...state, PODCASTS:action.payload}
					break
				}
			}
		return state;
	}
	
export default Mcast_reducer;	