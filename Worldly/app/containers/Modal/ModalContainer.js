import { bindActionCreators } from 'redux'
import { Modal } from 'components'
import { connect } from 'react-redux'
import * as modalActionCreators from 'redux/modules/modal'

function isSubmitDisabled (entry, title, city, country) {
  return entry.length <= 0
    || entry.length > 500
    || title.length <= 0
    || title.length > 140
    || city.length <= 0
    || city.length > 58
    || country.length <= 0
    || country.length > 30
}

function mapStateToProps ({modal, users}) {
  return {
    user: users[users.authedId] ? users[users.authedId].info : {},
    entryText: modal.entryText,
    cityText: modal.cityText,
    countryText: modal.countryText,
    titleText: modal.titleText,
    isOpen: modal.isOpen,
    isSubmitDisabled: isSubmitDisabled(modal.entryText, modal.titleText, modal.cityText, modal.countryText),
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(modalActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal)
