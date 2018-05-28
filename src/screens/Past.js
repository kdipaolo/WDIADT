import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { getUsersUniqueDays } from '../firebase/utils'

const Day = styled(Link)`
  background: #fff;
  padding: 3%;
  border-radius: 2px;
  border-top: 5px solid #2196f3;
  text-align: left;
  margin: 5% 0;
  cursor: pointer;
  transition: 0.2s all ease;
  display: block;
  text-decoration: none;
  color: #333;
  &:hover {
    transform: scale(1.1);
  }
`

export default class Past extends Component {
  state = {
    days: [],
    loading: false
  }
  async componentDidMount() {
    this.setState({ loading: true })
    const days = await getUsersUniqueDays(this.props.user.id)
    this.setState({
      days,
      loading: false
    })
  }
  render() {
    return (
      <div>
        {this.state.days.map(day => (
          <Day to={`/past/${day.timestamp}`}>{day.date}</Day>
        ))}
      </div>
    )
  }
}
