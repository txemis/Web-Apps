import React, { Component } from 'react'
import ExampleNotes from '../components/ExampleNotes'

class NotesContainer extends Component {
  constructor () {
    super()
    this.state = {
      noteList: []
    }
  }

  componentWillMount () {
    this.buildNoteList();
  }

  buildNoteList () {
    this.setState({
      noteList: []
    })

    const notesListMaster = [{
        time: '6:30 am',
        entry: 'Patient morning routines (washroom, hygiene, clothes) completed.'
      },
      {
        time: '7:15 am',
        entry: 'Patient received and ate all of their breakfast.'
      },
      {
        time: '8:30 am',
        entry: '2 capsules of Levodopa administered.'
      }]

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

      // push to noteList state and clear map variable
      this.state.noteList.push(noteDataMapped[0]);
      var noteDataMapped = '';
    }

    // set state of noteList to its current pushed array of objects
    this.setState({
      noteList: this.state.noteList
    });
  }

  render () {
    return (
      <div>
        <ExampleNotes noteList={this.state.noteList}/>
      </div>
    )
  }
}

const styles = {
  noteContainer: {
    padding: '15px'
  },

  time: {
    fontSize: '40px',
    color: '#FFA769',
    paddingBottom: '15px'
  },

  entry: {
    color: '#1f1f1f',
    fontSize: '22px',
    fontWeight: '100'
  }
};

export default NotesContainer
