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
        User: 
        <input type="text" className="form-control description" name="usuario" 
        value={participant.usuario} />
        Equipo:
        <input type="text" className="form-control description" name="equipo" 
        value={participant.equipo} />
        
        <button  onClick={() => handleUpdate(participant)} className="btn btn-primary add">{participant.torneo}</button></li>
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



function handleUpdate(participant){
  // TODO - Mejorar esto
  // https://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method
  console.log(participant)
  // updateParticipant(participant);

}


export default connect(mapStateToProps, {fetchParticipants})(ParticipantListPage);


