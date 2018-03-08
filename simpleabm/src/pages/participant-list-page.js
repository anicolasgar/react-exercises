import React, { Component} from 'react';
import { connect } from 'react-redux';
import ParticipantList from '../components/participant-list';
import NewParticipant from './new-participant-page';
import { fetchParticipants } from '../actions/participant-actions';

class ParticipantListPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      torneo:{
        organizador: 'nico',
        nombre: "superliga"
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
      <ParticipantList participants={this.props.participants}/>
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

export default connect(mapStateToProps, {fetchParticipants})(ParticipantListPage);


