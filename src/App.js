import React, { Component } from 'react'

import './App.css'
import Header from './components/Header'
import styled from 'styled-components'
import { auth } from './firebase/firestore'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'
import Past from './screens/Past'
import Day from './screens/Day'

const Wrapper = styled.div`
  max-width: 400px;
  margin: 7% auto;
  text-align: center;
`

const Title = styled.h1`
  font-size: 22px;
  color: #fff;
  font-weight: 100;
`

class App extends Component {
  state = {
    user: null
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user: {
            id: user.uid,
            name: user.displayName
          }
        })
      }
    })
  }
  updateUser = user => {
    this.setState({
      user
    })
  }

  render() {
    const user = this.state.user

    return (
      <Router>
        <div>
          {user && <Header name={user.name} updateUser={this.updateUser} />}
          <Wrapper>
            <Title>
              <span aria-label="Confused Person" role="img">
                🤷‍♂️{' '}
              </span>{' '}
              What did I actually do today?
            </Title>
            {user ? (
              <Switch>
                <Route path="/" exact component={() => <Home user={user} />} />
                <Route
                  exact
                  path="/past"
                  component={() => <Past user={user} />}
                />
                <Route
                  path="/past/:day"
                  component={() => <Day user={user} />}
                />
              </Switch>
            ) : (
              <Login updateUser={this.updateUser} />
            )}
          </Wrapper>
        </div>
      </Router>
    )
  }
}

export default App
