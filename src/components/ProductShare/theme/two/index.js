import React from 'react'
import { ProductShare as ProductShareController, useLanguage } from 'ordering-components'
import { useTheme } from 'styled-components'
import { Input } from '../../../../styles/Inputs/theme/two'
import { Button } from '../../../../styles/Buttons/theme/two'
import BsArrowLeft from '@meronex/icons/bs/BsArrowLeft'
import {
  Container,
  WrapImage,
  WrapShareLink
} from './styles'

const ProductShareUI = (props) => {
  const {
    urlToShare,
    onCancel
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()

  const copyShareUrlToClipboard = () => {
    var copyText = document.getElementById('shareLink')
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    document.execCommand('copy')
  }

  return (
    <Container>
      <a onClick={() => onCancel()}>
        <BsArrowLeft />
      </a>
      <WrapImage>
        <img src={theme.images.general.gift} width='40' height='40' alt='gift' />
      </WrapImage>
      <WrapShareLink>
        <p>{t('SHARE_YOUR_LINK', 'Share Your Link')}</p>
        <div>
          <Input
            id='shareLink'
            type='text'
            value={urlToShare}
            readOnly
          />
          <Button
            color='primary'
            onClick={() => copyShareUrlToClipboard()}
          >
            {t('COPY_LINK', 'Copy Link')}
          </Button>
        </div>
      </WrapShareLink>
    </Container>
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
