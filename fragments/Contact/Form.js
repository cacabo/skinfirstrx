import s from 'styled-components'

import { Btn, Input, Textarea } from '../../components'
import { WHITE, BORDER } from '../../constants/colors'

const FormWrapper = s.div`
  background: ${WHITE};
  border: 1px solid ${BORDER};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  box-shadow: 0px 2px 4px ${BORDER};
`

export default () => (
  <FormWrapper>
    <form>
      <Input
        name="name"
        type="text"
        label="Name"
        placeholder=""
      />

      <Input
        name="email"
        type="email"
        label="Email"
        placeholder="me@email.com"
      />

      <Textarea
        name="body"
        type="text"
        label="Message"
        placeholder="..."
      />

      <Input
        name="services"
        type="text"
        label="List services interested in"
        placeholder=""
      />

      <Btn isInput>Submit</Btn>
    </form>
  </FormWrapper>
)
