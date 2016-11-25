import { decisionsExpirationLength } from 'config/constants'

export function formatUserInfo (name, avatar, uid) {
  return {
    name,
    avatar,
    uid,
  }
}

export function formatJournalEntry (title, city, country, entryText, user) {
  return {
    timestamp: Date.now(),
    author: user,
    title,
    city,
    country,
    text: entryText,
  }
}

export function formatJournalEntryPreview (entry) {
  const entryPreview = entry.split(" ").slice(0,12).join(' ') + ' ...'
  return entryPreview
}

export function formatTimestamp (timestamp) {
  const date = new Date(timestamp)
  const month = date.getMonth()
  const monthsArray = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  const monthName = monthsArray[month]
  return `${monthName} ${date.getDate()}, ${date.getFullYear()}`
}

function getMilliseconds (timestamp) {
  return new Date().getTime() - new Date(timestamp).getTime()
}

export function decisionsAreStale (timestamp) {
  return getMilliseconds(timestamp) > decisionsExpirationLength
}
