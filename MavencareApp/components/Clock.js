var React = require('react');
var styles = require('../styles/navStyles');

function Clock (props) {
  return (
    <div style={styles.clock}>
      {props.hours}:{props.minutes}:{props.seconds}
    </div>
  )
}

module.exports = Clock;
