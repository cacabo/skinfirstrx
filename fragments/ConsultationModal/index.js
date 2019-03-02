import React from 'react'
import PropTypes from 'prop-types'
import {
  Modal,
  ModalContainer,
  Text,
  Title,
} from '../../components'
import Form from './Form'

const ConsultationModal = ({ show, toggle }) => (
  <Modal show={show} toggle={toggle}>
    <ModalContainer>
      <Title>Schedule a free consultation</Title>
      <Text>Please fill out this form and we will get back to you promptly</Text>

      <Form />
    </ModalContainer>
  </Modal>
)

ConsultationModal.defaultProps = {
  show: false,
}

ConsultationModal.propTypes = {
  show: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
}

export default ConsultationModal
