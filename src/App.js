import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as Bootstrap from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      contacts: []
    };
  }
  //je ne suis pas tres sur mais de ce que j'en ai compris c'est ce qui va faire la liaison entre mon composant app et les valeurs de mon fetch que je vais stocké dans l'attreibut contact qui est u n tableau

  fetchData() {
    this.setState({
      isLoading: true,
      contacts: []
    });

    fetch("https://api.github.com/users?since=1")
      .then(response => response.json())
      .then(parsedJSON =>
        parsedJSON.map(user => ({
          login: `${user.login}`,
          id: `${user.id}`,
          avatar_url: `${user.avatar_url}`
        }))
      )
      .then(contacts =>
        this.setState({
          contacts,
          isLoading: false
        })
      )
      .catch(error => console.log("parsing failed", error));
  }
  componentDidMount() {
    this.fetchData();
  }
  render() {
    const { isLoading, contacts } = this.state;
    return (
      <div className="App">
        {!isLoading && contacts.length > 0
          ? contacts.map(contact => {
              const { id, avatar_url, login } = contact;
              return (
                <Bootstrap.Panel>
                  <Bootstrap.Panel.Heading>
                    <Bootstrap.Panel.Title componentClass="h3" />
                  </Bootstrap.Panel.Heading>
                  <Bootstrap.Panel.Body key={id}>{login}</Bootstrap.Panel.Body>
                </Bootstrap.Panel>
              );
            })
          : null}
      </div>
    );
  }
}
export default App;
