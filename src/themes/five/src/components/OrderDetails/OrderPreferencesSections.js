import React from 'react'

import {
  useLanguage
} from 'ordering-components'

import {
  CommentContainer
} from './styles'

export const OrderPreferencesSection = (props) => {
  const { order } = props
  const [, t] = useLanguage()

  return (
    <>
      {order?.delivery_type === 1 && (
        <CommentContainer>
          <h3>{t('DELIVERY_PREFERENCE', 'Delivery preference')}</h3>
          <span>{order?.delivery_option?.name ? t(order?.delivery_option?.name.toUpperCase().replace(/\s/g, '_'), order?.delivery_option?.name) : t('EITHER_WAY', 'Either way')}</span>
        </CommentContainer>
      )}
      {order?.comment && (
        <CommentContainer>
          <h3>{t('COMMENT', 'Comment')}</h3>
          <span>{order?.comment}</span>
        </CommentContainer>
      )}
    </>
  )
}
