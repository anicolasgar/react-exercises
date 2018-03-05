import React, { Component} from 'react';
import { connect } from 'react-redux';
import ParticipantList from '../components/participant-list';
import NewParticipant from './new-participant-page';
import { fetchParticipants } from '../actions/participant-actions';

class ParticipantListPage extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchParticipants();
  }


 render() {
  return (

    <div>
    <NewParticipant newParticipant/>
    <h1>List de participantes</h1>
    <ParticipantList participants={this.props.participants}/>
    </div>
    )
}
}

// Make contacts  array available in  props
function mapStateToProps(state) {
  return {
    participants : state.participantStore.participants.concat(state.participantStore.newParticipants)
  }
}

export default connect(mapStateToProps, {fetchParticipants})(ParticipantListPage);


