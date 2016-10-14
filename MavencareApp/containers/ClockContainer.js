var React = require('react');
var Clock = require('../components/Clock');
var style = require('../styles/List_style');


  var ClockContainer = React.createClass({

    setTime: function(){
      var currentdate = new Date();

      //get name of day of week
      var dayOfWeek = currentdate.getDay();
      var weekArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var dayName = weekArray[dayOfWeek];

      //get name of month of year
      var monthOfYear = currentdate.getMonth();
      var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var month = monthArray[monthOfYear];

      //get day number of month
      var dayNumber = currentdate.getDate();

      hours = currentdate.getHours();
      hours24 = hours; 
        // correct for number over 24, and negatives
        if( hours >= 24 ){ hours -= 24; }
        if( hours >= 13 && hours <= 23){ hours -= 12; }
        if( hours < 0   ){ hours += 12; }

        // get minutes. To add leading zero, first convert hours to string
        minutes = currentdate.getUTCMinutes();
        minutes = minutes + "";
        if( minutes.length == 1 ){ minutes = "0" + minutes; }

        // same as above for seconds
        seconds = currentdate.getUTCSeconds();
        seconds = seconds + "";
        if(seconds.length == 1 ){ seconds = "0" + seconds; }

        this.setState({
          hours: hours,
          minutes: minutes,
          seconds: seconds,
          dayName: dayName,
          dayNumber: dayNumber,
          month: month
        });
    },
    componentWillMount: function(){
      this.setTime();
    },
    componentDidMount: function(){
       window.setInterval(function () {
        this.setTime();
      }.bind(this), 1000);
    },

    // render the view component and pass in data
    render: function() {
      return(
        <Clock
          hours={this.state.hours}
          minutes={this.state.minutes}
          seconds={this.state.seconds}
          dayName={this.state.dayName}
          dayNumber={this.state.dayNumber}
          month={this.state.month} />
      )
    }
  });


module.exports = ClockContainer;
