import React, { useState } from 'react'
import { useLanguage } from 'ordering-components'
import { HorizontalGiftCardOrdersLayout } from '../HorizontalGiftCardOrdersLayout'
import { VerticalGiftCardOrdersLayout } from '../VerticalGiftCardOrdersLayout'
import {
  Container,
  Divider,
  NoOrdersWrapper
} from './styles'

export const GiftCardOrdersList = (props) => {
  const [, t] = useLanguage()
  const [isEmptyPending, setIsEmptyPending] = useState(false)
  const [isEmptySent, setIsEmptySent] = useState(false)
  const [isEmptyRedeemed, setIsEmptyRedeemed] = useState(false)

  return (
    <Container>
      <HorizontalGiftCardOrdersLayout
        title={t('PENDING', 'Pending')}
        defaultStatus='pending'
        setIsEmpty={setIsEmptyPending}
      />

      {isEmptyPending && isEmptySent && isEmptyRedeemed && (
        <Divider />
      )}

      <VerticalGiftCardOrdersLayout
        title={t('SENT', 'Sent')}
        defaultStatus='sent'
        setIsEmpty={setIsEmptySent}
      />

      <VerticalGiftCardOrdersLayout
        title={t('REDEEMED', 'Redeemed')}
        defaultStatus='activated'
        setIsEmpty={setIsEmptyRedeemed}
      />

      {isEmptyPending && isEmptySent && isEmptyRedeemed && (
        <NoOrdersWrapper>
          <p>{t('YOU_DONT_HAVE_CARDS', 'You don\'t have cards')}</p>
        </NoOrdersWrapper>
      )}
    </Container>
  )
}
