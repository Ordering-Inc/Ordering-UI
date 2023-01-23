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
import { useTheme } from 'styled-components'

export const MyOrders = (props) => {
  const {
    hideOrders,
    businessesSearchList,
    onProductRedirect
  } = props

  const [, t] = useLanguage()
  const history = useHistory()
  const theme = useTheme()
  const layout = theme?.orders?.components?.layout?.type || 'original'

  const [isEmptyActive, setIsEmptyActive] = useState(false)
  const [isEmptyPast, setIsEmptyPast] = useState(false)
  const [isEmptyPreorder, setIsEmptyPreorder] = useState(false)
  const [selectedOption, setSelectedOption] = useState(!hideOrders ? 'orders' : 'business')
  const [isEmptyBusinesses, setIsEmptyBusinesses] = useState(false)
  const [businessOrderIds, setBusinessOrderIds] = useState([])

  const hideProductsTab = theme?.orders?.components?.products_tab?.hidden
  const hideBusinessTab = theme?.orders?.components?.business_tab?.hidden

  const MyOrdersMenu = [
    { key: 'orders', value: t('ORDERS', 'Orders'), disabled: false },
    { key: 'business', value: t('BUSINESS', 'Business'), disabled: hideBusinessTab },
    { key: 'products', value: t('PRODUCTS', 'Products'), disabled: hideProductsTab }
  ]

  const notOrderOptions = ['business', 'products', 'professionals']
  const allEmpty = (isEmptyActive && isEmptyPast && isEmptyPreorder) || ((isEmptyBusinesses || businessOrderIds?.length === 0) && hideOrders)

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
      <Container hideOrders={hideOrders}>
        {!hideOrders && (
          <h1>{layout === 'appointments' ? t('MY_APPOINTMENTS', 'My appointments') : t('MY_ORDERS', 'My orders')}</h1>
        )}
        {!allEmpty && (
          <MyOrdersMenuContainer className='category-lists'>
            <Tabs variant='primary'>
              {MyOrdersMenu.filter(option => (!hideOrders || option.key !== 'orders') && !option.disabled).map(option => (
                <Tab
                  key={option.key}
                  onClick={() => setSelectedOption(option.key)}
                  active={selectedOption === option.key}
                  borderBottom
                >
                  {option?.value}
                </Tab>
              ))}
              {layout === 'appointments' && (
                <Tab
                  onClick={() => setSelectedOption('professionals')}
                  active={selectedOption === 'professionals'}
                  borderBottom
                >
                  {t('PROFESSIONALS', 'Professionals')}
                </Tab>
              )}
            </Tabs>
          </MyOrdersMenuContainer>
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
                <OrdersOption
                  {...props}
                  preOrders
                  horizontal
                  setIsEmptyPreorder={setIsEmptyPreorder}
                />
                {!isEmptyPreorder && <Divider />}
                <OrdersOption
                  {...props}
                  activeOrders
                  horizontal
                  setIsEmptyActive={setIsEmptyActive}
                />
                {!isEmptyActive && <Divider />}
                <OrdersOption
                  {...props}
                  pastOrders
                  setIsEmptyPast={setIsEmptyPast}
                />
                {!isEmptyPast && <Divider />}
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
            isProfessionals={selectedOption === 'professionals'}
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
