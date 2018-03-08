import React, { Component} from 'react';
import { connect } from 'react-redux';


class ParticipantListElement extends Component {

	constructor(props) {
		super(props);
		// console.log(props);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

		handleUpdate(participant){
  // TODO - Mejorar esto
  // https://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method
  console.log(participant);
  // updateParticipant(participant);

}

render() {
	return (

		<div>
		User: 
		<input type="text" className="form-control description" name="usuario" 
		value={this.props.participant.usuario} onChange={this.handleInputChange} />
		Equipo:
		<input type="text" className="form-control description" name="equipo" 
		value={this.props.participant.equipo} onChange={this.handleInputChange} />

		<button onClick={this.handleUpdate} className="btn btn-primary add">Modificar</button>
		</div>
		)
}

}

function mapStateToProps(state) {
	return {
		participants : state.participantStore.participants
	}
}



export default connect(mapStateToProps)(ParticipantListElement);
