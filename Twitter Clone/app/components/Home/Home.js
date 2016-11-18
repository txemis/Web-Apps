import React from 'react'
import { container, title, slogan, subSlogan } from './styles.css'

export default function Home () {
  return (
    <div className={container}>
      <p className={title}>{'Twitter Clone'}</p>
      <p className={slogan}>{'React + Redux + Firebase.'}</p>
      <p className={subSlogan}>{'Everything you need to talk... to yourself.'}</p>
    </div>
  )
}
