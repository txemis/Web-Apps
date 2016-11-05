import React, { PropTypes } from 'react'

const Notes = ({ text, time }) => (
  <section className='container-fluid' style={styles.noteContainer}>
    <div className='row'>

      <div className='col-xs-4 col-xs-offset-1 col-sm-4 col-sm-offset-1 col-md-3 col-md-offset-2 col-lg-2 col-lg-offset-3'>
        <div style={styles.time}>
          {time}
        </div>
      </div>

      <div className='col-xs-7 col-sm-6 col-md-5 col-lg-4'>
        <div className='row'>
          <div style={styles.entry}>
            {text}
          </div>
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3'>
        <hr />
      </div>
    </div>
  </section>
)

Notes.propTypes = {
  text: PropTypes.string.isRequired
}

const styles = {
  noteContainer: {
    padding: '15px'
  },

  time: {
    fontSize: '40px',
    color: '#FFA769',
    paddingBottom: '15px'
  },

  entry: {
    color: '#1f1f1f',
    fontSize: '22px',
    fontWeight: '100'
  }
};


export default Notes
