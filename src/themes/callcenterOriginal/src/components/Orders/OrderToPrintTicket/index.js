import React, { forwardRef } from 'react'
import { verifyDecimals } from '../../../../../../utils'
import { useUtils, useLanguage, useConfig } from 'ordering-components'
import { PrintContainer, PrintTextContainer, ProductComments, ProdcutCommentsContainer, Products, InfoContainer, InsideInfo2, InsideInfo, PrintProductsContainer, PrintProducts } from './styles'

export const OrderToPrintTicket = forwardRef((props, ref) => {
  const {
    order,
    getOrderStatus
  } = props

  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const [{ parseDate, parsePrice, parseNumber }] = useUtils()

  const deliveryStatus = {
    1: t('DELIVERY', 'Delivery'),
    2: t('PICK_UP', 'Pick up'),
    3: t('EAT_IN', 'Eat In'),
    4: t('CURBSIDE', 'Curbside'),
    5: t('DRIVER_THRU', 'Driver thru')
  }

  const getProductPrice = (product) => {
    let subOptionPrice = 0
    if (Array.isArray(product.options)) {
      if (product.options?.length > 0) {
        for (const option of product.options) {
          for (const suboption of option.suboptions) {
            subOptionPrice += suboption.quantity * suboption.price
          }
        }
      }
    }

    const price = product.quantity * (product.price + subOptionPrice)
    return parseFloat(price.toFixed(2))
  }

  const getFormattedSubOptionName = ({ quantity, name, position, price }) => {
    if (name !== 'No') {
      const pos = position && position !== 'whole' ? `(${t(position.toUpperCase(), position)})` : ''
      return pos
        ? `${quantity} x ${name} ${pos} + ${parsePrice(price)}`
        : `${quantity} x ${name} + ${parsePrice(price)}`
    } else {
      return 'No'
    }
  }

  const getSuboptions = (suboptions) => {
    const array = []
    suboptions?.length > 0 &&
      suboptions?.map((suboption) => {
        const string = `${getFormattedSubOptionName(suboption)}`
        array.push(string)
      })

    return array.join('')
  }

  const getOptions = (options, productComment = '') => {
    const array = []

    options?.length &&
    options?.map((option) => {
      const string =
        `${option.name} ${getSuboptions(option.suboptions)}`
      array.push(string)
    })

    if (productComment) {
      array.push(`${t('COMMENT', 'Comment')}${productComment}`)
    }

    return array
  }

  const percentTip =
  parseInt(configs?.driver_tip_type?.value, 10) === 2 &&
  !parseInt(configs?.driver_tip_use_custom?.value, 10) &&
  verifyDecimals(order?.summary?.driver_tip, parseNumber)

  const customerName = `${order?.customer?.name ?? ''} ${order?.customer?.middle_name ?? ''} ${order?.customer?.lastname ?? ''} ${order?.customer?.second_lastname ?? ''}`?.replace('  ', ' ')?.trim() ?? ''

  return (
    <PrintContainer ref={ref}>
      <h1>{t('ORDER_NO', 'Order No.')} {order.id}</h1>
      <PrintTextContainer>
        {getOrderStatus(order?.status)?.value}
        <br />
        {t('DELIVERY_TYPE', 'Delivery Type')}: {deliveryStatus[order?.delivery_type]}
        <br />
        {t('DELIVERY_DATE', 'Delivery Date')}: {order?.delivery_datetime_utc
          ? parseDate(order?.delivery_datetime_utc)
          : parseDate(order?.delivery_datetime, { utc: false })}
        <br />
        {t('PAYMENT_METHOD')}: {order?.paymethod?.name}
      </PrintTextContainer>

      <h1>{t('CUSTOMER_DETAILS', 'Customer details')}</h1>
      <PrintTextContainer>
        {t('FULL_NAME', 'Full Name')}: {customerName}
        <br />
        {t('EMAIL', 'Email')}: {order?.customer?.email}
        <br />
        {t('MOBILE_PHONE', 'Mobile Phone')}: {order?.customer?.cellphone}
        <br />
        {!!order?.customer?.phone && (
          `${t('MOBILE_PHONE', 'Mobile Phone')}: ${order?.customer?.phone}`)}
        {t('FULL_ADDRESS', 'Full Addres')}: {order?.customer?.address}
        {!!order?.customer?.internal_number && (
          `${t('INTERNAL_NUMBER', 'Internal Number')}: ${order?.customer?.internal_number}`)}
        <br />
        {!!order?.customer?.zipcode && (
        `${t('ZIPCODE', 'Zipcode')}: ${order?.customer.zipcode}`
        )}
      </PrintTextContainer>

      <h1>{t('BUSINESS_DETAILS', 'Business details')}</h1>
      <PrintTextContainer>
        {order?.business?.name}
        <br />
        {order?.business?.email}
        <br />
        {!!order?.business?.cellphone && (
          <>
            {`${t('BUSINESS_PHONE', 'Business cellphone')}: ${order?.business?.cellphone}`}
            <br />
          </>
        )}
        {!!order?.business?.phone && (
          <>
            {`${t('BUSINESS_PHONE', 'Business Phone')}: ${order?.business?.phone}`}
            <br />
          </>
        )}
        {t('ADDRESS', 'Address')}: {order?.business?.address}
        <br />
        {!!order?.business?.address_notes && (
          <>
            {`${t('SPECIAL_ADDRESS', 'Special Address')}: ${order?.business?.address_notes}`}
            <br />
          </>
        )}
      </PrintTextContainer>
      <h1>{t('ORDER_DETAILS', 'Order Details')}</h1>
      <br />
      <PrintProductsContainer>
        {order?.products?.length &&
          order?.products?.map((product, i) =>
            <PrintProducts key={i}>
              <Products>
                <InsideInfo>
                  {`${product?.quantity}x ${product?.name}`}
                </InsideInfo>
                <InsideInfo2>
                  {parsePrice(product?.total ?? getProductPrice(product))}
                </InsideInfo2>
              </Products>
              <ProdcutCommentsContainer>
                {getOptions(product?.options, product?.comment)?.map((option, i) => (
                  <ProductComments key={i}>
                    {option}
                  </ProductComments>
                ))}
              </ProdcutCommentsContainer>
            </PrintProducts>
          )}
      </PrintProductsContainer>
      <br />
      <InfoContainer>
        <InsideInfo>
          {t('SUBTOTAL', 'Subtotal')}
        </InsideInfo>
        <InsideInfo2>
          {parsePrice(
          order?.tax_type === 1
            ? order?.summary?.subtotal + order?.summary?.tax ?? 0
            : order?.summary?.subtotal ?? 0
          )}
        </InsideInfo2>
      </InfoContainer>
      <InfoContainer>
        {order?.summary?.discount > 0
          ? order?.offer_type === 1
            ? <InsideInfo>{t('DISCOUNT', 'Discount')} ({verifyDecimals(order?.offer_rate, parsePrice)}%)</InsideInfo>
            : <InsideInfo> {t('DISCOUNT', 'Discount')}</InsideInfo>
          : ''}
        {order?.summary?.discount > 0
          ? <InsideInfo2>- {parsePrice(order?.summary?.discount)}</InsideInfo2>
          : ''}
      </InfoContainer>

      {order?.tax_type !== 1 && (
        <>
          <InfoContainer>
            <InsideInfo>
              {t('TAX', 'Tax')}
              {' '}
              {`(${verifyDecimals(order?.summary?.tax_rate, parseNumber)}%)`}
            </InsideInfo>
            <InsideInfo2>
              {parsePrice(order?.summary?.tax ?? 0)}
            </InsideInfo2>
          </InfoContainer>
        </>
      )}

      {order?.summary?.delivery_price > 0 && (
        <InfoContainer>
          <InsideInfo>
            {t('DELIVERY_FEE', 'Delivery Fee')}
          </InsideInfo>
          <InsideInfo2>
            {parsePrice(order?.summary?.delivery_price)}
          </InsideInfo2>
        </InfoContainer>
      )}

      <InfoContainer>
        <InsideInfo>
          {t('DRIVER_TIP', 'Driver tip')}
          {percentTip ? `(${percentTip}%)` : ''}
        </InsideInfo>
        <InsideInfo2>
          {parsePrice(order?.summary?.driver_tip ?? 0)}
        </InsideInfo2>
      </InfoContainer>

      <InfoContainer>
        <InsideInfo>
          {t('SERVICE_FEE', 'Service Fee')}
          ({verifyDecimals(order?.summary?.service_fee, parseNumber)}%)
        </InsideInfo>
        <InsideInfo2>
          {parsePrice(order?.summary?.service_fee ?? 0)}
        </InsideInfo2>
      </InfoContainer>

      <InfoContainer>
        <InsideInfo>
          {t('TOTAL', 'Total')}
        </InsideInfo>
        <InsideInfo2>
          {parsePrice(order?.summary?.total ?? 0)}
        </InsideInfo2>
      </InfoContainer>
    </PrintContainer>
  )
})
