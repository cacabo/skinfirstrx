import s from 'styled-components'

export const Text = s.p`
  line-height: 1.5;
  margin-bottom: 1rem;

  ${({ inline }) => inline && (`
    display: inline-block;
  `)}

  ${({ right }) => right && (`
    float: right;
  `)}

  ${({ marginTop }) => marginTop && (`
    margin-top: ${marginTop};
  `)}

  ${({ marginBottom }) => marginBottom && (`
    margin-bottom: ${marginBottom};
  `)}
`

export const Label = s(Text)`
  margin-bottom: 0.5rem;
  opacity: 0.5;
  font-size: 80%;
  font-weight: bold;
`

export const Title = s.h1``

export const Subtitle = s.h3``

export const Preheading = s.h5`
  margin-bottom: 3rem;
`
