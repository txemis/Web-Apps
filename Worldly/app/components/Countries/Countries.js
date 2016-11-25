import React, { PropTypes } from 'react'
import { formatTimestamp, formatJournalEntryPreview } from 'helpers/utils'
import { Spinner } from 'components'

import Open from 'react-icons/lib/io/ios-circle-outline'
import Checked from 'react-icons/lib/io/ios-checkmark-outline'


const styles = {
  location: {
    fontSize: '16px',
    fontWeight: '900'
  },
  title: {
    fontSize: '22px'
  },
  timestamp: {
    fontSize: '16px',
    fontWeight: '700'
  },
  entryPreview: {
    fontSize: '16px',
    marginTop: '10px'
  }
}

Countries.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  decisions: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  onToJournalEntry: PropTypes.func.isRequired,
}

export default function Countries (props) {
  if (props.isFetching === true) {
    return <Spinner />
  }

  return (
    <div>
      <h2>Countries</h2>
      {props.decisions.length === 0
        ? <div style={{textAlign: 'center'}}>No Results</div>
        : null}
      {props.error ? <div>{props.error} </div> : null}
      {props.decisions.map((entry) => {
        const id = entry.decisionId
        return (
         <div
          key={id}
          onClick={() => props.onToJournalEntry(id)}>
            <div className='row'>
              <div className='col-xs-12' style={styles.location}>{entry.country}</div>
            </div>
         </div>
        )

      })}
    </div>
  )
}
