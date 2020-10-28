import React from 'react'
import PropTypes from 'prop-types'

const Emoji = ({ symbol, label }) => <span aria-label={label}>{symbol}</span>

Emoji.propTypes = {
  symbol: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default Emoji
