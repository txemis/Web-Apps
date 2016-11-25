import React, { PropTypes } from 'react'
import { formatTimestamp } from 'helpers/utils'
import {title, date, location, journalEntry } from './styles.css'

export default function Entry ({ decision }) {
  return (
    <div>
      <div className={title}>{decision.title}</div>
      <div className={date}>{formatTimestamp(decision.timestamp)}</div>
      <div className={location}>{decision.city}, {decision.country}</div>
      <div className={journalEntry}>{decision.text}</div>
    </div>
  )
}
