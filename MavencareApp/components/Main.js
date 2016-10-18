var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../app/main.css');

var Main = React.createClass({
  render: function () {
    /*
    <ReactCSSTransitionGroup
      transitionName="appear"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}>
        {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
    </ReactCSSTransitionGroup>
    */


    return (
      <div className='main-container'>
          {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
