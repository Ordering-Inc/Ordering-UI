import React from 'react'
import { useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, OrderDetails as OrderDetailsController } from 'ordering-components'
import { FiPhone } from 'react-icons/fi'
import { HiOutlineChat } from 'react-icons/hi'
import { BiCaretDown, BiCaretUp } from 'react-icons/bi'

import { Button } from '../../styles/Buttons'
import logoHeader from '../../../template/assets/images/logo-header.svg'

import { ProductItemAccordion } from '../ProductItemAccordion'

import {
  Container,
  WrapperContainer,
  Header,
  HeaderInfo,
  HeaderLogo,
  HeaderText,
  Content,
  OrderBusiness,
  BusinessWrapper,
  LogoWrapper,
  BusinessLogo,
  BusinessInfo,
  ActionsBlock,
  OrderInfo,
  OrderData,
  StatusBar,
  OrderStatus,
  StatusImage,
  SectionTitle,
  OrderCustomer,
  PhotoBlock,
  InfoBlock,
  OrderDriver,
  WrapperDriver,
  OrderProducts,
  OrderBill,
  ReviewsAction,
  FootActions,
  SkeletonBlockWrapp,
  SkeletonBlock
} from './styles'

const OrderDetailsUI = (props) => {
  const {
    formatPrice
  } = props
  const [, t] = useLanguage()

  const { order, loading, error } = props.order

  const getOrderStatus = (status) => {
    const orderStatus = [
      { key: 0, value: 'Pending', slug: 'PENDING', percentage: 25 },
      { key: 1, value: 'Completed', slug: 'COMPLETED', percentage: 100 },
      { key: 2, value: 'Rejected', slug: 'REJECTED', percentage: 0 },
      { key: 3, value: 'Driver in business', slug: 'DRIVER_IN_BUSINESS', percentage: 60 },
      { key: 4, value: 'Preparation Completed', slug: 'PREPARATION_COMPLETED', percentage: 70 },
      { key: 5, value: 'Rejected by business', slug: 'REJECTED_BY_BUSINESS', percentage: 0 },
      { key: 6, value: 'Canceled by Driver', slug: 'CANCELED_BY_DRIVER', percentage: 0 },
      { key: 7, value: 'Accepted by business', slug: 'ACCEPTED_BY_BUSINESS', percentage: 35 },
      { key: 8, value: 'Accepted by driver', slug: 'ACCEPTED_BY_DRIVER', percentage: 45 },
      { key: 9, value: 'Pick up completed by driver', slug: 'PICK_UP_COMPLETED_BY_DRIVER', percentage: 80 },
      { key: 10, value: 'Pick up Failed by driver', slug: 'PICK_UP_FAILED_BY_DRIVER', percentage: 0 },
      { key: 11, value: 'Delivery completed by driver', slug: 'DELIVERY_COMPLETED_BY_DRIVER', percentage: 100 },
      { key: 12, value: 'Delivery Failed by driver', slug: 'DELIVERY_FAILED_BY_DRIVER', percentage: 0 }
    ]

    const objectStatus = orderStatus.find((o) => o.key === status)

    return objectStatus && objectStatus
  }

  const getImage = (slug) => {
    try {
      return slug && require(`../../../template/assets/order/${slug}.svg`)
    } catch (error) {
      return 'https://picsum.photos/75'
    }
  }

  return (
    <Container>
      {order && Object.keys(order).length > 0 && (
        <WrapperContainer>
          <Header>
            <HeaderInfo>
              <HeaderLogo bgimage={logoHeader} />
              <HeaderText column>
                <h1>{t('ORDER_MESSAGE', 'Your order has been received')}</h1>
                <p>{t('ORDER_MESSAGE_TEXT', 'Once business accepts your order, we will send you and email, thank you!')}</p>
              </HeaderText>
              <HeaderText>
                <h1>{t('ORDER_TOTAL', 'Total')}</h1>
                <h1>{formatPrice(order?.total || 0)}</h1>
              </HeaderText>
            </HeaderInfo>
          </Header>
          <Content>
            <OrderBusiness>
              <BusinessWrapper>
                <LogoWrapper>
                  <BusinessLogo bgimage={order?.business?.logo} />
                </LogoWrapper>
                <BusinessInfo>
                  <h1>{order?.business?.name}</h1>
                  <p>{order?.business?.address}</p>
                </BusinessInfo>
              </BusinessWrapper>
              <ActionsBlock>
                <span>
                  <FiPhone />
                </span>
                <span>
                  <HiOutlineChat />
                </span>
                <span>
                  <BiCaretDown />
                </span>
              </ActionsBlock>
            </OrderBusiness>

            <OrderInfo>
              <OrderData>
                <h1>Order #{order?.id}</h1>
                <p>Date and time for your order</p>
                <p className='date'>{order?.delivery_datetime}</p>
                <StatusBar percentage={getOrderStatus(order?.status)?.percentage} />
              </OrderData>
              <OrderStatus>
                <span>{getOrderStatus(order?.status)?.value}</span>
                <StatusImage>
                  <img src={getImage(getOrderStatus(order?.status)?.slug)} alt='' />
                </StatusImage>
              </OrderStatus>
            </OrderInfo>

            <SectionTitle>
              Customer
            </SectionTitle>
            <OrderCustomer>
              {order?.customer?.photo && (
                <div>
                  <PhotoBlock src={order?.customer?.photo} />
                </div>
              )}
              <InfoBlock>
                <h1>{order?.customer?.name} {order?.customer?.lastname}</h1>
                <span>{order?.customer?.address}</span>
              </InfoBlock>
            </OrderCustomer>

            {order?.driver && (
              <>
                <SectionTitle>
                  Your Driver
                </SectionTitle>
                <OrderDriver>
                  <WrapperDriver>
                    {!order?.customer?.photo && (
                      <div>
                        <PhotoBlock src={order?.driver?.photo} />
                      </div>
                    )}
                    <InfoBlock>
                      <h1>{order?.driver?.name} {order?.driver?.lastname}</h1>
                      <span>Driver</span>
                    </InfoBlock>
                  </WrapperDriver>
                  <ActionsBlock>
                    <span>
                      <FiPhone />
                    </span>
                    <span>
                      <HiOutlineChat />
                    </span>
                  </ActionsBlock>
                </OrderDriver>
              </>
            )}

            <SectionTitle>
              Your Order
            </SectionTitle>
            <OrderProducts>
              {order?.products?.length && order?.products.map(product => (
                <ProductItemAccordion
                  key={product.id}
                  isProduct
                  product={product}
                  formatPrice={formatPrice}
                />
              ))}
            </OrderProducts>

            <OrderBill>
              <table>
                <tbody>
                  <tr>
                    <td>Subtotal</td>
                    <td>{formatPrice(order?.subtotal)}</td>
                  </tr>
                  <tr>
                    <td>Tax (10%)</td>
                    <td>{formatPrice(order?.totalTax)}</td>
                  </tr>
                  <tr>
                    <td>Delivery Fee</td>
                    <td>{formatPrice(order?.deliveryFee)}</td>
                  </tr>
                  <tr>
                    <td>Driver tips (0%)</td>
                    <td>{formatPrice(order?.driver_tip)}</td>
                  </tr>
                  <tr>
                    <td>Service Fee(9%)</td>
                    <td>{formatPrice(order?.serviceFee || 0)}</td>
                  </tr>
                  {order?.discount > 0 && (
                    <tr>
                      <td>Discount</td>
                      <td>{formatPrice(order?.discount)}</td>
                    </tr>
                  )}
                </tbody>
              </table>
              <table className='total'>
                <tbody>
                  <tr>
                    <td>Total</td>
                    <td>{formatPrice(order?.total)}</td>
                  </tr>
                </tbody>
              </table>
            </OrderBill>

            {(order?.status === 1 || order?.status === 11) && (
              <ReviewsAction>
                <Button color='primary'>
                  Review your Order
                </Button>
              </ReviewsAction>
            )}

            <FootActions>
              <a>
                Support
                <BiCaretUp />
              </a>
              <a>
                My Orders
                <BiCaretUp />
              </a>
            </FootActions>
          </Content>
        </WrapperContainer>
      )}

      {loading && (
        <WrapperContainer>
          <SkeletonBlock width={100}>
            <Skeleton height={250} />
          </SkeletonBlock>
          <SkeletonBlockWrapp>
            <SkeletonBlock width={80}>
              <Skeleton height={100} />
              <Skeleton height={100} />
              <Skeleton height={100} />
              <Skeleton height={100} />
              <Skeleton height={200} />
            </SkeletonBlock>
          </SkeletonBlockWrapp>
        </WrapperContainer>
      )}

      {error && error.length > 0 &&
        error.map((e, i) => (
          <p key={i}>ERROR: [{e}]</p>
        ))}

      {!loading && Object.keys(order).length === 0 && (
        <p>Not Found elements</p>
      )}
    </Container>
  )
}

export const OrderDetails = (props) => {
  const { orderId } = useParams()
  const orderDetailsProps = {
    ...props,
    UIComponent: OrderDetailsUI,
    orderId
  }

  return (
    <OrderDetailsController {...orderDetailsProps} />
  )
}
