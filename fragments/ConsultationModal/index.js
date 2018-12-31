import {
  Modal,
  ModalContainer,
  Text,
  Title,
} from '../../components'
import Form from './Form'

export default ({ show, toggle }) => (
  <Modal show={show} toggle={toggle}>
    <ModalContainer>
      <Title>Schedule a free consultation</Title>
      <Text>Please fill out this form and we will get back to you promptly</Text>

      <Form />
    </ModalContainer>
  </Modal>
)
