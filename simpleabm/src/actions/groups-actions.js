import { groups } from '../groups-data';

export function fetchGroups() {
	return dispatch => {
		dispatch({
			type:'FETCH_GROUPS',
			payload: groups;//client.get(url)
		})
	}
}