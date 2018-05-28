import firestore from './firestore'
import date from 'date-fns'
import { uniqBy } from 'lodash'

export const getDayTasks = async (userId, start, end) => {
  const db = await firestore
  const dbTasks = db
    .collection('tasks')
    .where('started', '>=', start)
    .where('started', '<=', end)
    .where('userId', '==', userId)

  const tasks = await dbTasks.get()
  return tasks.docs.map(t => ({
    title: t.data().title,
    started: t.data().started.seconds,
    ended: t.data().ended.seconds,
    id: t.id
  }))
}

export const getUsersUniqueDays = async userId => {
  const db = await firestore
  const dbTasks = db.collection('tasks').where('userId', '==', userId)
  const tasks = await dbTasks.get()
  const stateTasks = tasks.docs
    .map(t => ({
      timestamp: t.data().started.seconds * 1000
    }))
    .map(ts => ({
      date: date.format(new Date(ts.timestamp), 'dddd, MMM Do YYYY'),
      ...ts
    }))

  return uniqBy(stateTasks, 'date')
}

export const addNewTask = async (title, started, ended, userId) => {
  const db = await firestore
  await db
    .collection('tasks')
    .doc()
    .set({
      title,
      started,
      ended,
      userId
    })
}
