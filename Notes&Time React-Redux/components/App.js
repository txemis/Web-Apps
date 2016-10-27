import React from 'react'
import NotesContainer from '../containers/NotesContainer'
import AddNote from '../containers/AddNote'
import VisibleNotes from '../containers/VisibleNotes'

const App = () => (
  <div>
    <AddNote />
    <NotesContainer />
    <VisibleNotes />
  </div>
)

export default App
