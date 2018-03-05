import { participants } from '../groups-data';

export function fetchParticipants() {
	return dispatch => {
		dispatch({
			type:'FETCH_PARTICIPANTS',
			payload: participants //client.get(url)
		})
	}
}

export function saveParticipant(newParticipant) {
  return dispatch => {
    return dispatch({
      type: 'SAVE_PARTICIPANT',
      newParticipant: newParticipant//client.post(url, newParticipant)
    })
  }
}