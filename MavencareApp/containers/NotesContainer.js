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
          <section
            key={'noteList'+ j}
            className='container-fluid'>

            <div className='row'>
              <div className='col-sm-6 col-sm-offset-3 text-center' style={styles.time}>
                {data.time}
              </div>
            </div>

            <div className='row'>
              <div className='col-sm-6 col-sm-offset-3 text-center' style={styles.entry}>
                {data.entry}
              </div>
            </div>

            <div className='row'>
              <div className='col-sm-6 col-sm-offset-3'>
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
  entry: {
    fontSize: '22px'
  },

  time: {
    fontSize: '30px'
  }
};

module.exports = NotesContainer;
