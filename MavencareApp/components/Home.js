var React = require('react');
var ReactRouter = require('react-router');
var ClockContainer = require('../containers/ClockContainer');
var ListContainer = require('../containers/ListContainer');
var NavBars = require('./NavBars');
var LIST_DATA = [
  {
    medication: "Levodopa",
    dosage:"2 Capsules",
    administration_time: 8
  },
  {
    medication: "Ibuprofen",
    dosage:"4 Tablets",
    administration_time: 10
  },
  {
    medication: "Penicillin",
    dosage:"50 mL",
    administration_time: 14
  },
  {
    medication: "Morphine",
    dosage:"280 mg",
    administration_time: 17
  },
  {
    medication: "Ritalin",
    dosage:"2 Capsules",
    administration_time: 21
  }
]


var Home = React.createClass({

  render: function () {
    return (
      <div>
        <NavBars />
        <ListContainer listData={LIST_DATA}/>    
      </div>
    )

  }
});

module.exports = Home;
