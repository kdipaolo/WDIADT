import React, { Component } from 'react'
import styled from 'styled-components'
import Item from './Item'

const NoTasks = styled.p`
  background: #ececec;
  padding: 5%;
  text-align: center;
  color: #333;
  margin: 0;
`

export default class List extends Component {
  render() {
    return !this.props.loading ? (
      <div data-testid="list">
        {this.props.items.length ? (
          this.props.items.map((item, i) => <Item key={i} item={item} />)
        ) : (
          <NoTasks>
            Looks like you have no tasks for the day. Below, you can add what
            you've done today.
          </NoTasks>
        )}
      </div>
    ) : (
      'Loading...'
    )
  }
}
