import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { df } from '../utils/timeUtils'

const Wrapper = styled.div`
  margin: 0;
  width: 100%;
  padding: 5% 3%;
  border-bottom: 1px solid lightgray;
  color: #333;
  box-sizing: border-box;
  font-size: 18px;
  opacity: 0;
  transition: 1s all ease;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  ${props =>
    props.show &&
    css`
      opacity: 1;
    `};
`

const Title = styled.h3`
  margin: 0;
  display: inline-block;
  font-size: 18px;
`
const Time = styled.span`
  font-size: 13px;
  color: gray;
  opacity: 0.75;
`

export default class Item extends Component {
  state = {
    show: false
  }
  componentDidMount() {
    this.setState({
      show: true
    })
  }
  render() {
    const { title, started, ended } = this.props.item

    return (
      <Wrapper show={this.state.show}>
        <Title>
          <span aria-label="cookie" role="img">
            🍪
          </span>
          {title}
        </Title>
        <Time>
          <span aria-label="cookie" role="img">
            🕐
          </span>
          {df(started)} - {df(ended)}
        </Time>
      </Wrapper>
    )
  }
}
