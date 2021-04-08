import React, { useRef } from 'react'
import { OrderBill } from '../OrderBill'
import { useTheme } from 'styled-components'
import { ProductItemAccordion } from '../ProductItemAccordion'
import { useLanguage, useUtils, useSession } from 'ordering-components'
import { useReactToPrint } from 'react-to-print'
import JSpdf from 'jspdf'
import domtoimage from 'dom-to-image'
import {
  TicketContainer,
  HeroContainer,
  TopContainer,
  TitleConatiner,
  HeroInnerContainer,
  OrderBillInfo,
  BusinessInfo,
  TicketContent,
  ExportMethodsContainer,
  MethodWrapper
} from './styles'

export const Ticket = (props) => {
  const {
    order
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ parseDate, parsePrice }] = useUtils()
  const [{ user }] = useSession()
  const printRef = useRef()

  const handlePrint = useReactToPrint({
    content: () => printRef.current
  })

  const savePDF = () => {
    const input = document.getElementById('doc')
    const pdf = new JSpdf('p', 'px', 'a4')

    const width = pdf.internal.pageSize.width
    const height = pdf.internal.pageSize.height
    if (pdf) {
      domtoimage.toPng(input)
        .then(imgData => {
          pdf.addImage(imgData, 'PNG', 0, 0, width, height)
          pdf.save('ticket.pdf')
        })
    }
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />
      ))}
      <TicketContainer ref={printRef} id='doc'>
        <HeroContainer bgimage={theme.images?.general?.ticketHero}>
          <HeroInnerContainer>
            <TopContainer>
              <img alt='Logotype' width='170px' height='45px' src={theme?.images?.logos?.logotype} loading='lazy' />
              <OrderBillInfo>
                <div>
                  <span>{t('TOTAL', 'Total')}</span>
                  <strong>{parsePrice(order?.summary?.total)}</strong>
                </div>
                <div>
                  {order?.delivery_datetime_utc ? parseDate(order?.delivery_datetime_utc) : parseDate(order?.delivery_datetime, { utc: false })}
                </div>
              </OrderBillInfo>
            </TopContainer>
            <TitleConatiner>
              <h1>{t('THANKS_ORDER', 'Thanks for your order')}</h1>
              <h1>{user?.name} {user?.lastname} </h1>
            </TitleConatiner>
            <BusinessInfo>
              {order?.business?.name} ({order?.business?.address})
            </BusinessInfo>
          </HeroInnerContainer>
        </HeroContainer>
        <TicketContent>
          {order.products.map(product => (
            <ProductItemAccordion
              isOrdersView
              key={product.id}
              product={product}
            />
          ))}
          <OrderBill
            isTicket
            summary={order?.summary}
          />
        </TicketContent>
      </TicketContainer>
      <ExportMethodsContainer>
        <MethodWrapper>
          <span onClick={() => handlePrint()}>{t('PRINT', 'Print')}</span>
        </MethodWrapper>
        <MethodWrapper>
          <span onClick={() => savePDF()}>{t('DOWNLOAD_PDF', 'Download pdf')}</span>
        </MethodWrapper>
      </ExportMethodsContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />
      ))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
    </>
  )
}
