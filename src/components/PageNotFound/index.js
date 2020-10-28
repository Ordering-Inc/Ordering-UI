import React from 'react'

import { PageNotFoundContainer, PageNotFoundText } from './styles'
import { useLanguage } from 'ordering-components'
import { useTheme } from 'styled-components'

export const PageNotFound = () => {
  const [, t] = useLanguage()
  const theme = useTheme()
  return (
    <PageNotFoundContainer>
      <PageNotFoundText>
        <span>{t('PAGE_NOT_FOUND', 'PAGE NOT FOUND')}</span>
        <img src={theme.images?.general?.notFoundLighting} alt='lighting' />
      </PageNotFoundText>
      <div>
        <img src={theme.images?.general?.notFound404} alt='error404' />
      </div>
    </PageNotFoundContainer>
  )
}
