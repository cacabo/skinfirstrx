import {
  Modal,
  ModalContainer,
  Input,
  Textarea,
  Title,
  Text,
  Row,
  Col,
  ColSpace,
  Btn,
} from '../../components'

export default ({ show, toggle }) => (
  <Modal show={show} toggle={toggle}>
    <ModalContainer>
      <Title>Schedule a free consultation</Title>
      <Text>Please fill out this form and we will get back to you promptly</Text>

      <Row>
        <Col>
          <Input
            name="name"
            type="text"
            label="Name"
            placeholder=""
          />
        </Col>
        <ColSpace width="1rem" />
        <Col>
          <Input
            name="email"
            type="email"
            label="Email"
            placeholder="me@email.com"
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Input
            name="phone"
            type="tel"
            label="Phone"
            placeholder="(781)123-4567"
          />
        </Col>
        <ColSpace width="1rem" />
        <Col>
          <Input
            name="zip"
            type="number"
            label="Zip Code"
            placeholder="02482"
          />
        </Col>
      </Row>

      <Textarea
        name="body"
        type="text"
        label="Comments/Questions"
        placeholder="..."
      />

      <Btn isInput>Schedule</Btn>
    </ModalContainer>
  </Modal>
)
