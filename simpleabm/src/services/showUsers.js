export const SHOW_USERS = 'SHOW_USERS'

export function showUsers(){

	const users = [
		{id:1, name: 'Nicolas'},
		{id:2, name: 'Juan'},
		{id:1, name: 'Pedro'}
	]


	return {
		type: SHOW_USERS,
		payload: []
	}
}