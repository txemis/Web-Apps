var React = require('react');
var style = require('../styles/List_style');


function List (props) {
    return (
      <section
        className='container-fluid'>
        {props.list}
      </section>
    )
  }



module.exports = List;
