import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.button`
  width: 100%;
  background: #2096f3;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 2px;
  box-sizing: border-box;
  padding: 4%;
  font-weight: bold;
  opacity: 0;
  transition: 0.3s all ease;
  transform: translateY(10px);
  cursor: pointer;
  ${props =>
    props.show &&
    css`
      opacity: 1;
      transform: translateY(0px);
    `};
`

const Emoji = styled.span`
  font-size: 25px;
  margin-left: 10px;
  position: relative;
  top: 4px;
`

export default props => (
  <Button {...props}>
    {props.children}{' '}
    <Emoji>
      <span role="img" aria-label="Thumbs Up">
        👍
      </span>
    </Emoji>
  </Button>
)
