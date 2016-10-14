var React = require('react');
var ReactRouter = require('react-router');
var NavBars = require('../components/NavBars');
var MedList = require('../components/MedList');
var ListData = require('../config/ListData');

var MedListContainer = React.createClass({

  getInitialState: function () {
    return {
      medList: []
    }
  },

  componentWillMount: function(){
    this.buildMedList();
  },

  buildMedList: function() {

    this.setState({
      medList: []
    })

    // loop through object array and return data from each object
    for (var j=0; j<ListData.length; j++) {

      // store current object from array into partial object array
      var listPartial = [ListData[j]];

      // map one of the objects from object array 'listData'
      var listDataMapped = listPartial.map(function(data, i) {
        return (
          <section className='container-fluid'>
            <div className='row'>
              <div className='col-sm-4 col-sm-offset-2 text-right' style={styles.medication}>
                {data.medication}
              </div>
              <div className='col-sm-4' style={styles.dosage}>
                {data.dosage}
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-4 col-sm-offset-4'>
                <hr />
              </div>
            </div>
          </section>
        )
      });

      // push to array and clear variable
      this.state.medList.push(listDataMapped[0]);
      var listDataMapped = '';

    }
    // store compiled list in variable
    medList = this.state.medList;
  },


  render: function () {
    return (
      <div>
        <NavBars />
        <MedList medList={medList}/>
      </div>
    )
  }
});

const styles = {
  medication: {
    fontSize: '30px'
  },

  dosage: {
    fontSize: '22px'
  }
};

module.exports = MedListContainer;
