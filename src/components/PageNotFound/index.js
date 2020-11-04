import React from 'react'

import { PageNotFoundContainer, PageNotFoundText, PageNotFoundImage } from './styles'
import { useLanguage } from 'ordering-components'
import { useTheme } from 'styled-components'
import { useWindowSize } from '../../hooks/useWindowSize'

export const PageNotFound = () => {
  const [, t] = useLanguage()
  const theme = useTheme()
  const { width } = useWindowSize()
  return (
    <PageNotFoundContainer width={width}>
      <PageNotFoundText>
        <h1>{t('PAGE_NOT_FOUND', 'PAGE NOT FOUND')}</h1>
        <img src={theme.images?.general?.notFoundLighting} alt='lighting' height='40' width='40' />
      </PageNotFoundText>
      <PageNotFoundImage>
        <img src={theme.images?.general?.notFound404} alt='error404' width='300' height='300' />
      </PageNotFoundImage>
    </PageNotFoundContainer>
  )
}
