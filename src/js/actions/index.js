var _ = require('lodash');
import store from "../store/store";

export function UI_Ready()
	{
		store.dispatch({ type:"UI_READY", payload:true })
	}

export function ShowStage(){

     return((dispatch)=>{ dispatch(
         {
           type:"SHOW_STAGE",
            payload:{
                Stage:true
            }}
          )
        })
    }	
	
export function CloseStage(){

     return((dispatch)=>{ dispatch(
         {
           type:"CLOSE_STAGE",
            payload:{
                Stage:false
            }}
          )
        })
    }	
		
export function SelectedShowcase(project){

     return((dispatch)=>{ dispatch(
         {
           type:"SELECTED_SHOWCASE",
            payload:{
                project:project
            }}
          )
        })
    }	
	
	
export function inputTrue(input)
	{
		
		return((dispatch)=>{ dispatch(
         {
           type:"INPUT_TRUE",
            payload:{
                input:input
            }}
          )
        })
	}

export function Filtered_News(filteredNews){
	//console.log(filteredNews);
	store.dispatch({ type:"FILTERED_NEWS_ITEMS", payload:filteredNews })
   }	
  
 