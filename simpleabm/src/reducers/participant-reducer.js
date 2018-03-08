const defaultState = {
  participants: [],
  newParticipant: {organizador:{}, torneo:{}}
}

export default (state=defaultState, action={}) => {
  switch (action.type) {

    case "FETCH_PARTICIPANTS_FULFILLED": {
      return {
        ...state,
        participants: action.payload.data.data || action.payload.data // in case pagination is disabled
      }
    }
    case 'SAVE_PARTICIPANT_FULFILLED': {
      return {
        ...state,
        participants: [...state.participants, action.payload.data],
      }
    }
    default:
    return state;
  }
}