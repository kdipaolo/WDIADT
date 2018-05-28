import faker from 'faker'

export const taskData = () => ({
  id: faker.random.uuid(),
  started: Date.now(),
  ended: Date.now(),
  title: faker.lorem.words()
})
