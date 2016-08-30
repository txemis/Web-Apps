(function() {

	var Weather = {
		init: function() {
			this.getLocation();
			this.showTime();
      $('#celcius').on('click', this.toCelcius);
      $('#fehrenheit').on('click', this.toFehrenheit);
			$('#refresh').on('click', this.refresh);
		},

		cache: {
			showFahrenheit: true,
		},

		getLocation: function() {
      var c = Weather.cache;

      if ( window.chrome ) {
        $.getJSON('http://ip-api.com/json', function(json) {
          c.lat = json.lat;
          c.long = json.lon;
          Weather.getInformation();
        });
      } else {
        if ( navigator.geolocation ) {
          navigator.geolocation.getCurrentPosition(function(data) {
            c.lat = data.coords.latitude;
            c.long = data.coords.longitude;
            Weather.getInformation();
          });
        }
      }

		},

		getInformation: function() {
			var c = Weather.cache;

			$.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + c.lat + '&lon=' + c.long + '&units=imperial&appid=1d8cafef3930b798bb90bcd65ea493b8', function(json) {

        // Store data in cache
				c.location = json.name;
				c.country = json.sys.country;
        c.fahrenheit = Math.round(json.main.temp);
				c.celcius = Math.round((c.fahrenheit - 32) * 5 / 9);
				c.icon = json.weather[0].id;
				c.coverage = json.weather[0].main;

        // Uncomment one of the lines below to see the app change with different weather conditions!
        //c.coverage = "Extreme";
        //c.coverage = "Atmosphere";
        //c.coverage = "Drizzle";
        //c.coverage = "Rain";
        //c.coverage = "Clear";
        //c.coverage = "Clouds";
        //c.coverage = "Thunderstorm";
        //c.coverage = "Additional";

				c.sunrise = json.sys.sunrise;
				c.sunset = json.sys.sunset;
        c.tempMinFahrenheit = Math.round(json.main.temp_min);
        c.tempMaxahrenheit = Math.round(json.main.temp_max);
        c.tempMinCelcius = Math.round((c.tempMinFahrenheit - 32) * 5 / 9);
        c.tempMaxCelcius = Math.round((c.tempMaxFahrenheit - 32) * 5 / 9);
        //c.precipitation = Math.round(json.rain["3h"]);
          if (isNaN(c.precipitation) || c.precipitation == null || c.precipitation == undefined) {
            c.precipitation = 0;
          }
        c.humidity = json.main.humidity;
        c.windImperial = Math.round(json.wind.speed);
        c.windMetric = Math.round((json.wind.speed * 1.6));

				Weather.showMainInformation();
				Weather.showCurrentCoverage();
        Weather.changeBgAndFontColor();
			});
		},

		showMainInformation: function() {
			var c = Weather.cache;

			// Show Location
			$('#location').html(c.location);
      $('#country').html(c.country);
			// Show Temp
			$('#temp span').html(c.showFahrenheit === false ? c.celcius : c.fahrenheit);

      // Display precipitation, humidity, wind
      //$("#precip").html('Prec: ' + c.precipitation + '%');
      $("#humid").html('Hum: ' + c.humidity + '%');
      $("#wind span").html(c.showFahrenheit === false ? c.windMetric : c.windImperial + ' mi/hr');
		},

		showCurrentCoverage: function() {
			var c = Weather.cache;
			var currentTime = new Date().getTime() / 1000;

			// Show Day/Night Icon based on current time
			if ( currentTime < c.sunrise || currentTime > c.sunset ) {
				$('#icon').attr('class', 'wi wi-night-alt-cloudy');
			} else if (c.coverage === "Thunderstorm") {
        $('#icon').attr('class', 'wi wi-storm-showers');
      } else if (c.coverage === "Drizzle") {
        $('#icon').attr('class', 'wi wi-day-rain-mix');
      } else if (c.coverage === "Rain") {
        $('#icon').attr('class', 'wi wi-rain');
      } else if (c.coverage === "Snow") {
        $('#icon').attr('class', 'wi wi-snowflake-cold');
      } else if (c.coverage === "Atmosphere") {
        $('#icon').attr('class', 'wi wi-day-haze');
      } else if (c.coverage === "Clear") {
        $('#icon').attr('class', 'wi wi-day-sunny fa-spin');
      } else if (c.coverage === "Clouds") {
        $('#icon').attr('class', 'wi wi-day-cloudy');
      } else if (c.coverage === "Extreme") {
        $('#icon').attr('class', 'wi wi-meteor');
      } else if (c.coverage === "Additional") {
        $('#icon').attr('class', 'wi wi-alien');
      }

      // Show coverage text
			$('#coverage').html(Weather.cache.coverage);
		},

		showTime: function() {
			var time = new Date();
			var hours = time.getHours();
			var minutes = time.getMinutes();
      var weekday = new Array(7);
        weekday[0]=  "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
      var day = weekday[time.getDay()];


			// Display a zero before hours/minutes if below 10
			if ( hours < 10 ) {
				$('#time').html(minutes < 10 ? '0' + hours + ':0' + minutes : '0' + hours + ':' + minutes + ' ' + 'AM');
			} else if (hours < 12 && hours >= 10) {
        $('#time').html(minutes < 10 ? hours + ':0' + minutes : hours + ':' + minutes  + ' ' + 'AM');
      } else if (hours === 12 ) {
        $('#time').html(minutes < 10 ? hours + ':0' + minutes : hours + ':' + minutes  + ' ' + 'PM');
      } else if (hours > 12 && hours < 24) {
        // Make 12 hour clock
        hours = hours - 12;
				$('#time').html(minutes < 10 ? hours + ':0' + minutes : hours + ':' + minutes  + ' ' + 'PM');
			} else if (hours = 24){
        hours = hours - 12;
        $('#time').html(minutes < 10 ? hours + ':0' + minutes : hours + ':' + minutes  + ' ' + 'AM');
      }

      // Display weekday
      $("#day").html(day);
		},

    toCelcius: function() {
      var c = Weather.cache;

      if ( c.showFahrenheit === true ) {
        $('#celcius').css("opacity","0.75");
        $('#fehrenheit').css("opacity","1");
        $('#temp span').html(c.celcius);
        $('#wind span').html(c.windMetric + ' km/hr');
				c.showFahrenheit = false;
      }
    },

    toFehrenheit: function() {
      var c = Weather.cache;

			if ( c.showFahrenheit === false ) {
        $('#fehrenheit').css("opacity","0.75");
        $('#celcius').css("opacity","1");
				$('#temp span').html(c.fahrenheit);
        $('#wind span').html(c.windImperial + ' mi/hr');
				c.showFahrenheit = true;
			}
    },

    // set background and font-color depending on coverage
    changeBgAndFontColor: function() {
      var c = Weather.cache;
      var currentTime = new Date().getTime() / 1000;

      if (currentTime < c.sunrise || currentTime > c.sunset ) {
				$("body").css("background-image","url('http://i66.tinypic.com/2a9tz52.jpg')");
        $("body").css("color","#2C4896");
        $("button").css("background-color","#2C4896");
      } else if (c.coverage === "Thunderstorm") {
        $("body").css("background-image","url('http://i64.tinypic.com/2prz589.jpg')");
        $("body").css("color","#5E88AD");
        $("button").css("background-color","#5E88AD");
      } else if (c.coverage === "Drizzle") {
        $("body").css("background-image","url('http://i65.tinypic.com/2s7c74m.jpg')");
        $("body").css("color","#77B8E0");
        $("button").css("background-color","#77B8E0");
      } else if  (c.coverage === "Rain") {
        $("body").css("background-image","url('http://i64.tinypic.com/2hnq1s6.jpg')");
        $("body").css("color","#638E91");
        $("button").css("background-color","#638E91");
      } else if  (c.coverage === "Snow") {
        $("body").css("background-image","url('http://i65.tinypic.com/20py0xw.jpg')");
        $("body").css("color","#8DA0A1");
        $("button").css("background-color","#8DA0A1");
      } else if  (c.coverage === "Atmosphere") {
        $("body").css("background-image","url('http://i67.tinypic.com/345yhyr.jpg')");
        $("body").css("color","#7EE7F2");
        $("button").css("background-color","#7EE7F2");
      } else if  (c.coverage === "Clear") {
        $("body").css("background-image","url('http://i66.tinypic.com/34s2fpy.jpg')");
        $("body").css("color","#F5B833");
        $("button").css("background-color","#F5B833");
      } else if  (c.coverage === "Clouds") {
        $("body").css("background-image","url('http://i65.tinypic.com/otey6b.jpg')");
        $("body").css("color","#33C4F5");
        $("button").css("background-color","#33C4F5");
      } else if  (c.coverage === "Extreme") {
        $("body").css("background-image","url('http://i64.tinypic.com/2pr8h1s.jpg')");
        $("body").css("color","#ED3D15");
        $("button").css("background-color","#ED3D15");
      } else if  (c.coverage === "Additional") {
        $("body").css("background-image","url('http://i66.tinypic.com/34s2fpy.jpg')");
        $("body").css("color","#F5B833");
        $("button").css("background-color","#F5B833");
      }
    },

		refresh: function() {
			Weather.showTime();
			Weather.getLocation();
		}
	};

	Weather.init();

})();
