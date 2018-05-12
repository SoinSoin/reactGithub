import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import registerServiceWorker from './registerServiceWorker';
import ListGroup from 'react-bootstrap/lib/ListGroup';
// import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import * as Bootstrap from 'react-bootstrap';
class App extends Component {
  render() {
    return (
      <div className="App">
 < Bootstrap.ListGroup>
    < Bootstrap.ListGroupItem href="#link1">Link 1</ Bootstrap.ListGroupItem>
    < Bootstrap.ListGroupItem href="#link2">Link 2</ Bootstrap.ListGroupItem>
    < Bootstrap.ListGroupItem>Trigger an alert</ Bootstrap.ListGroupItem>
  </ Bootstrap.ListGroup>
      </div>
    );
  }
}

export default App;
