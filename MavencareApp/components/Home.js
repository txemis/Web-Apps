var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Radium = require('radium');


// written as a function since it is stateless (aka only has a render method)
function Home (props) {
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

module.exports = Radium(Home);
