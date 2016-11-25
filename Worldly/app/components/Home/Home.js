import React, { PropTypes } from 'react'
import { container, title, slogan } from './styles.css'
import { FacebookAuthButton } from 'components'

Home.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired,
}

export default function Home ({error, isFetching, onAuth}) {
  return (
    <div className={container}>
      <p className={title}>{'Worldly'}</p>
      <p className={slogan}>{'Your Friendly Neighborhood Travel Journal'}</p>
      <FacebookAuthButton isFetching={isFetching} onAuth={onAuth}/>
    </div>
  )
}
