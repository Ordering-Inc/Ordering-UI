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
  NoOrdersWrapper,
  MyOrdersMenuContainer
} from './styles'
import { Tab, Tabs } from '../../styles/Tabs'

export const MyOrders = (props) => {
  const {
    hideOrders,
    businessesSearchList,
    onProductRedirect
  } = props

  const [, t] = useLanguage()
  const history = useHistory()

  const [selectItem, setSelectItem] = useState('all')
  const [isEmptyActive, setIsEmptyActive] = useState(false)
  const [isEmptyPast, setIsEmptyPast] = useState(false)
  const [isEmptyPreorder, setIsEmptyPreorder] = useState(false)
  const [selectedOption, setSelectedOption] = useState(!hideOrders ? 'orders' : 'business')
  const [isEmptyBusinesses, setIsEmptyBusinesses] = useState(false)
  const [businessOrderIds, setBusinessOrderIds] = useState([])

  const filterList = [
    { key: 'all', value: t('ALL', 'All') },
    { key: 'active', value: t('ACTIVE', 'Active') },
    { key: 'past', value: t('PAST', 'Past') },
    { key: 'preorder', value: t('PREORDERS', 'Preorders') }
  ]

  const MyOrdersMenu = [
    { key: 'orders', value: t('ORDERS', 'Orders') },
    { key: 'business', value: t('BUSINESS', 'Business') },
    { key: 'products', value: t('PRODUCTS', 'Products') }
  ]

  const notOrderOptions = ['business', 'products']
  const allEmpty = (isEmptyActive && isEmptyActive && isEmptyPreorder) || ((isEmptyBusinesses || businessOrderIds?.length === 0) && hideOrders)

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
      {hideOrders && !allEmpty && (
        <h2>{t('PREVIOUSLY_ORDERED', 'Previously ordered')}</h2>
      )}
      {!hideOrders && (
        <ProfileOptions value='orders' />
      )}
      <Container hideOrders={hideOrders}>
        {!hideOrders && (
          <h1>{('MY_ORDERS', 'My orders')}</h1>
        )}
        {!allEmpty && (
          <MyOrdersMenuContainer className='category-lists'>
            <Tabs variant='primary'>
              {MyOrdersMenu.filter(option => !hideOrders || option.key !== 'orders').map(option => (
                <Tab
                  key={option.key}
                  onClick={() => setSelectedOption(option.key)}
                  active={selectedOption === option.key}
                  borderBottom
                >
                  {option?.value}
                </Tab>
              ))}
            </Tabs>
          </MyOrdersMenuContainer>
        )}
        {!(isEmptyActive && isEmptyPast && isEmptyPreorder) && selectedOption === 'orders' && (
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
        {selectedOption === 'orders' && (
          <>
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
          </>
        )}
        {notOrderOptions.includes(selectedOption) && (
          <OrdersOption
            {...props}
            titleContent={t('PREVIOUSLY_ORDERED', 'Previously ordered')}
            hideOrders
            horizontal
            isBusiness={selectedOption === 'business'}
            isProducts={selectedOption === 'products'}
            activeOrders
            pastOrders
            preOrders
            businessesSearchList={businessesSearchList}
            setIsEmptyBusinesses={setIsEmptyBusinesses}
            businessOrderIds={businessOrderIds}
            setBusinessOrderIds={setBusinessOrderIds}
            onProductRedirect={onProductRedirect}
          />
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
