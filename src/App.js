import React, { Component } from "react";
import * as Bootstrap from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersGith: []
    };
  }

  //je ne suis pas tres sur mais de ce que j'en ai compris c'est ce qui va faire la liaison entre mon composant app et les valeurs de mon fetch que je vais stocké dans l'attreibut contact qui est u n tableau
  componentDidMount() {
    this.githubData();
  }

  //j'utilise la
  githubData() {
    fetch("https://api.github.com/users")
      .then(response => response.json())
      .then(githubJson =>githubJson.map(user=>{
        pseudo: user.login; 
  }))
      .then(usersGith =>
        this.setState({
          usersGith
        })
      )
      .catch(console.error("error"));
  }
  render() {
    // const { usersGith } = this.state;
    return (
      <div className="App">}
      </div>
    );
  }
}
export default App;

        //  {usersGith.length > 0 ?
        //    usersGith.map(usersGith => {
        //       return
        //       <Bootstrap.Panel>
        //         <Bootstrap.Panel.Heading>
        //           <Bootstrap.Panel.Title key={usersGith.name} componentClass="h3">
        //           {usersGith.name}
        //           </Bootstrap.Panel.Title>
        //         </Bootstrap.Panel.Heading>
        //         <Bootstrap.Panel.Body>Panel content</Bootstrap.Panel.Body>
        //       </Bootstrap.Panel>;
        //     })
        //   : null} 