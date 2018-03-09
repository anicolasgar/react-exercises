import { combineReducers } from 'redux';
import ParticipantReducer from './participant-reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  participantStore: ParticipantReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;