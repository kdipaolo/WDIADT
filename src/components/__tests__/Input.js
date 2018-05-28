import React from 'react'
import Input from '../Input'
import { render, Simulate } from 'react-testing-library'
import { taskData } from '../../tests/generate'

describe('Input Component', () => {
  it('If input is filled it runs the onsubmit function and clears out inputs', () => {
    // Arrange
    const handleSubmit = jest.fn()
    const { getByLabelText, container } = render(
      <Input handleSubmit={handleSubmit} items={[]} />
    )
    const newTask = taskData()

    const taskInput = getByLabelText('Task')
    const startedInput = getByLabelText('Started')
    const endedInput = getByLabelText('Ended')
    const form = container.querySelector('form')

    // Act
    taskInput.value = newTask.title
    startedInput.value = newTask.started
    endedInput.value = newTask.ended

    Simulate.change(taskInput)
    Simulate.change(startedInput)
    Simulate.change(endedInput)
    Simulate.submit(form)

    // Assert
    expect(taskInput.value).toBe('')
    expect(startedInput.value).toBe('')
    expect(endedInput.value).toBe('')
    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })
})
