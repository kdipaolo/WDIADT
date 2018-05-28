import React from 'react'
import { render } from 'react-testing-library'
import Item from '../Item'
import { df } from '../../utils/timeUtils'
import { taskData } from '../../tests/generate'

describe('Item Component', () => {
  it('renders a title, started and ended date', () => {
    // Arrange
    const item = taskData()
    const { container } = render(<Item item={item} />)
    // Act

    // Assert
    expect(container.innerHTML).toContain(item.title)
    expect(container.innerHTML).toContain(df(item.started))
    expect(container.innerHTML).toContain(df(item.ended))
  })
})
