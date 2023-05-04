import React, { useEffect, useState } from 'react'
import { useLanguage, useSession, useApi } from 'ordering-components'
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
    onProductRedirect,
    pfchangs
  } = props

  const [, t] = useLanguage()
  const history = useHistory()
  const theme = useTheme()
  const [{ user, token }] = useSession()
  const [ordering] = useApi()
  const [selectItem, setSelectItem] = useState('all')
  const [isEmptyActive, setIsEmptyActive] = useState(false)
  const [isEmptyPast, setIsEmptyPast] = useState(false)
  const [isEmptyPreorder, setIsEmptyPreorder] = useState(false)
  const [selectedOption, setSelectedOption] = useState(!hideOrders ? 'orders' : 'business')
  const [isEmptyBusinesses, setIsEmptyBusinesses] = useState(false)
  const [businessOrderIds, setBusinessOrderIds] = useState([])
  const [wowPointsList, setWowPointsList] = useState([])
  const isAlsea = ordering.project === 'alsea'

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
  const allEmpty = (isEmptyActive && isEmptyPast && isEmptyPreorder) || ((isEmptyBusinesses || businessOrderIds?.length === 0) && hideOrders)

  const handleChangeFilter = (key) => {
    if (selectItem === key) setSelectItem('all')
    else setSelectItem(key)
  }

  const getWowPoints = async () => {
    try {
      const response = await fetch(`https://alsea-plugins${isAlsea ? '' : '-staging-development'}.ordering.co/alseaplatform/wowcheckin_allowed.php?email=${user?.email}`, {
        method: 'GET',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
      const result = await response.json()
      if (result.content.allowed) {
        const responsePoints = await fetch(`https://alsea-plugins${isAlsea ? '' : '-staging-development'}.ordering.co/alseaplatform/wow_movimientos_amount.php`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId: user?.wow_rewards_user_id,
            startDate: '2020-01-12'
          })
        })
        const resultPoints = await responsePoints.json()
        setWowPointsList(resultPoints.past_orders)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const pfchangsTabProps = pfchangs ? {
    borderBottom: true,
    pfchangs: true,
    activeColor: theme.colors?.gold,
    color: theme.colors?.gold
  } : {}

  useEffect(() => {
    if (user.email) {
      getWowPoints()
    }
  }, [user.email])

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
        <ProfileOptions value='orders' pfchangs={pfchangs} />
      )}
      <Container hideOrders={hideOrders} pfchangs={pfchangs}>
        {!hideOrders && (
          <h1>{t('MY_ORDERS', 'My orders')}</h1>
        )}
        {!allEmpty && (
          <MyOrdersMenuContainer className='category-lists' pfchangs={pfchangs}>
            <Tabs variant='primary'>
              {MyOrdersMenu.filter(option => !hideOrders || option.key !== 'orders').map(option => (
                <Tab
                  key={option.key}
                  onClick={() => setSelectedOption(option.key)}
                  active={selectedOption === option.key}
                  borderBottom
                  activeColor={theme?.layouts?.general?.components?.layout?.type === 'pfchangs' ? theme?.colors?.gold : ''}
                  {...pfchangsTabProps}
                >
                  {option?.value}
                </Tab>
              ))}
            </Tabs>
          </MyOrdersMenuContainer>
        )}
        {!(isEmptyActive && isEmptyPast && isEmptyPreorder) && selectedOption === 'orders' && !pfchangs && (
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
                      wowPointsList={wowPointsList}
                    />
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
