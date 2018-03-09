import React, { Component} from 'react';
import { connect } from 'react-redux';
import ParticipantListElement from '../components/participant-listElement';
import NewParticipant from './new-participant-page';
import { fetchParticipants } from '../actions/participant-actions';

class ParticipantListPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      torneo:{
        organizador: 'a',
        nombre: "b"
      }
    };
  }

  componentDidMount() {
    this.props.fetchParticipants();
  }


  render() {
    return (

      <div>
      <h1>Torneo {this.state.torneo.nombre} de {this.state.torneo.organizador}</h1>
      <NewParticipant torneo={this.state.torneo}/>
      <h2>List de participantes</h2>
      <ParticipantsList participants={this.props.participants}/>
      </div>
      )
  }
}

// Make participants array available in  props
function mapStateToProps(state) {
  return {
    participants : state.participantStore.participants
  }
}



function ParticipantsList({participants}){

  const list = () => {
    return participants.map(participant => {
      return (
        <li key={participant._id}>
        <ParticipantListElement participant={participant}/>
        </li>
        )
    })
  }

  return (
    <div>
    <ul>
    { list() }
    </ul>
    </div>
    )
}



export default connect(mapStateToProps, {fetchParticipants})(ParticipantListPage);


