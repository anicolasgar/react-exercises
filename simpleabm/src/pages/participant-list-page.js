import React, { Component} from 'react';
import { connect } from 'react-redux';
import ParticipantList from '../components/participant-list';
import newParticipantForm from '../components/newParticipant-form';
import { fetchParticipants } from '../actions/participant-actions';

class ParticipantListPage extends Component {

  constructor(props) {
    super(props);

    this._getFreshItem = this._getFreshItem.bind(this);
    
    this.state = {
      item: this._getFreshItem()
    };
  }

  componentDidMount() {
    this.props.fetchParticipants();
  }

  _getFreshItem() {
    return {
      description: '',
      amount: ''
    };
  }

  _addNewItem(event) {
    event.preventDefault();
    // this.state.item.usuario = this.state.item.usuario || '';
    // this.state.item.equipo = this.state.item.equipo || '';
    // WalletActions.addNewItem(this.state.item);
    // this.setState({ item : this._getFreshItem() });
  }

  _updateState(event) {
    // let field = event.target.name;
    // let value = event.target.value;

    // // If the amount is changed and it's not a float, return.
    // if (value && field === 'amount' && !value.match(/^[a-z0-9.\+\-]+$/g)) {
    //   return;
    // }

    // this.state.item[field] = value;
    // this.setState({ item : this.state.item });
  }

  render() {
    return (

      <div>

      <newParticipantForm newParticipant />

      
      <div>
      <form className="form-inline add-item" onSubmit={this._addNewItem.bind(this)}>
      <input type="text" className="form-control description" name="usuario" 
      value={this.state.item.usuario} placeholder="Usuario" onChange={this._updateState.bind(this)} />
      <input type="text" className="form-control" name="equipo" 
      value={this.state.item.equipo} placeholder="Equipo" onChange={this._updateState.bind(this)} />
      <button type="submit" className="btn btn-primary add">Agregar</button>
      </form>
      </div>

      <h1>List de participantes</h1>
      <ParticipantList participants={this.props.participants}/>
      </div>
      )
  }
}

// Make contacts  array available in  props
function mapStateToProps(state) {
  return {
    participants : state.participantStore.participants
  }
}

export default connect(mapStateToProps, {fetchParticipants})(ParticipantListPage);