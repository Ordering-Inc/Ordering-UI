import React from 'react'
import { useTheme } from 'styled-components'
import { useLanguage, useUtils } from 'ordering-components'

import {
  Container,
  DateBlock,
  MessageBlock,
  DescriptionBlock,
  Dot
} from './styles'

export const WalletTransactionItem = (props) => {
  const {
    item,
    idx,
    type
  } = props

  const theme = useTheme()
  const [{ parsePrice, parseDate }] = useUtils()
  const [, t] = useLanguage()

  const LANG_EVENT_KEY = `WALLET_${type.toUpperCase()}_${item?.event.toUpperCase()}_${item?.event_type.toUpperCase()}_${item?.amount >= 0 ? 'POSITIVE' : 'NEGATIVE'}`
  const lang_event_text = !!item?.event?.order_id
    ? `:author ${item?.amount >= 0 ? 'Add' : 'Reduce'} money in Order No. :order_id`
    : `:author ${item?.amount >= 0 ? 'Add' : 'Reduce'} money`

  const itemDescription = item?.description?.split(' ')
  const order_id = itemDescription.pop()

  return (
    <Container>
      <Dot isTop={idx === 0} />
      <DateBlock>
        <span>{parseDate(item?.created_at)}</span>
        <span
          style={{
            color: item?.amount > 0 && theme.colors.primary,
            fontWeight: 'bold'
          }}
        >
          {item?.amount > 0 && '+ '}{type !== 'credit_point' ? parsePrice(item?.amount) : item?.amount}
        </span>
      </DateBlock>
      <MessageBlock>
        <span>
          {t(LANG_EVENT_KEY, lang_event_text)
            .replace(':author', item?.event?.author?.name ?? '')
            .replace(':order_id', item?.event?.order_id ?? '')}
        </span>
      </MessageBlock>
      {!!item?.description && (
        <DescriptionBlock>
          <span>{`${t('ACCUMULATION_CREDIT_POINT_BY_ORDER', itemDescription.join(' '))} ${order_id}`}</span>
        </DescriptionBlock>
      )}
      {!!item?.code && (
        <DescriptionBlock>
          <span><strong>{t('CODE', 'Code')}:</strong> {item?.code}</span>
        </DescriptionBlock>
      )}
    </Container>
  )
}
