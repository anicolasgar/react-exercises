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
    case 'UPDATE_CONTACT_FULFILLED': {
      const contact = action.payload.data;
      return {
        ...state,
        contacts: state.contacts.map(item => item._id === contact._id ? contact : item),
        errors: {},
        loading: false
      }
    }

    case 'UPDATE_CONTACT_REJECTED': {
      const data = action.payload.response.data;
      const { "name.first":first, "name.last":last, phone, email } = data.errors;
      const errors = { global: data.message, name: { first,last }, phone, email };
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }
    default:
    return state;
  }
}