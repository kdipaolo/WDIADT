import React, { Component } from 'react'
import styled from 'styled-components'
import { loginWithGoogle } from '../firebase/auth'
import Button from '../components/Button'

const Wrapper = styled.div`
  background: #fff;
  padding: 3%;
  border-radius: 2px;
  border-top: 10px solid #2196f3;
  text-align: left;
`

const Content = styled.p`
  color: #545454;
  line-height: 25px;
  font-size: 18px;
  padding: 8%;
`

const Emoji = styled.span`
  font-size: 30px;
  display: block;
  margin-bottom: 5%;
  text-align: center;
`

export default class Login extends Component {
  login = async () => {
    const res = await loginWithGoogle()
    const { uid: id, displayName: name } = res.user
    this.props.updateUser({ id, name })
  }
  render() {
    return (
      <Wrapper>
        <Content>
          <Emoji>
            <span aria-label="Waving hand" role="img">
              👋
            </span>
          </Emoji>
          I find myself sometimes at the end of the day wondering what exactly
          did I do today? I created this simple app to help you keep track of
          what your doing on a daily basis.
        </Content>
        <Button show onClick={this.login}>
          Login
        </Button>
      </Wrapper>
    )
  }
}
