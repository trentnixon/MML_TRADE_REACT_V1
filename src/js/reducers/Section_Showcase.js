const InitialState ={Showcase:{}}

const Showcase_reducer = (state=InitialState, action) =>{
		switch(action.type){
			case "FETCH_SHOWCASE":{
					// console.log(action.payload)
					return {...state, Showcase:action.payload}
					break
				}
			}
		return state;
	}
export default Showcase_reducer;	