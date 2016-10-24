var React = require('react');

function Notes (props) {
  return (

    <section className='container-fluid'>
      <div className='row text-center' style={styles.notesTitle}>
        Notes
      </div>
      {props.noteList}
    </section>
  )
}

const styles = {
  notesTitle: {
    fontSize: '40px',
    color: '#34344d',
    fontWeight: '700',
    padding: '30px 5px 15px 5px'
  }
};

module.exports = Notes;
