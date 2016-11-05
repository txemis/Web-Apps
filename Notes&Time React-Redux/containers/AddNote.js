import React from 'react'
import { connect } from 'react-redux'
import { addNewNote } from '../actions'


let AddNote = ({ dispatch }) => {
  let input, hour, minutes, AmPm

  function getTime () {
    let hour, minutes, AmPm

    const currentDate = new Date()
    hour = currentDate.getHours()
    // store 24hour version of hour to determine am / pm
    const hour24 = hour;
    // correct for number over 24, and negatives
    if( hour >= 24 ){ hour -= 24 }
    if( hour >= 13 && hour <= 23){ hour -= 12 }
    if( hour < 0   ){ hour += 12 }
    // AM or PM
    if (hour24 >= 12 && hour24 < 24){ AmPm = 'pm' }
    else { AmPm = 'am' }
    // get minutes, convert hours to string, add leading zero
    minutes = currentDate.getUTCMinutes();
    minutes = minutes + "";
      if( minutes.length == 1 ){ minutes = "0" + minutes }

    const logTimeAsString = hour.toString() + ':' + minutes.toString() + ' ' + AmPm
    return logTimeAsString
  }

  return (
    <div className='row text-center' style={styles.addNoteBlock}>

      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          const noteTime = getTime()
          dispatch(addNewNote(input.value, noteTime))
          input.value = ''
        }}>

        <input
          style={styles.inputField}
          placeholder='Enter new note'
          ref={node => { input = node }} />

        <button type="submit" className="btn btn-warning">
          Add
        </button>

      </form>
    </div>
  )
}
AddNote = connect()(AddNote)

const styles= {
  inputField: {
    padding: '5px',
    margin: '10px',
    width: '400px'
  },
  addNoteBlock: {
    paddingBottom: '25px'
  }
}

export default AddNote
