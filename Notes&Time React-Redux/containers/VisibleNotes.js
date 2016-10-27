import { connect } from 'react-redux'
import NotesList from '../components/NotesList'

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

const VisibleNotes = connect(
  mapStateToProps
)(NotesList)

export default VisibleNotes
