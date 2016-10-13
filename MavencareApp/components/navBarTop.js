var React = require('react');
var ClockContainer = require('../containers/ClockContainer');
var FontAwesome = require('react-fontawesome');
var Radium = require('radium');


var navBarTop = React.createClass({
  render: function () {
    return (
      <div
        id='navbar'
        className='row'
        style={styles.navbar}>

        <div className='col-xs-2'>
          <span
            id='hamburger'
            onClick={this.props.onSwingOpen}
            style={styles.hamburger}>&#9776;
          </span>
        </div>

        <div className='col-xs-8 text-center'>
          <h1 id='clock'><ClockContainer /></h1>
          <p id='date' style={styles.date}>Tuesday, April 14th</p>
        </div>

        <div className='col-xs-2 text-right'>
          <a href='#' style={styles.pencilLink}>
            <FontAwesome
            className="pencilIcon"
            name='pencil'
            size='2x'
            inverse={true}
            style={styles.pencil}/>
          </a>
        </div>
      </div>
    )
  }
});

const styles = {
  navbar: {
    backgroundColor: '#34344d',
    color: 'white',
    padding: '10px 5px',
  },

  hamburger: {
    position: 'absolute',
    fontSize: '40px',
    cursor: 'pointer',
    paddingLeft: '3vw',
    paddingTop: '3vh'
  },

  clock: {
    fontSize: '50px',
    margin: '10px',
    padding: '0px'
  },

  date: {
    fontSize: '20px',
    margin: '0px',
    padding: '0px'
  },

  pencilLink: {
    position: 'relative',

  },

  pencil: {
    position: 'relative',
    paddingRight: '3vw',
    paddingTop: '4vh',
    fontSize: '36px',
    transformOrigin: 'left bottom',
    transition: 'all .5s',
    WebkitTransition: 'all .5s',

  },

};

module.exports = Radium(navBarTop);
