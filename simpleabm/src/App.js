import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ContactListPage from './pages/contact-list-page';
import ContactFormPage from './pages/contact-form-page';
import ParticipantListPage from './pages/participant-list-page'

class App extends Component {
  render() {
    return (
      <Container>
      <div className="ui three item menu">
      <NavLink className="item" activeClassName="active" exact to="/">
      Lista de contactos
      </NavLink>
      <NavLink className="item" activeClassName="active" exact to="/participants/list">
      Lista de participantes
      </NavLink>
      <NavLink className="item" activeClassName="active" exact to="/contacts/new">
      Agregar Contacto
      </NavLink>
      </div>
      <Route exact path="/" component={ContactListPage}/>
      <Route path="/contacts/new" component={ContactFormPage}/>
      <Route path="/contacts/edit/:_id" component={ContactFormPage}/>
      <Route path="/participants/list" component={ParticipantListPage}/>
      </Container>
      );
  }
}

export default App;