import React from 'react'
import { IconWrapper } from './styles'

export const SocialNetWork = ({ url, icon }) => {
  return (
    <IconWrapper href={url} target='_blank' rel='noopener noreferrer'>
      {icon}
    </IconWrapper>
  )
}
