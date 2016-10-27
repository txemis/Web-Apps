var React = require('react');
var ReactRouter = require('react-router');
var NavBars = require('../components/NavBars');
var Notes = require('../components/Notes');
// Will need to copy NoteList into a new array variable, and set it as a state.
// That way I can add new notes from anywhere, and it wont alter the origin NoteList file


var NotesContainer = React.createClass({

  getInitialState: function () {
    return {
      noteList: []
    }
  },

  componentWillMount: function(){
    this.buildNoteList();
  },

  buildNoteList: function() {
    console.log(notesListMaster);

    this.setState({
      noteList: []
    })

    // loop through object array and return data from each object
    for (var j=0; j<notesListMaster.length; j++) {

      // store current object from array into partial object array
      var listPartial = [notesListMaster[j]];

      // map one of the objects from object array 'NoteList'
      var noteDataMapped = listPartial.map(function(data, i) {
        return (

          <section className='container-fluid' key={'noteList'+ j} style={styles.noteContainer}>
            <div className='row'>

              <div className='col-xs-4 col-xs-offset-1 col-sm-4 col-sm-offset-1 col-md-3 col-md-offset-2 col-lg-2 col-lg-offset-3'>
                <div style={styles.time}>
                  {data.time}
                </div>
              </div>

              <div className='col-xs-7 col-sm-6 col-md-5 col-lg-4'>
                <div className='row'>
                  <div style={styles.entry}>
                    {data.entry}
                  </div>
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

      // push to array and clear variable
      this.state.noteList.push(noteDataMapped[0]);
      var noteDataMapped = '';

    }
    // store compiled list in variable
    noteList = this.state.noteList;
  },


  render: function () {
    return (
      <div>
        <NavBars />
        <Notes noteList={noteList}/>
      </div>
    )
  }
});

const styles = {
  noteContainer: {
    padding: '15px'
  },

  time: {
    fontSize: '40px',
    color: '#50D2C0',
    paddingBottom: '15px'
  },

  entry: {
    color: '#1f1f1f',
    fontSize: '22px',
    fontWeight: '100'
  }
};

module.exports = NotesContainer;
