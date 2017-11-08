const InitialState ={}

const Hero_reducer = (state=InitialState, action) =>{
		switch(action.type){
			case "FETCH_HERO":{
					return {...state, Slides:action.payload}
					break
				}
			}
		return state;
	}
	
export default Hero_reducer;	