import React from 'react'

export const Link = (props) => {
  const { children, className } = props
  return (
    <a className={className}>{children}</a>
  )
}
