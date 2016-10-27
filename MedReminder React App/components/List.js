var React = require('react');

function List (props) {
  return (
    <section className='container-fluid'>
      <div className='row text-center' style={styles.title}>
        Today's Medication Schedule
      </div>
      {props.list}
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



module.exports = List;
