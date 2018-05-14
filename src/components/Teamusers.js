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

      usersgit: []
    };
  }

  //dans cette methode ou fonction je lui dit que user git va être un esnsemble (state permet de contenir les données que l'on veut utiliser/afficher).
  fetchGitData() {
    this.setState({
      usersgit: []
    });

    //par la  promesse fetch je recupere les données de l'api REST (encore du mal a comprendre le systeme de promesse)
    fetch("https://api.github.com/users?since=0")
    //cette promesse me permet de recuperer les valeurs JSON de l'api
      .then(resp => resp.json())
    // cette promesse herite de la reponse précédente et me premet de pacourir les reponses avec .map()  ainsi que d'attribuer des clefs à chaque valeur. L'attribut user est la reponse de l'iteration de ma reponse getGitJson
      .then(getGitJson =>
        getGitJson.map(user => ({
          login: `${user.login}`,
          id: `${user.id}`,
          avatar_url: `${user.avatar_url}`
        }))
      )
      //cette promesse attributs mes valeurs precedente a mon ensemble usergit qui est une propriéte
      .then(usersgit =>
        this.setState({
          usersgit,
        })
      )
      .catch(error => console.error("error"));
    }
    //cette fonction propre a react permet de lié les noeuds entre ma methode constructor et ces propriété et mon composant 
    componentDidMount() {
      this.fetchGitData();
    }
    //je rend une vue 
    render() {
      //je redefinis ma methode usergit en tant que tableau dans le render en lui attribuant  l'etat definis dans le constructor attribut qui contient les resultats de recuperer plus haut. Je declare valeur de users git est dans un tableaux
    const {usersgit } = this.state;
    return (
      <div className="Teamusers">
        <Bootstrap.Grid>
          <Bootstrap.Row>
            {/* dans cette partie je vais créer mes composants dynamique */}
              {
                // c'est pourquoi ici je parcours usersgit avec .map() et il le parcours que si mon tableau est non null. il me retourn ele resultat dans une vue qui est mon composant. 
                usersgit.length > 0 ? usersgit.map(usergit => {
                    return (
          <Bootstrap.Col key={usergit.id} xs={6} md={2}>
                  <Bootstrap.Thumbnail align="middle" alt="171x180" src={usergit.avatar_url}>
                        <h4>{usergit.login}</h4>
                        <p className="myUser">-{usergit.id}-</p>
                        <p>
                          <Bootstrap.Button  data-target={usergit.id} onClick={this.props.recup} bsStyle="success">
                            View more
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
