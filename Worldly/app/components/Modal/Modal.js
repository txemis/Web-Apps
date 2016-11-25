import React, { PropTypes } from 'react'
import { default as ReactModal } from 'react-modal'
import {
  newDecisionTop, pointer, darkBtn, newDecisionInputContainer,
  newDecisionInput, submitDecisionBtn, titleInput,
  titleContainer, textArea, location, colon, titleContainerTop } from './styles.css'
import { formatJournalEntry } from 'helpers/utils'

const modalStyles = {
  content: {
    marginTop: 50,
    top: '10%',
    left: '5%',
    width: '90%',
    height: '85%',
    margin: '0px auto',
    borderRadius: 5,
    background: '#91A1C4',
    padding: 0,
  },
}

const { object, string, func, bool } = PropTypes
Modal.PropTypes = {
  entryText: string.isRequired,
  titleText: string.isRequired,
  cityText: string.isRequired,
  countryText: string.isRequired,
  isOpen: bool.isRequired,
  user: object.isRequired,
  isSubmitDisabled: bool.isRequired,
  openModal: func.isRequired,
  closeModal: func.isRequired,
  updateDecisionText: func.isRequired,
  saveAndCloseModal: func.isRequired,
}

export default function Modal (props) {

  function submitDecision () {
    props.saveAndCloseModal(formatJournalEntry(props.titleText, props.cityText, props.countryText, props.entryText, props.user))
  }

  return (
    <span className={darkBtn} onClick={props.openModal}>
      {'New Entry'}
      <ReactModal style={modalStyles} isOpen={props.isOpen} onRequestClose={props.closeModal}>
        <div className={titleContainerTop}>
          <span className='col-xs-10 col-xs-offset-1'>
            <input
              onChange={(e) => props.updateJournalText('titleText', e.target.value)}
              value={props.titleText}
              maxLength={80}
              type='text'
              className={titleInput}
              placeholder="Title" />
          </span>
        </div>
        <div className={titleContainer}>
          <span className='col-xs-4 col-xs-offset-2'>
            <input
              onChange={(e) => props.updateJournalText('cityText', e.target.value)}
              value={props.cityText}
              maxLength={80}
              type='text'
              className={location}
              placeholder="City" />
          </span>
          <span className={colon}>{','}</span>
          <span className='col-xs-4'>
            <input
              onChange={(e) => props.updateJournalText('countryText', e.target.value)}
              value={props.countryText}
              maxLength={80}
              type='text'
              className={location}
              placeholder="Country" />
          </span>
        </div>
        <div className={newDecisionInputContainer}>
          <textarea
            onChange={(e) => props.updateJournalText('entryText', e.target.value)}
            value={props.entryText}
            maxLength={140}
            type='text'
            className={textArea}
            placeholder="Today in..." />
        </div>
        <span className='text-center col-xs-4 col-xs-offset-4'>
          <div
            className={submitDecisionBtn}
            disabled={props.isSubmitDisabled}
            onClick={submitDecision}>
              {'Submit'}
          </div>
        </span>
      </ReactModal>
    </span>
  )
}
