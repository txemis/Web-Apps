var React = require('react');
var ReactRouter = require('react-router');
var ListContainer = require('./ListContainer');
var NavBars = require('../components/NavBars');
var ListData = require('../config/ListData');


var TodayContainer = React.createClass ({

  render: function() {
      return (
        <div>
          <NavBars />
          <ListContainer
            listData={ListData}/>
        </div>
      )

  }
});


module.exports = TodayContainer;
