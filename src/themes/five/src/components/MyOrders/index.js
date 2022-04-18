import React, { useState } from 'react'
import { useLanguage } from 'ordering-components'
import { ProfileOptions } from '../../../../../components/UserProfileForm/ProfileOptions'
import { OrdersOption } from '../OrdersOption'
import { Button } from '../../styles/Buttons'
import MdClose from '@meronex/icons/ios/MdClose'
import { useHistory } from 'react-router-dom'
import {
  Container,
  Divider,
  OrderGroupFilterWrapper,
  NoOrdersWrapper
} from './styles'

export const MyOrders = (props) => {
  const [, t] = useLanguage()
  const history = useHistory()

  const [selectItem, setSelectItem] = useState('all')
  const [isEmptyActive, setIsEmptyActive] = useState(false)
  const [isEmptyPast, setIsEmptyPast] = useState(false)
  const [isEmptyPreorder, setIsEmptyPreorder] = useState(false)

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
        {!(isEmptyActive && isEmptyPast && isEmptyPreorder) && (
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
        )}
        {(isEmptyActive && isEmptyPast && isEmptyPreorder) ? (
          <NoOrdersWrapper>
            <p>{t('YOU_DONT_HAVE_ORDERS', 'You don\'t have any orders')}</p>
            <Button
              color='primary'
              onClick={() => history.push('/')}
            >
              {t('ORDER_NOW', 'Order now')}
            </Button>
          </NoOrdersWrapper>
        ) : (
          <>
            {(selectItem === 'all' || selectItem === 'preorder') && (
              <>
                <OrdersOption
                  {...props}
                  preOrders
                  horizontal
                  setIsEmptyPreorder={setIsEmptyPreorder}
                  selectItem={selectItem}
                />
                <Divider />
              </>
            )}
            {(selectItem === 'all' || selectItem === 'active') && (
              <>
                <OrdersOption
                  {...props}
                  activeOrders
                  horizontal
                  setIsEmptyActive={setIsEmptyActive}
                  selectItem={selectItem}
                />
                <Divider />
              </>
            )}
            {(selectItem === 'all' || selectItem === 'past') && (
              <>
                <OrdersOption
                  {...props}
                  pastOrders
                  horizontal
                  setIsEmptyPast={setIsEmptyPast}
                  selectItem={selectItem}
                />
                <Divider />
              </>
            )}
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
