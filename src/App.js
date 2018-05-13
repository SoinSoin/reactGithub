import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as Bootstrap from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersgit: []
    };
  }
  //je ne suis pas tres sur mais de ce que j'en ai compris c'est ce qui va faire la liaison entre mon composant app et les valeurs de mon fetch que je vais stocké dans l'attreibut usersgit qui est u n tableau

  fetchData() {
    this.setState({
      usersgit: []
    });

    fetch("https://api.github.com/users?since=0")
      .then(response => response.json())
      .then(parsedJSON =>
        parsedJSON.map(user => ({
          login: `${user.login}`,
          id: `${user.id}`,
          avatar_url: `${user.avatar_url}`
        }))
      )
      .then(usersgit =>
        this.setState({
          usersgit,
        })
      )
      .catch(error => console.log("parsing failed", error));
  }
  componentDidMount() {
    this.fetchData();
  }
  render() {
    const {usersgit } = this.state;
    return (
      <div className="App">
        <Bootstrap.Grid>
          <Bootstrap.Row>
              {
                usersgit.length > 0
                ? usersgit.map(usersgit => {
                  const { id, avatar_url, login } = usersgit;
                    return (
            <Bootstrap.Col xs={6} md={2}>
                      <Bootstrap.Thumbnail align="middle" alt="171x180" src={avatar_url}>
                        <h4>{login}</h4>
                        <p>-{id}-</p>
                        <p>
                          <Bootstrap.Button bsStyle="success">
                            En savoir plus
                          </Bootstrap.Button>
                        </p>
                      </Bootstrap.Thumbnail>
            </Bootstrap.Col>
                    );
                  })
                : null}
          </Bootstrap.Row>
        </Bootstrap.Grid>
      </div>
    );
  }
}
export default App;
