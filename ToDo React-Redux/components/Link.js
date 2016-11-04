import React, { PropTypes } from 'react'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span style={styles.active}>{children}</span>
  }

  return (
    <a
      style={styles.notActive}
      href="#"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

const styles= {
  active: {
    color: '#F2B1C7',
    backgroundColor: 'white',
    border: 'solid 2px white',
    padding: '5px',
    margin: '5px',
    borderRadius: '2px'
  },
  notActive: {
    color: 'white',
    border: 'solid 2px white',
    padding: '5px',
    margin: '5px',
    borderRadius: '2px'
  }
}

export default Link
