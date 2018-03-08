import { combineReducers } from 'redux';
import ContactReducer from './contact-reducer';
import ParticipantReducer from './participant-reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  contactStore: ContactReducer,
  participantStore: ParticipantReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;