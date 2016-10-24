var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var ClockContainer = require('../containers/ClockContainer');
var FontAwesome = require('react-fontawesome');
var Radium = require('radium');
var ReactBootstrap = require('react-bootstrap');
var Modal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button;


var SideNav = React.createClass({

  getInitialState: function () {
    return {
      swingStyle: [styles.sidenav, styles.swingClosed],
      ShowNotesModal: false,
      ShowPhoneModal: false,
      ShowEmergencyModal: false,
      value: ''
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

  handleUpdateNote: function(e) {
   this.setState({
     value: e.target.value
   })
  },

  handleSubmitNote: function(e) {
    e.preventDefault();

    var note = this.state.value;
    notesListMaster.push({
      time: hours + ':' + minutes + ' ' + AmPm,
      entry: note
    });

    console.log(notesListMaster);

    this.setState({
      value: '',
      ShowNotesModal: false
    });
  },

  handlePhoneHome: function(e) {
    e.preventDefault();

    notesListMaster.push({
      time: hours + ':' + minutes + ' ' + AmPm,
      entry: "Caretaker phoned patient's emergency contact."
    });

    this.setState({
      ShowPhoneModal: false
    });
  },

  handleEmergency: function(e) {
    e.preventDefault();

    notesListMaster.push({
      time: hours + ':' + minutes + ' ' + AmPm,
      entry: "Caretaker has called 911 emergency."
    });

    this.setState({
      ShowEmergencyModal: false
    });
  },

  setActive: function() {

  },

  render: function () {
    // set state for modals upon mounting to be hidden
    let NotesClose = () => this.setState({ ShowNotesModal: false });
    let PhoneClose = () => this.setState({ ShowPhoneModal: false });
    let EmergencyClose = () => this.setState({ ShowEmergencyModal: false });

    // return view
    return (
    <div className='container-fluid'>

      <div id="mySidenav" className="sidenav" style={this.state.swingStyle}>
        <div className='sidenavElement e1' style={[styles.sidenavElement, styles.e1]}>
          <span
            className="closebtn"
            onClick={this.swingClosed}
            style={[styles.sidenavElementAnchor, styles.e1Anchor]}>&times;
          </span>
        </div>

        <div
        className='sidenavElement e2'
        key="e2"
        style={[styles.sidenavElement, styles.eHover, this.state.todayActive]}>
          <Link to='/today'>
            <span style={[styles.sidenavElementAnchor, styles.sidenavElementE2E7Anchor]}>Today</span>
          </Link>
        </div>

        <div
          className='sidenavElement e4'
          key="e4"
          style={[styles.sidenavElement, styles.eHover]}>
          <Link to='/medlist'>
            <span style={styles.sidenavElementAnchor}>
              <FontAwesome
                className="medkitIcon"
                name='medkit'
                size='3x'
                style={styles.medkit}/>
            </span>
          </Link>
        </div>

        <div
          className='sidenavElement e5'
          key='e5'
          style={[styles.sidenavElement, styles.eHover]}>
          <Link to='/notes'>
            <span style={styles.sidenavElementAnchor}>
              <FontAwesome
                className="stickyNoteIcon"
                name='sticky-note-o'
                size='3x'
                style={styles.stickyNote}/>
            </span>
          </Link>
        </div>

        <div
          className='sidenavElement e6'
          key='e6'
          style={[styles.sidenavElement, styles.eHover]}>
          <span
            onClick={()=>this.setState({ ShowPhoneModal: true })}
            style={styles.sidenavElementAnchor}>
              <FontAwesome
                className="phoneIcon"
                name='phone'
                size='3x'
                style={styles.phone}/>
          </span>
        </div>
        <div
          className='sidenavElement e7'
          key='e7'
          style={[styles.sidenavElement, styles.eHover]}>
          <span
            onClick={()=>this.setState({ ShowEmergencyModal: true })}
            style={[styles.sidenavElementAnchor, styles.sidenavElementE2E7Anchor]}>
              911
          </span>
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
        </div>

        <div className='col-xs-2 text-right'>
          <span style={styles.pencilLink} onClick={()=>this.setState({ ShowNotesModal: true })}>
              <FontAwesome
              className="pencilIcon"
              name='pencil'
              size='2x'
              inverse={true}
              onClick={()=>this.setState({ ShowNotesShow: true })}
              style={styles.pencil}/>
          </span>
        </div>
      </div>

      <NotesModal
        show={this.state.ShowNotesModal}
        onHide={NotesClose}
        value={this.state.value}
        onUpdateNote={this.handleUpdateNote}
        onSubmitNote={this.handleSubmitNote}/>

      <PhoneModal
        show={this.state.ShowPhoneModal}
        onHide={PhoneClose}
        testStyle={styles.testModal}
        onPhoneHome={this.handlePhoneHome}/>

      <EmergencyModal
        show={this.state.ShowEmergencyModal}
        onHide={EmergencyClose}
        onEmergency={this.handleEmergency}/>
    </div>
    )
  }
});

const NotesModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg" style={styles.largeModalPosition}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg" style={styles.newNoteModal}>Create a New Note!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            type='text'
            className="form-control"
            placeholder='enter a new note'
            value={this.value}
            onChange={this.props.onUpdateNote}
            style={styles.textarea}>
          </textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button
            bsSize="large"
            bsStyle="success"
            onClick={this.props.onSubmitNote}>Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

const PhoneModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-lg" style={styles.smallModalPosition}>
        <Modal.Header closeButton>
          <Modal.Title style={styles.phoneHome} id="contained-modal-title-lg">Call family contact?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button
            vertical block
            bsStyle="primary"
            onClick={this.props.onPhoneHome} bsSize="large">Call</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

const EmergencyModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-lg" style={styles.smallModalPosition}>
        <Modal.Header closeButton>
          <Modal.Title style={styles.emergency} id="contained-modal-title-lg">Call 911?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button
            vertical block
            bsStyle="danger"
            onClick={this.props.onEmergency} bsSize="large">Call</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

const styles = {
  newNoteModal: {
    color: '#34344d',
    fontSize: '24px',
    fontWeight: '700'
  },

  largeModalPosition: {
    position: 'absolute',
    top: '20vh'
  },

  smallModalPosition: {
    position: 'absolute',
    top: '30vh'
  },

  phoneHome: {
    color: '#34344d',
    fontSize: '24px',
    fontWeight: '700'
  },

  emergency: {
    color: '#de576c',
    fontSize: '24px',
    fontWeight: '700'
  },

  testModal: {
    backgroundColor: 'blue',
    borderWidth: '5px',
    borderColor: 'black'
  },

  textarea: {
    width: '100%'
  },

  navbar: {
    backgroundColor: '#34344d',
    color: 'white',
    padding: '10px 5px'
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
    cursor: 'pointer'
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
    borderColor: 'black',
    cursor: 'pointer'
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
    padding: '20px'
  },

  eHover: {
    ':hover': {
      backgroundColor: '#de576c',
      textDecoration: 'none'
    }
  },

  e1Anchor: {
    position: 'relative',
    fontSize: '60px',
    color: '#de576c',
    overflow: 'hidden',
    cursor: 'pointer'
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
