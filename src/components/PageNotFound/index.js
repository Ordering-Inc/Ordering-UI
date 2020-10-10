import React from 'react'

import {PageNotFoundContainer} from './styles'
import error404 from '../../../template/assets/images/error404.svg'

export const PageNotFound = () => {
  return (
    <PageNotFoundContainer>
      <div>
        <img src={error404} alt='error404' />
      </div>
    </PageNotFoundContainer>
  )
}
