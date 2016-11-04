(function () {

  var WikiSearch = {
    init: function() {
      $('#searchBtn').on('click', this.getInformation);
      $('#randomBtn').on('click', this.getRandom);
      $('#resetBtn').on('click', this.reset);
      $('i').on('click', this.question);
    },

    getInformation: function() {
      //SASS: slide #box-main upwards
      $('#box-main').css('top','5vh');

      //prepare query
      var query = document.getElementById('searchBox').value;
      var query = query.replace(/ /g,"_");

      //create API call
      $.getJSON('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + query + '&callback=?', function(json) {

        // map array of objects to remove unique ids
        arr = $.map(json.query.pages, function(a) {
          return a;
        })

        //iterate through list, create links, output to screen
        for (i=0; i<arr.length; i++) {

          var linkTitle = arr[i].title;
          linkTitle = linkTitle.replace(/ /g,"_");

          $('#content').append('<div class="contentWrap"><a href="https://en.wikipedia.org/wiki/' + linkTitle + '" target="_blank"><div><h3>'+ arr[i].title + '</h3><p>' + arr[i].extract + '</p></div></a></div>');


        }

        $('.contentWrap').animate({opacity:1}, 1500);
        $('#content').css('paddingTop','50px');
      });


    },

    question: function() {
      $('.fa-question').addClass('animated zoomOutUp');
      $('#question p').addClass('animated fadeOutDown');
      $('#box-main').css('display','block').delay(1000);
      $('#box-main').css('top','35vh');
      $('#box-main').animate({opacity:1}, 500);

    },

    getRandom: function() {  window.open("https://en.wikipedia.org/wiki/Special:Random");
    },

    reset: function(e) {
      e.preventDefault();
      $('#content').empty();
      $('#content').css('paddingTop','150px');
      $('#box-main').css('top','35vh');
    }

  };

  WikiSearch.init();

})();
