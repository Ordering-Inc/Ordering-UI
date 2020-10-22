import React from 'react'

import { PageNotFoundContainer, PageNotFoundText } from './styles'
import error404 from '../../../template/assets/images/error404.svg'
import lighting from '../../../template/assets/images/lighting.svg'
import { useLanguage } from 'ordering-components'

export const PageNotFound = () => {
  const [, t] = useLanguage()
  return (
    <PageNotFoundContainer>
      <PageNotFoundText>
        <span>{t('PAGE_NOT_FOUND', 'PAGE NOT FOUND')}</span>
        <img src={lighting} alt='lighting' />
      </PageNotFoundText>
      <div>
        <img src={error404} alt='error404' />
      </div>
    </PageNotFoundContainer>
  )
}
