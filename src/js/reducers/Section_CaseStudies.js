const InitialState ={}

const CaseStudies_reducer = (state=InitialState, action) =>{
		switch(action.type){
			case "FETCH_CASESTUDIES":{
					return {...state, CaseStudies:action.payload}
					break
				}
			}
		return state;
	}
export default CaseStudies_reducer;	