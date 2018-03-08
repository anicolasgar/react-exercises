import { contacts } from '../contacts-data';
import { client } from './';

const urlContacts = '/contacts'

export function fetchContacts(){
	return dispatch => {
		dispatch({
			type: 'FETCH_CONTACTS',
			payload: client.get(urlContacts)
	      //payload: contacts
  })
	}
}

export function newContact() {
	return dispatch => {
		dispatch({
			type: 'NEW_CONTACT'
		})
	}
}

export function saveContact(contact) {
	return dispatch => {
		return dispatch({
			type: 'SAVE_CONTACT',
			payload: client.post(urlContacts, contact)
		})
	}
}