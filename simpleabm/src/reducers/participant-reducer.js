
const defaultState = {
  participants: []
}

export default (state=defaultState, action={}) => {
  switch (action.type) {
    case 'FETCH_PARTICIPANTS': {
      return {
        ...state,
        participants: action.payload
      }
    }
    default:
      return state;
  }
}