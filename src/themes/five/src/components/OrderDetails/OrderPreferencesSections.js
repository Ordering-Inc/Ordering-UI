import React from 'react'

import {
  useLanguage
} from 'ordering-components'

import {
  CommentContainer
} from './styles'

export const OrderPreferencesSection = (props) => {
  const layouts = ['pfchangs'] // add layouts here to hide comments
  const { order, layout } = props
  const [, t] = useLanguage()

  const isShowComment = !(order?.comment && !order?.comment.includes('Enpoint:') && layouts.includes(layout))

  return (
    <>
      {order?.delivery_type === 1 && (
        <CommentContainer>
          <h3>{t('DELIVERY_PREFERENCE', 'Delivery preference')}</h3>
          <span>{order?.delivery_option?.name ? t(order?.delivery_option?.name.toUpperCase().replace(/\s/g, '_'), order?.delivery_option?.name) : t('EITHER_WAY', 'Either way')}</span>
        </CommentContainer>
      )}
      {(order?.comment && isShowComment) && (
        <CommentContainer>
          <h3>{t('COMMENT', 'Comment')}</h3>
          <span>{order?.comment}</span>
        </CommentContainer>
      )}
    </>
  )
}
