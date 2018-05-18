import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as Bootstrap from "react-bootstrap";
import { Link } from "react-router-dom";




const MyUser = ({user}) => {
if(!user)
return <div>loading...</div>

  return (
    <Bootstrap.Panel bsStyle="success">
      <Bootstrap.Panel.Heading align="middle">
            <Bootstrap.Image Style="width:8em"  src={user.avatar_url} circle />
      </Bootstrap.Panel.Heading>
      <Bootstrap.Panel.Body>
        <Bootstrap.ListGroupItem ><p align="middle"> {user.login} </p></Bootstrap.ListGroupItem>
        <Bootstrap.ListGroupItem ><p align="middle">{user.id}</p> </Bootstrap.ListGroupItem>
        <Bootstrap.ListGroupItem ><p align="middle">{user.type} </p></Bootstrap.ListGroupItem>
        <Bootstrap.ListGroupItem ><p align="middle">{user.followers} </p></Bootstrap.ListGroupItem>
        <Bootstrap.ListGroupItem ><p align="middle">{user.following} </p></Bootstrap.ListGroupItem>
        <Bootstrap.ListGroupItem ><p align="middle">{user.created_at}</p></Bootstrap.ListGroupItem>
      </Bootstrap.Panel.Body>
    </Bootstrap.Panel>
  )

}

export default class User extends Component {
  state = {}
  componentDidMount() {
    const { login } = this.props.match.params
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then((user) => this.setState({ user }))
      .catch(() => console.log("error"))
  }

  render() {
    return <MyUser user = { this.state.user }></MyUser>
  }
}
