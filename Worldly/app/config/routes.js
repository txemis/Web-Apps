import React from 'react'
import { Router, IndexRoute, Route } from 'react-router'
import {
  MainContainer, HomeContainer, AuthenticateContainer,
  ResultsContainer, LogoutContainer, EntryContainer, CountriesContainer } from 'containers'

export default function getRoutes (checkAuth, history) {
  return (
    <Router history={history}>
      <Router path='/' component={MainContainer}>
        <Route path='results' component={ResultsContainer} onEnter={checkAuth}/>
        <Route path='country' component={CountriesContainer} onEnter={checkAuth}/>
        <Route path='entry/:decisionId' component={EntryContainer} onEnter={checkAuth} />
        <Route path='logout' component={LogoutContainer} />
        <IndexRoute component={HomeContainer} onEnter={checkAuth}/>
      </Router>
    </Router>
  )
}
