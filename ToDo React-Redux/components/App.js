import React from 'react'
import VisibilityLinks from './VisibilityLinks'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <section className='container-fluid'>
      <div className='row text-center' style={styles.headerRow}>
        <div style={styles.title}>ToDo App</div>
        <div style={styles.subtitle}>React-Redux + ES6</div>
      </div>
    </section>

    <AddTodo />
    <VisibilityLinks />
    <VisibleTodoList />

  </div>
)

const styles={
  headerRow: {
    paddingTop: '15vh',
    paddingBottom: '5vh'
  },
  title: {
    fontSize: '50px',
    fontWeight: '600',
    color: 'white'
  },
  subtitle: {
    fontSize: '26px',
    paddingTop: '10px',
    color: 'white'
  }
}

export default App
