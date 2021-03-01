import React, { useState } from 'react'
import { useLanguage } from 'ordering-components'
import {
  Container,
  Header,
  Content,
  TabsContainer,
  Tab,
  ActionButtonGroup
} from './styles'
import { Button } from '../../../../styles/Buttons'

export const GroupOrderForm = (props) => {
  const [, t] = useLanguage()
  const [orderLimitValue, setOrderLimitValue] = useState(null)

  const orderLimits = [
    { value: null, content: t('NO_LIMIT', 'No Limit') },
    { value: 10, content: '$10' },
    { value: 15, content: '$15' },
    { value: 20, content: '$20' },
    { value: '', content: t('OTHER', 'Other') }
  ]

  const handleOrderLimitValue = (value) => {
    setOrderLimitValue(value)
  }
  return (
    <Container>
      <Header>
        <h1>
          {t('START_GROUP_ORDER', 'Start Group Order')}
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
        </p>
      </Header>
      <Content>
        <p>{t('WHAT_IS_YOUR_PERSON_ORDER_LIMIT', 'What is your person order limit?')}</p>
        <TabsContainer>
          {orderLimits.map(orderLimit => (
            <Tab
              key={orderLimit.value}
              active={orderLimitValue === orderLimit.value}
              onClick={() => handleOrderLimitValue(orderLimit.value)}
            >
              {orderLimit.content}
            </Tab>
          ))}
        </TabsContainer>
        <ActionButtonGroup>
          <Button color='secondary' borderRounded>
            {t('CANCEL', 'Cancel')}
          </Button>
          <Button color='primary' borderRounded>
            {t('START_GROUP_ORDER', 'Start Group Order')}
          </Button>
        </ActionButtonGroup>
      </Content>
    </Container>
  )
}
