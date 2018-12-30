import s from 'styled-components'

export const Text = s.p`
  line-height: 1.5;
  margin-bottom: 1rem;

  ${({ right }) => right && (`
    float: right;
  `)}
`

export const Label = s(Text)`
  margin-bottom: 0.5rem;
`

export const Title = s.h1``

export const Subtitle = s.h3``

export const Preheading = s.h5`
  margin-bottom: 3rem;
`
