import React from 'react'
import PropTypes from 'prop-types'
import s from 'styled-components'

const StarImage = s.img`
  display: inline-block !important;
  width: 1.5rem;
  height: auto;
  padding-right: 0.25rem;
  margin: 0;
  margin-bottom: -0.25rem;
`

const Star = ({ stars, value }) => (
  (value > stars) ? (
    <StarImage src="/static/icons/gray-star.svg" alt="gray star" />
  ) : (
    <StarImage src="/static/icons/gold-star.svg" alt="gold star" />
  )
)

Star.propTypes = {
  stars: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

const Stars = ({ stars }) => (
  <>
    <Star stars={stars} value={1} />
    <Star stars={stars} value={2} />
    <Star stars={stars} value={3} />
    <Star stars={stars} value={4} />
    <Star stars={stars} value={5} />
  </>
)

Stars.propTypes = {
  stars: PropTypes.number.isRequired,
}

export default Stars
