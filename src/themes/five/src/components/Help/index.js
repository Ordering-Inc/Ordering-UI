import React, { useState } from 'react'
import { Help as HelpController } from './naked'
import { useLanguage, useUtils } from 'ordering-components'
import { useTheme } from 'styled-components'
import {
  HelpContainer,
  BreadCrumbContainer,
  Title,
  HelpContentWrapper,
  SubPageList,
  SubPage,
  OrdersInfoWrapper,
  BusinessHeader,
  OrderInfoBlock,
  SubTitle
} from './styles'

const HelpUI = (props) => {
  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ optimizeImage }] = useUtils()
  const [title, setTitle] = useState(t('HELP', 'help'))
  const [subTitle, setSubTitle] = useState(null)

  const menuList = [
    { key: 'help_with_an_order', title: t('HELP_WITH_AN_ORDER', 'Help with an order') },
    { key: 'account_and_payment_options', title: t('ACCOUNT_AND_PAYMENT_OPTIONS', 'Account and Payment Options') },
    { key: 'guide_to_ordering', title: t('GUIDE_TO_ORDERING', 'Guide to Ordering') }
  ]

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <HelpContainer>
        {
          subTitle && (
            <>
              <BreadCrumbContainer>
                <span>{t('HELP', 'Help')}</span> / <span className='active'>{subTitle}</span>
              </BreadCrumbContainer>
              <SubTitle>{subTitle}</SubTitle>
            </>
          )
        }
        {
          !subTitle && (
            <Title>{title}</Title>
          )
        }
        <HelpContentWrapper>
          <SubPageList>
            {
              menuList && menuList.map((page, i) => (
                <SubPage key={i}>
                  <span onClick={() => setSubTitle(page?.key)}>{page?.title}</span>
                </SubPage>
              ))
            }
          </SubPageList>
          <OrdersInfoWrapper>
            <h2>{t('LAST_ORDER', 'Last order')}</h2>
            <BusinessHeader bgimage={optimizeImage(theme.images?.dummies?.businessLogo, 'h_400,c_limit')}>
              <OrderInfoBlock>
                <h4>Grilled</h4>
                <p>Order Completed  on June 24,2021 - 10:34 am</p>
              </OrderInfoBlock>
            </BusinessHeader>
          </OrdersInfoWrapper>
        </HelpContentWrapper>
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

export const Help = (props) => {
  const helpProps = {
    UIComponent: HelpUI
  }
  return <HelpController {...helpProps} />
}
