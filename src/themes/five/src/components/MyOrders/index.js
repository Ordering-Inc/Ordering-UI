import React, { useState } from 'react'
import { Container, Divider, OrderGroupFilterWrapper } from './styles'
import { useLanguage } from 'ordering-components'

import { ProfileOptions } from '../../../../../components/UserProfileForm/ProfileOptions'
import { OrdersOption } from '../OrdersOption'
import { Button } from '../../styles/Buttons'
import MdClose from '@meronex/icons/ios/MdClose'

export const MyOrders = (props) => {
  const [, t] = useLanguage()
  const [selectItem, setSelectItem] = useState('all')

  const filterList = [
    { key: 'all', value: t('ALL', 'All') },
    { key: 'active', value: t('ACTIVE', 'Active') },
    { key: 'past', value: t('PAST', 'Past') },
    { key: 'preorder', value: t('PREORDERS', 'Preorders') }
  ]

  const handleChangeFilter = (key) => {
    if (selectItem === key) setSelectItem('all')
    else setSelectItem(key)
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <ProfileOptions value='orders' />
      <Container>
        <h1>{('MY_ORDERS', 'My orders')}</h1>
        <OrderGroupFilterWrapper>
          {filterList?.map((order, i) => (
            <Button
              key={i}
              color={selectItem === order.key ? 'primary' : 'secundary'}
              onClick={() => handleChangeFilter(order.key)}
            >
              {order.value}{selectItem === order.key && <MdClose />}
            </Button>
          ))}
        </OrderGroupFilterWrapper>
        {(selectItem === 'all' || selectItem === 'preorder') && (
          <>
            <OrdersOption {...props} preOrders horizontal />
            <Divider />
          </>
        )}
        {(selectItem === 'all' || selectItem === 'active') && (
          <>
            <OrdersOption {...props} activeOrders horizontal />
            <Divider />
          </>
        )}
        {(selectItem === 'all' || selectItem === 'past') && (
          <>
            <OrdersOption {...props} pastOrders horizontal />
            <Divider />
          </>
        )}
      </Container>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
