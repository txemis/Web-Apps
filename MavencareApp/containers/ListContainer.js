var React = require('react');
var List = require('../components/List');

var ListContainer = React.createClass({

  getInitialState: function () {
    return {
      list: []
    }
  },

  getList: function () {

    this.setState({
      list: []
    })
    // loop through object array and return data from each object
    for (var j=0; j<this.props.listData.length; j++) {

      // store current object from array into partial object array
      var listPartial = [this.props.listData[j]];
      console.log(seconds);
      // set style based on admin_time
      if (seconds >= (this.props.listData[j].administration_time - 5)
      && seconds <= this.props.listData[j].administration_time ) {
        var setStyle = styles.timeWarning;
      } else if (seconds > this.props.listData[j].administration_time){
        var setStyle = styles.timePassed;
      } else {
        var setStyle = styles.timeNormal;
      }

      // map one of the objects from object array 'listData'
      var listItem = listPartial.map(function(data, i) {
        return (
          <section className='container-fluid'>

            <div className='row' key={j + '_' + i} style={setStyle}>
              <div className='col-xs-6 col-sm-4 col-sm-offset-1 col-md-4 col-md-offset-2 col-lg-3 col-lg-offset-3'>
                <span id='timeNum' style={styles.timeNum}>{data.administration_time}</span>
                <div id='ampm' style={styles.ampm}>am</div>
              </div>

              <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 text-right'>
                <div className='row'>
                  <div id='drug' style={styles.drug}>{data.medication}</div>
                </div>
                <div class='row'>
                  <div id='dose' style={styles.dose}>{data.dosage}</div>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3'>
                <hr />
              </div>
            </div>

          </section>
        )
      });

      // push each mapped object to new object array 'list'
      // reset state of 'listItem'
      // note: listItem is deceiving, as its actually an array of 1 object: var listItem = [{object}]

      this.state.list.push(listItem[0]);
      var listItem = '';
    }
    // save state to a variable. Why? who the fuck knows. State wouldn't carry over to render for some reason.
    list = this.state.list;
  },

  //lifecycle event triggers prior to the first render, which generates the list
  componentWillMount: function(){
    this.getList();
  },

  componentDidMount: function(){
    window.setInterval(function () {
      this.getList();
    }.bind(this), 1000);
  },

  render: function () {
    return (
      <List list={list}/>
    )
  }
});

const styles = {
  timeNum: {
    position: 'relative',
    top: '5px' ,
    fontSize: '100px',
    color: 'white',
    backgroundColor: '#50D2C0',
    borderRadius: '3px',
    padding: '0px 20px'
  },

  ampm: {
    fontSize: '30px',
    fontWeight: '900',
    color: 'white',
    padding: '0px',
    letterSpacing: '5px',
    position: 'absolute',
    bottom: '0px',
    left: '20px'
  },

  drug: {
    color: '#276e64',
    fontSize: '60px',
    fontWeight: '600',
    padding: '10px 10px 5px 5px'
  },

  dose: {
    color: '#50D2C0',
    fontSize: '30px',
    padding: '5px 10px 5px 5px'
  },

  timeNormal: {
    backgroundColor: 'white'
  },

  timeWarning: {
    borderStyle: 'solid',
    borderWidth: '5px',
    borderColor: '#276e64',
    backgroundColor: 'rgba(80, 210, 192, .1)'
  },

  timePassed: {
    opacity: '.4'
  }
};


module.exports = ListContainer;
