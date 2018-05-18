import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as Bootstrap from "react-bootstrap";
import { Link } from "react-router-dom";




const MyUser = ({ user }) => {
  return (
    <Bootstrap.Panel bsStyle="success">
      <Bootstrap.Panel.Heading>
        <Bootstrap.Panel.Title componentClass="h3">
          <Bootstrap.Col align="middle" xs={6} md={4}>
            <Bootstrap.Image src={user.avatar_url} circle />
          </Bootstrap.Col>
        </Bootstrap.Panel.Title>
      </Bootstrap.Panel.Heading>
      <Bootstrap.Panel.Body>
        <Bootstrap.ListGroupItem>Item 1</Bootstrap.ListGroupItem>
        <Bootstrap.ListGroupItem>Item 2</Bootstrap.ListGroupItem>
        <Bootstrap.ListGroupItem>Item 2</Bootstrap.ListGroupItem>
        <Bootstrap.ListGroupItem>Item 2</Bootstrap.ListGroupItem>
      </Bootstrap.Panel.Body>
    </Bootstrap.Panel>
  )

}

export default class User extends Component {
  state = {}
  componentDidMount() {
    const { login } = this.props.match.params
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => console.log(res.json()))
      .then((user) => this.setState({ user }) )
      .catch(() => console.log("error"))
  }

  render() {

    return <MyUser user = {this.state.user}></MyUser>
  }
}
