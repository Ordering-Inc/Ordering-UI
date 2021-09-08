import React, { useState } from 'react'
import { useLanguage, useApi } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
import HiOutlineChevronRight from '@meronex/icons/hi/HiOutlineChevronRight'

import {
  HelpContainer,
  BreadCrumbContainer,
  Title,
  HelpContentWrapper,
  SubPageList,
  SubPage,
  SubTitle,
  LastOrdersListWrapper
} from './styles'
import { LastOrders } from '../LastOrders'

export const Help = (props) => {
  const [, t] = useLanguage()
  const [ordering] = useApi()
  const [selectedPage, setSelectedPage] = useState(null)
  const [orderPageState, setOrderPageState] = useState({ body: null, loading: false, error: null })
  const [paymentPageState, setPaymentPageState] = useState({ body: null, loading: false, error: null })
  const [guidePageState, setGuidePageState] = useState({ body: null, loading: false, error: null })

  const menuList = [
    { key: 'help_with_an_order', title: t('HELP_WITH_AN_ORDER', 'Help with an order') },
    { key: 'account_and_payment_options', title: t('ACCOUNT_AND_PAYMENT_OPTIONS', 'Account and Payment Options') },
    { key: 'guide_to_ordering', title: t('GUIDE_TO_ORDERING', 'Guide to Ordering') }
  ]

  const getOrderPage = async () => {
    if (orderPageState.body) return
    setOrderPageState({ ...orderPageState, loading: true })
    try {
      const { content: { error, result } } = await ordering.pages('help_with_an_order').get()
      setOrderPageState({ ...orderPageState, loading: false })
      if (!error) {
        setOrderPageState({ ...orderPageState, body: result.body })
      } else {
        setOrderPageState({ ...orderPageState, error: result })
      }
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setOrderPageState({ ...orderPageState, loading: false, error: [err.message] })
      }
    }
  }

  const getPaymentPage = async () => {
    if (paymentPageState.body) return
    setPaymentPageState({ ...paymentPageState, loading: true })
    try {
      const { content: { error, result } } = await ordering.pages('orderingHome').get()
      setPaymentPageState({ ...paymentPageState, loading: false })
      if (!error) {
        setPaymentPageState({ ...paymentPageState, body: result.body })
      } else {
        setPaymentPageState({ ...paymentPageState, error: result })
      }
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setPaymentPageState({ ...paymentPageState, loading: false, error: [err.message] })
      }
    }
  }

  const getGuidePage = async () => {
    if (guidePageState.body) return
    setGuidePageState({ ...guidePageState, loading: true })
    try {
      const { content: { error, result } } = await ordering.pages('homeInstacart').get()
      setGuidePageState({ ...guidePageState, loading: false })
      if (!error) {
        setGuidePageState({ ...guidePageState, body: result.body })
      } else {
        setGuidePageState({ ...guidePageState, error: result })
      }
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setGuidePageState({ ...guidePageState, loading: false, error: [err.message] })
      }
    }
  }

  const handleChangeSubPage = (page) => {
    setSelectedPage(page)

    switch (page.key) {
      case 'help_with_an_order':
        getOrderPage()
        break
      case 'account_and_payment_options':
        getPaymentPage()
        break
      case 'guide_to_ordering':
        getGuidePage()
        break
    }
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <HelpContainer>
        {selectedPage && (
          <>
            <BreadCrumbContainer>
              <span
                className='deactive'
                onClick={() => setSelectedPage(null)}
              >
                {t('HELP', 'Help')}
              </span>
              <HiOutlineChevronRight />
              <span>{selectedPage?.title}</span>
            </BreadCrumbContainer>
            <SubTitle>{selectedPage?.title}</SubTitle>
          </>
        )}
        {
          !selectedPage && (
            <>
              <Title>{t('HELP', 'Help')}</Title>
              <HelpContentWrapper>
                <SubPageList>
                  {
                    menuList && menuList.map((page, i) => (
                      <SubPage key={i}>
                        <span onClick={() => handleChangeSubPage(page)}>{page?.title}</span>
                      </SubPage>
                    ))
                  }
                </SubPageList>
                <LastOrdersListWrapper>
                  <h2>{t('LAST_ORDER', 'Last order')}</h2>
                  <LastOrders />
                </LastOrdersListWrapper>
              </HelpContentWrapper>
            </>
          )
        }
        {
          selectedPage?.key === 'help_with_an_order' && (
            <>
              {orderPageState.loading && (
                <Skeleton height={200} />
              )}
              {orderPageState.body && (
                <div dangerouslySetInnerHTML={{
                  __html: orderPageState.body
                }}
                />
              )}
            </>
          )
        }
        {
          selectedPage?.key === 'account_and_payment_options' && (
            <>
              {paymentPageState.loading && (
                <Skeleton height={200} />
              )}
              {paymentPageState.body && (
                <div dangerouslySetInnerHTML={{
                  __html: paymentPageState.body
                }}
                />
              )}
            </>
          )
        }
        {
          selectedPage?.key === 'guide_to_ordering' && (
            <>
              {guidePageState.loading && (
                <Skeleton height={200} />
              )}
              {guidePageState.body && (
                <div dangerouslySetInnerHTML={{
                  __html: guidePageState.body
                }}
                />
              )}
            </>
          )
        }
      </HelpContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}
