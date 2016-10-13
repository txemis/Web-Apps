var React = require('react');
var ReactRouter = require('react-router');
var ClockContainer = require('../containers/ClockContainer');
var FontAwesome = require('react-fontawesome');
var Radium = require('radium');
var ReactDelayRender = require('react-delay-render');


var SideNav = React.createClass({

  getInitialState: function () {
    return {
      swingStyle: [styles.sidenav, styles.swingClosed]
    }
  },

  swingClosed: function() {
    this.setState({
      swingStyle: [styles.sidenav, styles.swingClosed]
    })
  },

  swingOpen: function() {
    this.setState({
      swingStyle: [styles.sidenav, styles.swingOpen]
    })
  },

  setDelayOpen: function() {
     window.setTimeout(function () {
       this.swingOpen();
     }.bind(this), 2000);
   },

   setDelayClosed: function() {
      window.setTimeout(function () {
        this.swingClosed();
      }.bind(this), 2000);
    },



  render: function () {
    return (
    <div className='container-fluid'>

      <div id="mySidenav" className="sidenav" style={this.state.swingStyle}>

        <div className='sidenavElement e1' style={[styles.sidenavElement, styles.e1]}>
          <a
            href="#"
            className="closebtn"
            onClick={this.swingClosed}
            style={[styles.sidenavElementAnchor, styles.e1Anchor]}>&times;
          </a>
        </div>

        <div
        className='sidenavElement e2'
        key="e2"
        style={[styles.sidenavElement, styles.activeColor, styles.eHover]}>
          <a href="#" style={[styles.sidenavElementAnchor, styles.sidenavElementE2E7Anchor]}>Today</a>
        </div>

        <div
          className='sidenavElement e3'
          key="e3"
          style={[styles.sidenavElement, styles.eHover]}>
          <a href="#" style={styles.sidenavElementAnchor}>
            <FontAwesome
              className="calendarIcon"
              name='calendar'
              size='3x'
              style={styles.calendar}/>
          </a>
        </div>

        <div
          className='sidenavElement e4'
          key="e4"
          style={[styles.sidenavElement, styles.eHover]}>
          <a href="#" style={styles.sidenavElementAnchor}>
            <FontAwesome
              className="medkitIcon"
              name='medkit'
              size='3x'
              style={styles.medkit}/>
          </a>
        </div>

        <div
          className='sidenavElement e5'
          key='e5'
          style={[styles.sidenavElement, styles.eHover]}>
          <a href="#" style={styles.sidenavElementAnchor}>
            <FontAwesome
              className="stickyNoteIcon"
              name='sticky-note-o'
              size='3x'
              style={styles.stickyNote}/>
          </a>
        </div>

        <div
          className='sidenavElement e6'
          key='e6'
          style={[styles.sidenavElement, styles.eHover]}>
          <a href="#" style={styles.sidenavElementAnchor}>
            <FontAwesome
              className="phoneIcon"
              name='phone'
              size='3x'
              style={styles.phone}/>
          </a>
        </div>
        <div
          className='sidenavElement e7'
          key='e7'
          style={[styles.sidenavElement, styles.eHover]}>
          <a href="#" style={[styles.sidenavElementAnchor, styles.sidenavElementE2E7Anchor]}>911</a>
        </div>
      </div>


      <div
        id='navbar'
        className='row'
        style={styles.navbar}>

        <div className='col-xs-2'>
          <span
            id='hamburger'
            onClick={this.swingOpen}
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

  sidenav: {
    height: 'auto',
    width: '200px',
    position: 'absolute',
    zIndex: '1',
    top: '0',
    left: '0',
    overflow: 'hidden',
    transition: '0.5s',
    textAlign: 'center',
    transformOrigin: 'left center'
  },

  sidenavElement: {
    height: 'auto',
    width: '200px',
    position: 'relative',
    zIndex: '1',
    top: '0',
    left: '0',
    backgroundColor: '#34344d',
    overflowX: 'hidden',
    transition: '0.5s',
    textAlign: 'center',
    transformOrigin: 'left center',
    padding: '25px 0px',
    borderStyle: 'solid',
    borderWidth: '2px 0px 0px 0px',
    borderColor: 'black'
  },

  sidenavElementAnchor: {
    padding: '5px',
    textDecoration: 'none',
    fontSize: '20px',
    color: 'white',
    display: 'block',
    transition: '0.3s'
  },

  e1: {
    borderWidth: '0px',
    padding: '0px',
    overflow: 'hidden',
    padding: '18px'
  },

  eHover: {
    ':hover': {
      backgroundColor: '#de576c'
    }
  },

  e1Anchor: {
    position: 'relative',
    fontSize: '60px',
    color: '#de576c',
    overflow: 'hidden'
  },

  sidenavElementE2E7Anchor: {
    fontSize: '35px'
  },

  activeColor: {
    backgroundColor: '#de576c'
  },

  swingClosed: {
    transform: 'rotateY(90deg)'
  },

  swingOpen: {
    transform: 'rotateY(0deg)'
  }


};

module.exports = Radium(SideNav);
