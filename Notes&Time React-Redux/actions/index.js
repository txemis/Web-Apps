let nextNoteId = 0

export const addNewNote = (text, time) => {
  return {
    type: 'ADD_NOTE',
    id: nextNoteId++,
    text,
    time
  }
}
