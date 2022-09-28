import React, { useState } from 'react'
import { useUtils, useLanguage } from 'ordering-components'
import { useTheme } from 'styled-components'
import { Button } from '../../styles/Buttons'
import BsCheck from '@meronex/icons/bs/BsCheck'

import {
  ProductCopyURLContainer,
  ProductImageWrapper
} from './styles'

export const ProductCopyURL = (props) => {
  const {
    urlToShare,
    product
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const [copiedToClipboard, setcopiedToClipboard] = useState(false)

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(urlToShare)
    setcopiedToClipboard(true)
    setTimeout(() => {
      props.onClose && props.onClose()
    }, 1000)
  }

  return (
    <ProductCopyURLContainer>
      <ProductImageWrapper>
        <img
          src={optimizeImage(product?.images || theme.images?.dummies?.product, 'h_200,c_limit')}
          loading='lazy'
          alt='product image'
        />
      </ProductImageWrapper>
      <p className='name'>{product?.name}</p>
      {product?.description && (
        <p className='description'>{product?.description}</p>
      )}
      <Button
        outline={!copiedToClipboard}
        color='primary'
        onClick={() => handleCopyToClipboard()}
      >
        {copiedToClipboard ? <BsCheck /> : t('COPY_URL', 'Copy URL')}
      </Button>
    </ProductCopyURLContainer>
  )
}
