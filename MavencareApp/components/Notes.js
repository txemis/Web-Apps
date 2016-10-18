var React = require('react');

function Notes (props) {
  return (

    <section
      className='container-fluid'>
      {props.noteList}
    </section>
  )
}

module.exports = Notes;
