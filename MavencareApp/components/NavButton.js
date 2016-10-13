var React = require('react');
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Radium = require('radium');

function NavButton (props) {
  return (
    <div>
      <Link to={props.link}>
        <button className='btn text-center' style={props.style}>
          {props.name}
        </button>
      </Link>
    </div>
  )
}


module.exports = NavButton;
