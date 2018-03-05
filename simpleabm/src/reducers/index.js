import { combineReducers } from 'redux';
import ContactReducer from './contact-reducer';
import ParticipantReducer from './participant-reducer';

const reducers = {
  contactStore: ContactReducer,
  participantStore: ParticipantReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;