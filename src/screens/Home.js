import React, { Component } from 'react'
import { convertToFullDate, todayCustomHourMin } from '../utils/timeUtils'
import Input from '../components/Input'
import List from '../components/List'
import styled from 'styled-components'
import { getDayTasks, addNewTask } from '../firebase/utils'

const TaskContainer = styled.div`
  background: #fff;
  padding: 3%;
  border-radius: 2px;
  border-top: 10px solid #2196f3;
  text-align: left;
`

export default class Home extends Component {
  state = {
    items: [],
    loading: false
  }
  componentDidMount() {
    this.getDayTasks({ load: true })
  }
  getDayTasks = async options => {
    if (options.load) {
      this.setState({ loading: true })
    }
    const start = todayCustomHourMin(new Date(), 0, 0)
    const end = todayCustomHourMin(new Date(), 24, 0)
    const items = await getDayTasks(this.props.user.id, start, end)

    this.setState({
      items,
      loading: false
    })
  }
  handleSubmit = async (title, started, ended) => {
    const startDate = convertToFullDate(started)
    const endDate = convertToFullDate(ended)
    await addNewTask(title, startDate, endDate, this.props.user.id)
    this.getDayTasks({ load: false })
  }
  render() {
    return (
      <div>
        <TaskContainer>
          {!this.state.loading ? (
            <span>
              {' '}
              <List items={this.state.items} />
              <Input
                items={this.state.items}
                handleSubmit={this.handleSubmit}
              />
            </span>
          ) : (
            'loading..'
          )}
        </TaskContainer>
      </div>
    )
  }
}
