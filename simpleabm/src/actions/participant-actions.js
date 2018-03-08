import { participantsmock } from '../groups-data';
import { client } from './';

const urlFixture = '/fixture'

export function fetchParticipants() {
	return dispatch => {
		dispatch({
			type:'FETCH_PARTICIPANTS',
			// payload: participants 
			payload: client.get(urlFixture)
		})
	}
}

export function saveParticipant(newParticipant) {
  return dispatch => {
    return dispatch({
      type: 'SAVE_PARTICIPANT',
      payload: client.post(urlFixture, newParticipant)
    })
  }
}
