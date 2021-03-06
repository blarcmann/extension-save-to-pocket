import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { COLORS } from 'elements/colors/colors'
const { $silver, $overcast, $teal, $white, $pitch } = COLORS

const Button = styled.button`
  all: unset;
  background: ${props => (props.active ? $teal : $silver)};
  border: 1px solid ${$overcast};
  border-color: ${props => (props.darkMode ? $pitch : $overcast)};
  border-radius: 2em;
  cursor: pointer;
  display: inline-block;
  height: 10px;
  margin-right: 5px;
  outline: 0;
  padding: 2px;
  transition: all 0.4s ease;
  width: 20px;

  &::after {
    background: ${$white};
    border-radius: 50%;
    content: '';
    display: block;
    height: 100%;
    left: ${props => (props.active ? '50%' : '0')};
    position: relative;
    transition: all 0.2s ease;
    width: 50%;
  }
`

Toggle.propTypes = {
  darkMode: PropTypes.bool,
  active: PropTypes.bool,
  action: PropTypes.func
}

export default function Toggle({ action, active, darkMode }) {
  return <Button onClick={action} active={active} darkMode={darkMode} />
}
