import React, { Component} from 'react';
import ParticipantList from '../components/participant-list';

class ParticipantListPage extends Component {
  render() {
    return (
      <div>
        <h1>Participantes</h1>
        <ParticipantList/>
      </div>
    )
  }
}

export default ParticipantListPage;