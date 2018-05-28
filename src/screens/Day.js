import React, { Component } from 'react'
import List from '../components/List'
import styled from 'styled-components'
import { getDayTasks } from '../firebase/utils'
import { withRouter } from 'react-router-dom'
import { todayCustomHourMin } from '../utils/timeUtils'

const Wrapper = styled.div`
  background: #fff;
  padding: 3%;
  border-radius: 2px;
  border-top: 10px solid #2196f3;
  text-align: left;
`

class Day extends Component {
  state = {
    items: [],
    loading: true
  }
  async componentDidMount() {
    const timestamp = Number(this.props.match.params.day)
    const start = todayCustomHourMin(new Date(timestamp), 0, 0)
    const end = todayCustomHourMin(new Date(timestamp), 24, 0)
    const items = await getDayTasks(this.props.user.id, start, end)
    this.setState({
      items,
      loading: false
    })
  }
  render() {
    return (
      <Wrapper>
        <List items={this.state.items} loading={this.state.loading} />
      </Wrapper>
    )
  }
}

export default withRouter(Day)
