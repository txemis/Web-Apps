import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import FontAwesome from 'react-fontawesome'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <section className='container-fluid text-center'>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>

        <input
          placeholder='Enter New ToDo'
          style={styles.inputField}
          ref={node => {
          input = node}} />

        <button type="submit" className='btn btn-primary' style={styles.button}>
          <FontAwesome name='plus' size='lg' style={styles.plusSign}/>
        </button>
      </form>
    </section>
  )
}
AddTodo = connect()(AddTodo)

const styles = {
  button: {
    backgroundColor: 'white',
    borderColor: 'white',
    color: '#F2B1C7',
    marginBottom: '2px'
  },
  plusSign: {
    padding: '8px 0px 5px 0px'
  },
  inputField: {
    padding: '10px',
    margin: '10px',
    borderColor: 'white',
    borderWidth: '0px',
    borderRadius: '3px'
  }
}

export default AddTodo
