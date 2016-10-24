var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({

  componentWillMount: function () {
    notesListMaster = [{
      time: '6:30 am',
      entry: 'patient morning routines (washroom, hygiene, clothes) completed.'
    },
    {
      time: '7:15 am',
      entry: 'patient received and ate all of their breakfast.'
    },
    {
      time: '8:30 am',
      entry: '2 capsules of Levodopa administered.'
    }]
  },

  render: function () {
    return (
      <section className='container-fluid' style={styles.page}>
        <div className='row text-center' style={styles.titleContainer}>
          <Link to='/today'>
            <button type='button' className='btn btn-lg btn-success' style={styles.button}>
              <div style={styles.title}>Medication Reminder</div>
              <div style={styles.slogan}>Get Started</div>
            </button>
          </Link>
        </div>
      </section>
    )
  }
});


const styles = {
  page: {
    backgroundColor: '#34344d',
    color: 'white',
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    width: '100%'
  },

  titleContainer: {
    position: 'relative',
    top: '30vh'
  },

  title: {
    fontSize: '60px',
    color: 'white'
  },

  slogan: {
    position: 'relative',
    top:'25px',
    fontSize: '26px',
    padding: '10px',
    color: 'white'
  },

  button: {
    backgroundColor: 'transparent',
    borderWidth: '10px',
    borderColor: 'white',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '50px'
  }
};

module.exports = Home;
