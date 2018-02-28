import { SHOW_USERS} from '../../services/showUsers'
const intialState = {
	list: []
}

export function showUsers(state=intialState, action){
	switch(action.type){
		case: SHOW_USERS:
		return Object.assign({},state,{list:action.payload}
		default:
		return state
	}
	
}