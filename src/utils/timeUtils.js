import date, { closestTo } from 'date-fns'
export const addZero = time => (time >= 10 ? time : '0' + time)

export const convertToFullDate = time => {
  const currentTime = new Date()
  const y = currentTime.getFullYear()
  const m = currentTime.getMonth() + 1
  const d = currentTime.getDate()
  const h = time.split(':')[0]
  const min = time.split(':')[1]

  const string = `${m} ${d}, ${y} ${h}:${min}`

  return new Date(string)
}

export const createHourMin = timestamp => {
  const d = new Date(timestamp)
  const hh = addZero(d.getHours())
  const mm = addZero(d.getMinutes())
  return `${hh}:${mm}`
}

export const getClosetTo = items => {
  const closetToNow = closestTo(new Date(), items.map(t => t.ended * 1000))
  return createHourMin(closetToNow)
}

export const todayCustomHourMin = (day, hour, min) => {
  const y = day.getFullYear()
  const m = day.getMonth() + 1
  const d = day.getDate()

  return new Date(`${m} ${d}, ${y} ${hour}:${min}`)
}

export const df = timestamp => date.format(timestamp * 1000, 'H:mm A') // 9:00 AM
