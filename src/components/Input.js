import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { getClosetTo } from '../utils/timeUtils'
import Button from './Button'

const NewTaskInput = styled.input`
  width: 100%;
  margin-top: 5%;
  padding: 5% 3%;
  box-sizing: border-box;
  font-size: 18px;
  border: none;
  border-bottom: 1px solid #333;
`

const Label = styled.label`
  color: gray;
  ${props =>
    props.hidden &&
    css`
      display: none;
    `};
`

const TimeInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  box-sizing: border-box;
  & > span {
    margin: 20px 0;
  }
`

export default class Input extends Component {
  state = {
    newTask: '',
    started: getClosetTo(this.props.items) || '',
    ended: '',
    error: ''
  }
  sc = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const { newTask, started, ended } = this.state
    const valid = newTask && started && ended

    return (
      <form
        onSubmit={e => {
          e.preventDefault()
          if (newTask) {
            this.props.handleSubmit(newTask, started, ended)
            this.setState({
              newTask: '',
              started: ended,
              ended: ''
            })
          } else {
            this.setState({
              error: 'Please add a task'
            })
          }
        }}
      >
        <Label hidden htmlFor="task">
          Task
        </Label>
        {this.state.error}
        <NewTaskInput
          type="text"
          id="task"
          required
          autoFocus
          placeholder="Add a new task..."
          value={newTask}
          onChange={this.sc}
          name="newTask"
        />
        <TimeInputs>
          <span>
            <Label htmlFor="started">Started</Label>
            <NewTaskInput
              type="time"
              id="started"
              required
              min={this.props.items.length ? getClosetTo(this.props.items) : ''}
              onChange={this.sc}
              name="started"
              value={this.state.started}
            />
          </span>
          <span>
            <Label htmlFor="started">Ended</Label>
            <NewTaskInput
              type="time"
              id="ended"
              required
              min={this.state.started}
              onChange={this.sc}
              name="ended"
              value={this.state.ended}
            />
          </span>
        </TimeInputs>

        <Button type="submit" show={valid}>
          Add Task
        </Button>
      </form>
    )
  }
}
