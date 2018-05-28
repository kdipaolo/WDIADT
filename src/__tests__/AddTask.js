import React from 'react'
import App from '../App'
import { render, Simulate } from 'react-testing-library'
import { taskData } from '../tests/generate'
import faker from 'faker'
import date from 'date-fns'

it('Creates a new task and adds to task list', () => {
  // Assert
  const newTask = taskData()
  const handleSubmit = jest.fn()
  const { getByLabelText, container, getByTestId } = render(<App />)
  console.log(container.innerHTML)
  // Act
  // const taskInput = getByLabelText('Task')
  // const startInput = getByLabelText('Started')
  // const endInput = getByLabelText('Ended')
  // const form = container.querySelector('form')
  // const list = getByTestId('list')
  // taskInput.value = newTask
  // startInput.value = started
  // endInput.value = ended

  // Simulate.change(taskInput)
  // Simulate.change(startInput)
  // Simulate.change(endInput)
  // Simulate.submit(form)

  // expect(list.innerHTML).toContain(newTask)
  // expect(list.innerHTML).toContain(date.format(started, 'H:mm A'))
  // expect(list.innerHTML).toContain(date.format(ended, 'H:mm A'))
})
