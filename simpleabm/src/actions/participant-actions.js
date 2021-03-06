import { participantsmock } from '../groups-data';
import { client } from './';

const urlFixture = '/fixture'

export function fetchParticipants() {
	return dispatch => {
		dispatch({
			type:'FETCH_PARTICIPANTS',
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

export function updateParticipant(aParticipant){
	return dispatch => {
		return dispatch({
			type: 'UPDATE_PARTICIPANT',
			payload: client.put(`${urlFixture}/${aParticipant._id}`, aParticipant)
		})
	}
}

export function deleteParticipant(aParticipant){
	return dispatch => {
		return dispatch({
			type: 'DELETE_PARTICIPANT',
			payload: client.delete(`${urlFixture}/${aParticipant._id}`)
		})
	}
}