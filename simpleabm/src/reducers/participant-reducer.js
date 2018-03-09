export const defaultState = {
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
    case 'UPDATE_PARTICIPANT_FULFILLED': {
      const aParticipant = action.payload.data;
      return {
        ...state,
        participants: state.participants.map(item => item._id === aParticipant._id ? aParticipant : item),
        errors: {},
        loading: false
      }
    }
    // case 'UPDATE_PARTICIPANT_REJECTED': {
    //   const data = action.payload.response.data;
    //   const { "name.first":first, "name.last":last, phone, email } = data.errors;
    //   const errors = { global: data.message, name: { first,last }, phone, email };
    //   return {
    //     ...state,
    //     errors: errors,
    //     loading: false
    //   }
    // }
    case 'DELETE_PARTICIPANT_FULFILLED': {
      const _id = action.payload.data._id;
      return {
        ...state,
        participants: state.participants.filter(item => item._id !== _id)
      }
    }
    default:
    return state;
  }
}