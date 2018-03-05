const defaultState = {
  participants: [],
  newParticipants: []
}

export default (state=defaultState, action={}) => {
  switch (action.type) {
    case 'FETCH_PARTICIPANTS': {
      return {
        ...state,
        participants: action.payload.concat(state.newParticipants)
      }
    }
    case 'SAVE_PARTICIPANT': {
      return {
        ...state,
        newParticipants: state.newParticipants.push(action.newParticipant)
      }
    }
    default:
      return state;
  }
}