import React from 'react'
import FilterLink from '../containers/FilterLink'

const VisibilityLinks = () => (
  <p
    className='text-center'
    style={styles.link}>

      <FilterLink filter="SHOW_ALL">
        <span style={styles.bold}>All</span>
      </FilterLink>
      <FilterLink filter="SHOW_ACTIVE">
        <span style={styles.bold}>Active</span>
      </FilterLink>
      <FilterLink filter="SHOW_COMPLETED">
        <span style={styles.bold}>Completed</span>
      </FilterLink>
  </p>
)

const styles={
  link: {
    fontSize: '18px',
    padding: '3em'
  },
  bold: {
    fontWeight: '600'
  }
}

export default VisibilityLinks
