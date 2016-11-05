import React from 'react'
import { Link } from 'react-router'
import { transparentBg, topSpacing } from '../styles'
import MainContainer from './MainContainer'

function Home () {
  return (
    <MainContainer>
      <div style={topSpacing}>
        <h1>Github Battle</h1>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-primary'>Get Started</button>
        </Link>
      </div>
    </MainContainer>
  )
}

export default Home
