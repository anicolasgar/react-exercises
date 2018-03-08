import React, { Component} from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { newContact, saveContact, fetchContact, updateContact } from '../actions/contact-actions';
import { saveParticipant } from '../actions/participant-actions';


class NewParticipantPage extends Component {


  constructor(props) {
    super(props);

    this.state = {
      torneo:this.props.torneo.nombre,
      organizador:this.props.torneo.organizador,
      usuario: "",
      equipo: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    // alert('A name was submitted: ');
    this.props.saveParticipant(this.state);
   //event.preventDefault();
 }

 componentDidMount = () => {
 }


 render() {
  return (
    <div>
    {
      <div>
      <div>Nuevo participante:</div>
      <form className="form-inline add-item" onSubmit={this.handleSubmit}>
      <input type="text" className="form-control description" name="usuario" 
      value={this.state.usuario} placeholder="Usuario" onChange={this.handleInputChange} />
      <input type="text" className="form-control" name="equipo" 
      value={this.state.equipo} placeholder="Equipo" onChange={this.handleInputChange} />
      <button type="submit" className="btn btn-primary add">Agregar</button>
      </form>
      </div>
    }
    </div>
    )
}
}

function mapStateToProps(state) {
  return {
    // contact: state.contactStore.contact,
    // errors: state.contactStore.errors
  }
}

export default connect(mapStateToProps, {saveParticipant})(NewParticipantPage);
