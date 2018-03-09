import React, { Component} from 'react';
import { connect } from 'react-redux';
import { updateParticipant } from '../actions/participant-actions';


class ParticipantListElement extends Component {

	constructor(props) {
		super(props);
		this.state = {participant: props.participant};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		//TODO: NEGRADA?
		var partialState = this.state.participant
		partialState[name] = value;
		this.setState({
			participant: partialState
		});

	}

	handleUpdate(participant){
		console.log("participant");
		console.log(this.state.participant);
		this.props.updateParticipant(this.state.participant);
	}

	componentDidMount = () => {
	}

	render() {
		return (

			<div>
			User: 
			<input type="text" className="form-control description" name="usuario" 
			value={this.state.participant.usuario} onChange={this.handleInputChange} />
			Equipo:
			<input type="text" className="form-control description" name="equipo" 
			value={this.state.participant.equipo} onChange={this.handleInputChange} />

			<button onClick={this.handleUpdate} className="btn btn-primary add">Modificar</button>
			</div>
			)
	}
}

function mapStateToProps(state) {
  return {
  }
}
export default connect(mapStateToProps,{updateParticipant})(ParticipantListElement);
