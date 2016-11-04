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

          <section className='container-fluid' key={'medlist_'+ j} style={styles.medListContainer}>
            <div className='row'>

              <div className='col-xs-4 col-xs-offset-1 col-sm-4 col-sm-offset-1 col-md-3 col-md-offset-2 col-lg-2 col-lg-offset-4'>
                <div style={styles.medication}>
                  {data.medication}
                </div>
              </div>

              <div className='col-xs-6 col-sm-6 col-md-5 col-lg-2 text-right'>
                <div style={styles.dosage}>
                  {data.dosage}
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2 col-lg-4 col-lg-offset-4'>
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
  medListContainer: {
    padding: '15px'
  },

  medication: {
    fontSize: '40px',
    color: '#50D2C0',
    paddingBottom: '15px'
  },

  dosage: {
    color: '#1f1f1f',
    fontSize: '26px',
    fontWeight: '100',
    paddingTop: '5px'
  }
};

module.exports = MedListContainer;
