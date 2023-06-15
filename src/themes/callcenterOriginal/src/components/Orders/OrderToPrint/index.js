import React, { forwardRef } from 'react'
import { useLanguage, useSession, useUtils } from 'ordering-components'
import EnDotSingle from '@meronex/icons/en/EnDotSingle'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import BisBusiness from '@meronex/icons/bi/BisBusiness'
import { OrderBill } from '../OrderBill'
import { getCurrenySymbol } from '../../../../../../utils'

import {
  OrderStatus,
  OrderStatusSelectorWrapper,
  PlaceSpotContainer,
  StatusBarContainer,
  StatusBar,
  AdvancedLogistic,
  OrderProducts
} from '../OrderDetails/styles'

import {
  BusinessInfo,
  PhotoWrapper,
  Photo,
  InfoContent,
  CutsomerDetail,
  CustomerInfoTable,
  CustomerInfo,
  DriverInfoContainer,
  DriverInfo
} from '../OrderContactInformation/styles'

import {
  ProductInfo,
  WrapperProductImage,
  ProductQuantity,
  ProductImage,
  ContentInfo,
  AccordionSection,
  AccordionContent,
  ProductOptionsList,
  ProductComment
} from '../ProductItemAccordion/styles'

import {
  PrintContainer
} from './styles'

export const OrderToPrint = forwardRef((props, ref) => {
  const {
    order,
    placeSpotEnabled,
    getOrderStatus,
    getLogisticTag,
    getPriorityTag
  } = props

  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const [{ parseDate, getOrderState, optimizeImage, parsePrice }] = useUtils()

  const walletName = {
    cash: {
      name: t('CASH_WALLET', 'Cash Wallet')
    },
    credit_point: {
      name: t('POINTS_WALLET', 'Points Wallet')
    }
  }
  const getOrderType = (value) => {
    const statuses = [
      { value: 1, content: t('DELIVERY', 'Delivery') },
      { value: 2, content: t('PICKUP', 'Pickup') },
      { value: 3, content: t('EAT_IN', 'Eat in') },
      { value: 4, content: t('CURBSIDE', 'Curbside') },
      { value: 5, content: t('DRIVE_THRU', 'Drive thru') }
    ]

    const objectStatus = statuses.find(status => status.value === value)
    if (objectStatus) return objectStatus?.content
    else return value
  }

  const getFormattedSubOptionName = ({ quantity, name, position, price }) => {
    if (name !== 'No') {
      const pos = position ? `(${position})` : ''
      return price > 0 ? `${name} ${pos} ${parsePrice(quantity * price, { currency: getCurrenySymbol(order?.currency) })}` : `${name} ${pos}`
    } else {
      return 'No'
    }
  }

  return (
    <PrintContainer ref={ref}>
      <h1>{t('INVOICE_ORDER_NO', 'Order No')} {order?.id}</h1>
      <p>
        {order?.payment_events?.length > 0 ? (
          order?.payment_events?.map((event, i) => (
            <React.Fragment key={i}>
              <span>
                {event?.wallet_event
                  ? walletName[event?.wallet_event?.wallet?.type]?.name
                  : t(event?.paymethod?.gateway?.toUpperCase(), event?.paymethod?.name)}
              </span>
              <EnDotSingle />
            </React.Fragment>
          ))
        ) : (
          <>
            <span>{t(order?.paymethod?.gateway?.toUpperCase(), order?.paymethod?.name)}</span>
            <EnDotSingle />
          </>
        )}
        <span>{getOrderType(order?.delivery_type)}</span>
      </p>

      <OrderStatus>
        <div>
          <h2>{t('ORDER_STATUS_TEXT', 'Order status')}</h2>
          <p>
            {order?.delivery_datetime_utc
              ? parseDate(order?.delivery_datetime_utc)
              : parseDate(order?.delivery_datetime, { utc: false })}
          </p>
        </div>
        <OrderStatusSelectorWrapper>
          <span>{getOrderState(order?.status)}</span>
        </OrderStatusSelectorWrapper>
      </OrderStatus>
      {order?.place && placeSpotEnabled.includes(order?.delivery_type) && (
        <PlaceSpotContainer>
          <p>
            {t('SPOT', 'Spot')}: {order?.place?.name}
          </p>
        </PlaceSpotContainer>
      )}
      <StatusBarContainer>
        <StatusBar percentage={getOrderStatus(order?.status)?.percentage} />
      </StatusBarContainer>
      <AdvancedLogistic>
        <div>
          <p>{t('LOGISTIC', 'Logistic')}</p>
          <p>{getLogisticTag(order?.logistic_status)}</p>
        </div>
        <div>
          <p>{t('ATTEMPTS', 'Attempts')}</p>
          <p>{order?.logistic_attemps}</p>
        </div>
        <div>
          <p>{t('PRIORITY', 'Priority')}</p>
          <p>{getPriorityTag(order?.priority)}</p>
        </div>
      </AdvancedLogistic>
      {user?.level !== 2 && (
        <>
          <BusinessInfo>
            <PhotoWrapper>
              {order?.business?.logo ? (
                <Photo bgimage={optimizeImage(order?.business?.logo, 'h_50,c_limit')} />
              ) : (
                <BisBusiness />
              )}
            </PhotoWrapper>
            <InfoContent>
              <div>
                <p className='name'>{order?.business?.name}</p>
              </div>
              <p>{order?.business?.phone}</p>
            </InfoContent>
          </BusinessInfo>
          <CutsomerDetail>
            <CustomerInfoTable>
              <tbody>
                {order?.business?.email && (
                  <tr>
                    <td>{t('EMAIL', 'Email')}</td>
                    <td>
                      <a href={`mailto: ${order?.business?.email}`}>{order?.business?.email}</a>
                    </td>
                  </tr>
                )}
                {order?.business?.address && (
                  <tr>
                    <td>{t('CHECKOUT_FULL_ADDRESS', 'Full address')}</td>
                    <td>
                      <a href={`http://maps.google.com/?q=${order?.business?.address}`} rel='noopener noreferrer' target='_blank'>{order?.business?.address}</a>
                    </td>
                  </tr>
                )}
                {order?.business?.address_notes && (
                  <tr>
                    <td>{t('NOTES', 'Notes')}</td>
                    <td>{order?.business?.address_notes}</td>
                  </tr>
                )}
                {order?.business?.zipcode && (
                  <tr>
                    <td>{t('ZIPCODE', 'Zipcode')}</td>
                    <td>{order?.business?.zipcode}</td>
                  </tr>
                )}
              </tbody>
            </CustomerInfoTable>
          </CutsomerDetail>
          <CustomerInfo>
            <PhotoWrapper>
              {order?.customer?.photo ? (
                <Photo bgimage={optimizeImage(order?.customer?.photo, 'h_50,c_limit')} />
              ) : (
                <FaUserAlt />
              )}
            </PhotoWrapper>
            <InfoContent>
              <div>
                <p className='name'>{order?.customer?.name} {order?.customer?.middle_name} {order?.customer?.lastname} {order?.customer?.second_lastname}</p>
              </div>
            </InfoContent>
          </CustomerInfo>
          <CutsomerDetail>
            <CustomerInfoTable>
              <tbody>
                {order?.customer?.cellphone && (
                  <tr>
                    <td>{t('CELLPHONE', 'Phone / Mobile')}</td>
                    <td>
                      <a href={`tel:${order?.customer?.cellphone}`}>
                        {order?.customer?.cellphone}
                      </a>
                    </td>
                  </tr>
                )}
                {order?.customer?.email && (
                  <tr>
                    <td>{t('EMAIL', 'Email')}</td>
                    <td>
                      <a href={`mailto: ${order?.customer?.email}`}>{order?.customer?.email}</a>
                    </td>
                  </tr>
                )}
                {!!order?.customer?.address && (
                  <tr>
                    <td>{t('CHECKOUT_FULL_ADDRESS', 'Full address')}</td>
                    <td>
                      <a href={`http://maps.google.com/?q=${order?.customer?.address}`} rel='noopener noreferrer' target='_blank'>{order?.customer?.address}</a>
                    </td>
                  </tr>
                )}
                {!!order?.customer?.internal_number && (
                  <tr>
                    <td>{t('INTERNAL_NUMBER', 'Internal number')}</td>
                    <td>{order?.customer?.internal_number}</td>
                  </tr>
                )}
                {!!order?.customer?.address_notes && (
                  <tr>
                    <td>{t('NOTES', 'Notes')}</td>
                    <td>{order?.customer?.address_notes}</td>
                  </tr>
                )}
                {!!order?.customer?.zipcode && (
                  <tr>
                    <td>{t('ZIPCODE', 'Zipcode')}</td>
                    <td>{order?.customer?.zipcode}</td>
                  </tr>
                )}
              </tbody>
            </CustomerInfoTable>
          </CutsomerDetail>
          {order?.delivery_type === 1 && (
            <>
              <DriverInfoContainer>
                <DriverInfo>
                  <PhotoWrapper>
                    {order?.driver?.photo ? (
                      <Photo bgimage={optimizeImage(order?.driver?.photo, 'h_50,c_limit')} />
                    ) : (
                      <FaUserAlt />
                    )}
                  </PhotoWrapper>
                  {order.driver_id ? (
                    <InfoContent>
                      <div>
                        <p>{order?.driver?.name} {order?.driver?.middle_name} {order?.driver?.lastname} {order?.driver?.second_lastname}</p>
                      </div>
                      <p>{t('DRIVER', 'Driver')}</p>
                    </InfoContent>
                  ) : (
                    <InfoContent>
                      <div>
                        <p>{t('NO_DRIVER', 'No driver')}</p>
                      </div>
                    </InfoContent>
                  )}
                </DriverInfo>
              </DriverInfoContainer>
            </>
          )}
        </>
      )}
      <OrderProducts>
        <h2>{t('EXPORT_SUMMARY', 'Summary')}</h2>
        {order?.products?.length && order?.products.map((product) => (
          <AccordionSection
            key={product.id}
          >
            <ProductInfo>
              {product?.images && (
                <WrapperProductImage>
                  <ProductImage bgimage={optimizeImage(product?.images, 'h_100,c_limit')} />
                </WrapperProductImage>
              )}
              <ProductQuantity>
                {product?.quantity}
              </ProductQuantity>
              <ContentInfo>
                <h3>{product.name}</h3>
              </ContentInfo>
            </ProductInfo>
            <AccordionContent>
              {product.ingredients?.length > 0 && product.ingredients.some(ingredient => !ingredient.selected) && (
                <ProductOptionsList>
                  <p>{t('INGREDIENTS', 'Ingredients')}</p>
                  {product.ingredients.map((ingredient) => !ingredient.selected && (
                    <li className='ingredient' key={ingredient.id}>
                      <span>{t('NO', 'No')} {ingredient.name}</span>
                    </li>
                  ))}
                </ProductOptionsList>
              )}
              {product.options?.length > 0 && (
                <ProductOptionsList>
                  {Array.isArray(product.options) && product.options.map((option, i) => (
                    <li key={i}>
                      <p>{option.name}</p>
                      <ProductOptionsList className='suboption'>
                        {option.suboptions.map(suboption => (
                          <React.Fragment key={suboption.id}>
                            <li>
                              <span>
                                {getFormattedSubOptionName({
                                  quantity: suboption.quantity,
                                  name: suboption.name,
                                  position: (suboption.position !== 'whole') ? t(suboption.position.toUpperCase(), suboption.position) : '',
                                  price: suboption.price
                                })}
                              </span>
                            </li>
                          </React.Fragment>
                        ))}
                      </ProductOptionsList>
                    </li>
                  ))}
                </ProductOptionsList>
              )}
              {product.comment && (
                <ProductComment>
                  <p>{t('COMMENT', 'Comment')}</p>
                  <h3>{product.comment}</h3>
                </ProductComment>
              )}
            </AccordionContent>
          </AccordionSection>
        ))}
      </OrderProducts>
      <OrderBill
        order={order}
      />
    </PrintContainer>
  )
})
