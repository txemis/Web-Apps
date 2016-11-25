import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Entry } from 'components'

function mapStateToProps ({decisions, users}, {routeParams}) {
  const decision = decisions.decisions[routeParams.decisionId]
  return {
    isFetching: decisions.isFetching,
    decisionNeedsFetching: typeof decision === 'undefined',
    decision: decision || {},
    usersDecision: users[users.authedId].decisionsMade[routeParams.decisionId],
  }
}


export default connect(mapStateToProps)(Entry)
