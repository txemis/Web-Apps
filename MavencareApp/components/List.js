var React = require('react');
var style = require('../styles/List_style');


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
    fontSize: '36px',
    color: '#34344d',
    padding: '25px'
  }
}



module.exports = List;
