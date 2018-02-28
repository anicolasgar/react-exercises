import React, { Component } from 'react';
import { createStore } from 'redux';


class ReduxDemo extends Component{
	render(){

		// Step 2: Reducer: state n action
		const reducer = function(state,action){
			if(action.type ==="ATTACK"){
				return action.payload;
			}

			if(action.type ==="GREENATTACK"){
				return action.payload;
			}

			return state;
		}

		// Step 1 Store: reducer and state
		const store = createStore(reducer, "Paz");
		

		// Step 3: Subscribe
		store.subscribe(()=>{
			console.log("Store is now", store.getState());
		})

		// Step 4: Dispatch action
		store.dispatch({type: "ATTACK",payload:"Iron Man"})
		store.dispatch({type: "GREENATTACK",payload:"HULK"})

		return (
			<div>
			<input name="name.first" type="text" label="First Name"/>
			</div>
			);
	}
}

export default ReduxDemo;