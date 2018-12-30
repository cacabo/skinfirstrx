import { Modal, ModalContainer } from '../../components'

export default ({ show, toggle }) => (
  <Modal show={show} toggle={toggle}>
    <ModalContainer>
      <h1>This is my modal</h1>
      <p>This is some text</p>
    </ModalContainer>
  </Modal>
)
