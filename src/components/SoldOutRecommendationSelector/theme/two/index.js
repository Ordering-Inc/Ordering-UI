import React from 'react'
import { useLanguage } from 'ordering-components'
import { Select } from '../../../../styles/Select'

import {
  Container,
  Option
} from './styles'

export const SoldOutRecommendationSelector = (props) => {
  const [, t] = useLanguage()
  const recommendationOptions = [
    {
      value: 1,
      content: <Option>{t('GO_WITH_MERCHANT_RECOMMNENDATION', 'Go with merchant recommendation')}</Option>
    },
    {
      value: 2,
      content: <Option>{t('REFUND_THIS_ITEM', 'Refund this item')}</Option>
    },
    {
      value: 3,
      content: <Option>{t('CONTACT_ME', 'Contact me')}</Option>
    },
    {
      value: 4,
      content: <Option>{t('CANCEL_THE_ENTIRE_ORDER', 'Cancel the entire order')}</Option>
    }
  ]
  return (
    <Container>
      <Select
        defaultValue={1}
        options={recommendationOptions}
      />
    </Container>
  )
}
