import React, { PropTypes } from 'react'
import Notes from './Notes'

const NotesList = ({ notes }) => (
  <div>
    {notes.map(note =>
      <Notes
        key={note.id}
        {...note}
      />
    )}
  </div>
)

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default NotesList
