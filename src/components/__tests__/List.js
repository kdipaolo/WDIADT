import React from 'react'
import List from '../List'
import { render, Simulate } from 'react-testing-library'
import { taskData } from '../../tests/generate'
import date from 'date-fns'
import { df } from '../../utils/timeUtils'

describe('List Component', () => {
  it('Display a list of items', () => {
    // Arrange
    const items = Array.from({ length: 10 }, () => taskData())
    const { container } = render(<List items={items} />)

    // Act

    // Assert
    items.map(i => {
      expect(container.innerHTML).toContain(i.title)
      expect(container.innerHTML).toContain(df(i.started))
      expect(container.innerHTML).toContain(df(i.ended))
    })
  })

  it('Show a no task message if there are no tasks', () => {
    // Arrange
    const items = []
    const { container } = render(<List items={items} />)

    // Act

    // Assert
    expect(container.innerHTML).toContain('no tasks')
  })

  it('Show loading message if loading', () => {
    // Arrange
    const items = Array.from({ length: 10 }, () => taskData())
    const { container } = render(<List items={items} loading={true} />)

    // Act

    // Assert
    expect(container.innerHTML).toContain('Loading')
  })
})
