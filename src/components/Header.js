import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { logout } from '../firebase/auth'

const Wrapper = styled.div`
  width: 100%;
  padding: 1.5%;
  background: rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`

const menuItem = `
 color: #fff;
 border: none;
 background: none;
 text-decoration: none;
 font-size: 16px;
`

const Route = styled(Link)`
  ${menuItem};

  margin-right: 20px;
`

const SignOut = styled.button`
  ${menuItem};

  float: right;
`

const E = ({ emoji, label }) => (
  <span role="img" aria-label={label}>
    {emoji}
  </span>
)

export default class Header extends Component {
  logout = async () => {
    await logout()
    this.props.updateUser(null)
  }
  render() {
    return (
      <Wrapper>
        <Route to="/">
          <E emoji={'👨‍💼'} label="Person" />
          {this.props.name}
        </Route>
        <SignOut onClick={this.logout}>
          <E emoji={'👋'} label="Waving Hand" /> Sign Out
        </SignOut>
        <Route to="/past">
          <E emoji={'🗓'} label="Calendar" /> View Past Days
        </Route>
      </Wrapper>
    )
  }
}
