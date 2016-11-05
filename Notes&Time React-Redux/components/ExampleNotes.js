import React, { PropTypes } from 'react'
import AddNote from '../containers/AddNote'


function ExampleNotes (props) {
  return (
    <section className='container-fluid'>
      <div className='row text-center' style={styles.notesTitle}>Notes & Time App</div>
      <div className='row text-center' style={styles.subTitle}>React-Redux & ES6+</div>

      <AddNote />
      {props.noteList}

    </section>
  )
}

ExampleNotes.propTypes = {
  noteList: PropTypes.array.isRequired
}

const styles = {
  notesTitle: {
    fontSize: '50px',
    color: '#5E5340',
    fontWeight: '700',
    padding: '45px 5px 0px 5px'
  },
  subTitle: {
    fontSize: '26px',
    color: '#7A6B53',
    padding: '10px 5px 45px 5px'
  }
};

export default ExampleNotes
