var React = require('react');

function MedList (props) {
  return (

    <section className='container-fluid'>
      <div className='row text-center' style={styles.title}>
        Patient's Medications
      </div>
      {props.medList}
    </section>
  )
}

const styles = {
  title: {
    fontSize: '40px',
    color: '#34344d',
    fontWeight: '700',
    padding: '30px 5px 15px 5px'
  }
}

module.exports = MedList;
