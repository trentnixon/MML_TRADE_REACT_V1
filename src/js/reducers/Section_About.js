const InitialState ={}

const About_reducer = (state=InitialState, action) =>{
		switch(action.type){
			case "FETCH_ABOUT":{
					return {...state, About:action.payload}
					break
				}
			case "SITE_META":{
					const metaid=2;
					let MetaData;
					action.payload.map((page,i)=>{
						if(page.id == metaid)
							{ MetaData= page;}
					})
					
					return {...state, Site_Meta_data:MetaData}
					break
				}
				
			}
		return state;
	}
	
export default About_reducer;	