import React from 'react'
import Linkify from 'react-linkify'

export const LinkableText = (props) => {
  const { text } = props
  return (
    <Linkify
        componentDecorator={(decoratedHref, decoratedText, key) => (
            <a target="blank" href={decoratedHref} key={key}>
                {decoratedText}
            </a>
        )}
    >
      {text}
    </Linkify>
  )
}
