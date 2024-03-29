import React, { PropTypes } from 'react'
import { decisionContainer, title, location, dateOfEntry } from './styles.css'
import { formatTimestamp, formatJournalEntryPreview } from 'helpers/utils'
import { Spinner } from 'components'


Results.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  decisions: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  decisionsMade: PropTypes.object.isRequired,
  onToJournalEntry: PropTypes.func.isRequired,
}

export default function Results (props) {
  if (props.isFetching === true) {
    return <Spinner />
  }

  return (
    <div>
      {props.decisions.length === 0
        ? <div style={{textAlign: 'center'}}>No Results</div>
        : null}
      {props.error ? <div>{props.error} </div> : null}
      {props.decisions.map((entry) => {
        const id = entry.decisionId
        return (
         <div className={decisionContainer}
          key={id}
          onClick={() => props.onToJournalEntry(id)}>
            <div className='row text-center'>
              <div className={title}>{entry.title}</div>
              <div className={location}>{entry.city}, {entry.country}</div>
              <div className={dateOfEntry}>{formatTimestamp(entry.timestamp)}</div>
            </div>
         </div>
        )

      })}
    </div>
  )
}
