var React = require('react');

function Clock (props) {
  return (
    <div>
      <div style={styles.clock}>
        {props.hours}:{props.minutes} {props.ampm}
      </div>
      <div style={styles.date}>
        {props.dayName}, {props.month} {props.dayNumber}
      </div>
    </div>
  )
}

const styles = {
  clock: {
    fontSize: '50px',
    margin: '10px',
    padding: '0px'
  },

  date: {
    fontSize: '20px',
    margin: '0px',
    padding: '0px'
  }
};


module.exports = Clock;
