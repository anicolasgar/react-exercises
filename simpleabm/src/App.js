import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ParticipantListPage from './pages/participant-list-page'

class App extends Component {
  render() {
    return (
      <Container>
      <div className="ui three item menu">
      <NavLink className="item" activeClassName="active" exact to="/">
      Torneos
      </NavLink>
      <NavLink className="item" activeClassName="active" exact to="/otros">
      Otros
      </NavLink>
      </div>
      <Route exact path="/" component={ParticipantListPage}/>
      <Route path="/otros/:_id" component={ParticipantListPage}/>
      </Container>
      );
  }
}

export default App;