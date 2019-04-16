import React from 'react'
import {
  createEventListener,
  notBounce as notBounceFn,
  reachGoal as reachGoalFn
} from './analytics'

export default ({ notBounce, reachGoal, onClick, ...props }) => {
  if (notBounce || reachGoal) {
    onClick = createEventListener([
      [notBounce && notBounceFn],
      [reachGoal && reachGoalFn, reachGoal],
      [onClick]
    ])
  }
  return (
    <a target='_blank' rel='noopener noreferrer' onClick={onClick} {...props} />
  ) // eslint-disable-line jsx-a11y/anchor-has-content
}
