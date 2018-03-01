import { participants } from '../groups-data';

export function fetchParticipants() {
	return dispatch => {
		dispatch({
			type:'FETCH_PARTICIPANTS',
			payload: participants //client.get(url)
		})
	}
}

export function saveParticipant(contact) {
  return dispatch => {
    return dispatch({
      type: 'SAVE_CONTACT',
      //payload: client.post(url, contact)
    })
  }
}