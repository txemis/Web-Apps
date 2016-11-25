import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { navContainer, link, brand } from './styles.css'
import { ModalContainer } from 'containers'

const styles = {
  navbg: {
    backgroundColor: '#6d7993'
  }
}

Navigation.propTypes = ActionLinks.propTypes = NavLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
}

function NavLinks ({isAuthed}) {
  return isAuthed === true
    ? <ul>
        <li><Link className={link} to='/'>{'Home'}</Link></li>
        <li><Link className={link} to='/country'>{'Country'}</Link></li>
      </ul>
    : null
}

function ActionLinks ({isAuthed}) {
  return isAuthed === true
    ? <ul>
        <li><ModalContainer /></li>
        <li><Link className={link} to='/logout'>{'Logout'}</Link></li>
      </ul>
    : <ul>
        <li><Link className={link} to='/'>{'Home'}</Link></li>
      </ul>
}

export default function Navigation ({isAuthed}) {
  return (
    <div className='container-fluid' style={styles.navbg}>
      <div className='row'>
        <nav className={navContainer}>
          <NavLinks isAuthed={isAuthed}/>
          <span className={brand}>{'Worldly'}</span>
          <ActionLinks isAuthed={isAuthed}/>
        </nav>
      </div>
    </div>
  )
}
