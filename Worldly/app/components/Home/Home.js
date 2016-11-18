import React, { PropTypes } from 'react'
import { container, title, slogan } from './styles.css'

export default function Home (props) {
  return (
    <div className={container}>
      <p className={title}>{'Worldly'}</p>
      <p className={slogan}>{'Your Friendly Neighborhood Travel Journal'}</p>
    </div>
  )
}
