var React = require('react');

function MedList (props) {
  return (
    <section
      className='container-fluid'>
      {props.medList}
    </section>
  )
}

module.exports = MedList;
