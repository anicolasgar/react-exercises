import { combineReducers } from 'redux';
import ContactReducer from './contact-reducer';
import GroupReducer from './group-reducer';
import ParticipantReducer from './participant-reducer';

const reducers = {
  contactStore: ContactReducer,
  groupStore: GroupReducer,
  participantStore: ParticipantReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;