import { bindActionCreators } from 'redux'
import { Modal } from 'components'
import { connect } from 'react-redux'
import * as modalActionCreators from 'redux/modules/modal'

function isSubmitDisabled (firstText, city, country, title) {
  return firstText.length <= 0
    || firstText.length > 140
    || title.length <= 0
    || title.length > 140
    || city.length < 0
    || country.length < 0
}

function mapStateToProps ({modal, users}, props) {
  return {
    user: users[users.authedId] ? users[users.authedId].info : {},
    firstDecisionText: modal.firstDecisionText,
    titleText: modal.titleText,
    cityText: modal.cityText,
    countryText: modal.countryText,
    isOpen: modal.isOpen,
    isSubmitDisabled: isSubmitDisabled(modal.firstDecisionText, modal.titleText, modal.cityText, modal.countryText),
  }
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators(modalActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal)
