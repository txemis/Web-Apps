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

      //set style to normal to prevent loop carrying over style falsely
      var setStyle = styles.timeNormal;

      // set style based on admin_hour && admin_mins
      if (this.props.listData[j].admin_mins == 0) {
        if ((hours24 == this.props.listData[j].admin_hour - 1) && (minutes >= 45) && (minutes < 60)) {
          var setStyle = styles.timeWarning;
        } else if (hours24 >= this.props.listData[j].admin_hour) {
          var setStyle = styles.timePassed;
        }
      }

      if (this.props.listData[j].admin_mins == 15) {
        if ((hours24 == this.props.listData[j].admin_hour) && (minutes >= 0) && (minutes < 15)) {
          var setStyle = styles.timeWarning;
        } else if ((hours24 == this.props.listData[j].admin_hour) && (minutes > 15)) {
          var setStyle = styles.timePassed;
        } else if (hours24 >= this.props.listData[j].admin_hour) {
          var setStyle = styles.timePassed;
        }
      }

      if (this.props.listData[j].admin_mins == 30) {
        if ((hours24 == this.props.listData[j].admin_hour) && (minutes >= 15) && (minutes < 30)) {
          var setStyle = styles.timeWarning;
        } else if ((hours24 == this.props.listData[j].admin_hour) && (minutes > 30)) {
          var setStyle = styles.timePassed;
        } else if (hours24 >= this.props.listData[j].admin_hour) {
          var setStyle = styles.timePassed;
        }
      }

      if (this.props.listData[j].admin_mins == 45) {
        if ((hours24 == this.props.listData[j].admin_hour) && (minutes >= 30) && (minutes < 45)) {
          var setStyle = styles.timeWarning;
        } else if ((hours24 == this.props.listData[j].admin_hour) && (minutes > 45)) {
          var setStyle = styles.timePassed;
        } else if (hours24 >= this.props.listData[j].admin_hour) {
          var setStyle = styles.timePassed;
        }
      }

      // dont display minutes when minutes == 0
      if (this.props.listData[j].admin_mins == 0) {
        var minuteStyle = styles.minutesDisplayNone;
      } else {
        var minuteStyle = styles.minutes;
      }


      // map one of the objects from object array 'listData'
      var listItem = listPartial.map(function(data, i) {

        // set AM / PM while preserving admin_hour being 24hr clock
        if (data.admin_hour > 12){
          var twelveHourDisplay = data.admin_hour - 12;
          var ampm = 'pm';
        } else {
          var twelveHourDisplay = data.admin_hour;
          var ampm = 'am';
        }

        return (
          <section className='container-fluid'>

            <div className='row' key={j + '_' + i} style={setStyle}>
              <div className='col-xs-6 col-sm-4 col-sm-offset-1 col-md-4 col-md-offset-2 col-lg-3 col-lg-offset-3'>
                <span id='timeNum' style={styles.timeNum}>{twelveHourDisplay}</span>
                <span id='minutes' style={minuteStyle}>{data.admin_mins}</span>
                <div id='ampm' style={styles.ampm}>{ampm}</div>
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
    }.bind(this), 2000);
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
    padding: '5px 15px'
  },

  minutes: {
    fontSize: '36px',
    color: '#50D2C0',
    paddingLeft: '5px'
  },

  minutesDisplayNone: {
    display: 'none'
  },

  ampm: {
    fontSize: '30px',
    fontWeight: '500',
    color: 'white',
    padding: '0px',
    letterSpacing: '2px',
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
