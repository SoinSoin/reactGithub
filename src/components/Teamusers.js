import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as Bootstrap from "react-bootstrap";
import { Link } from 'react-router-dom';


//je créer mon composant Teamusers
export class Teamusers extends Component {

  //je construit/instancie l'état de la propriété de mon composant
  constructor(props) {
    super(props);
    this.state = {
      usersgit: [],
    }
  }

  async fetchGitData() {
    try {
      let user = await fetch("https://api.github.com/users?since=0")
        .then(resp => resp.json())
        .then((usersgit) => this.setState({ usersgit }))
    } catch (error) {
      alert("marche pas");
    }
  }


  componentDidMount() {
    this.fetchGitData();
  }

  renderUsersgit(usergit) {
    return (
      <Bootstrap.Col key={usergit.id} xs={6} md={2}>
        <Bootstrap.Thumbnail align="middle"  src={usergit.avatar_url}>
          <h4>{usergit.login}</h4>
          <p className="myUser">-{usergit.id}-</p>
          <p>
            <Link to={`/${usergit.login}`}><Bootstrap.Button bsStyle="success">view more</Bootstrap.Button></Link>
          </p>
        </Bootstrap.Thumbnail>
      </Bootstrap.Col>
    );
  }

  render() {
    const usersgits = this.state.usersgit.map((usergit) => this.renderUsersgit(usergit));
    return (
      <div className="Teamusers">
        <Bootstrap.Grid>
          <Bootstrap.Row>
            {usersgits}
          </Bootstrap.Row>
        </Bootstrap.Grid>
      </div>
    )
  }
}
