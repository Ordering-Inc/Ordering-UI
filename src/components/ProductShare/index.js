import React from 'react'
import { FiShare2 } from 'react-icons/fi'
import { ProductShare as ProductShareController } from 'ordering-components'

import {
  IconShare,
  ShareButtons
} from './styles'

const ProductShareUI = (props) => {
  const {
    shareButton,
    showShareButton,
    urlToShare
  } = props

  return (
    <>
      <IconShare>
        <FiShare2 onClick={() => shareButton()} />
      </IconShare>
      <ShareButtons
        className='a2a_kit a2a_kit_size_32 a2a_floating_style a2a_vertical_style'
        data-a2a-url={urlToShare}
        showShareButton={showShareButton}
      >
        <a className='a2a_button_facebook' />
        <a className='a2a_button_whatsapp' />
        <a className='a2a_button_twitter' />
        <a className='a2a_button_email' />
        <a className='a2a_dd' href='https://www.addtoany.com/share' />
      </ShareButtons>
    </>
  )
}

export const ProductShare = (props) => {
  const productShareProps = {
    ...props,
    UIComponent: ProductShareUI
  }
  return (
    <ProductShareController {...productShareProps} />
  )
}
