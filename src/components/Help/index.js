import React, { useState } from 'react'
import { useLanguage } from 'ordering-components'
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
import { HelpStaticPage } from '../HelpStaticPage'

export const Help = (props) => {
  const [, t] = useLanguage()
  const [selectedPage, setSelectedPage] = useState(null)

  const menuList = [
    { id: 1, title: t('HELP_WITH_AN_ORDER', 'Help with an order') },
    { id: 2, title: t('ACCOUNT_AND_PAYMENT_OPTIONS', 'Account and Payment Options') },
    { id: 3, title: t('GUIDE_TO_ORDERING', 'Guide to Ordering') }
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
                        <span onClick={() => setSelectedPage(page)}>{page?.title}</span>
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
        {selectedPage?.id === 1 && <HelpStaticPage slug='helpOrder' />}
        {selectedPage?.id === 2 && <HelpStaticPage slug='helpAccountAndPayment' />}
        {selectedPage?.id === 3 && <HelpStaticPage slug='helpOrderingGuide' />}
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
