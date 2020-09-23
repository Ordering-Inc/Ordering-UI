import React from 'react'
import { useLanguage } from 'ordering-components'
import { FiPhone } from 'react-icons/fi'
import { HiOutlineChat } from 'react-icons/hi'
import { BiCaretDown, BiCaretUp } from 'react-icons/bi'
import { OrderDetails as OrderDetailsController } from '../OrderDetailsComponent' // refactor this

import { Button } from '../../styles/Buttons'
import logoHeader from '../../../template/assets/images/logo-header.svg'

import {
  Container,
  Header,
  HeaderInfo,
  HeaderLogo,
  HeaderText,
  Content,
  OrderBusiness,
  BusinessWrapper,
  BusinessLogoWrapper,
  BusinessLogo,
  BusinessInfo,
  BusinessActions,
  OrderInfo,
  OrderData,
  StatusBar,
  OrderStatus,
  StatusImage,
  CustomerTitle,
  OrderCustomer,
  WrapperCustomerPhoto,
  CustomerPhoto,
  CustomerInfo,
  DriverTitle,
  OrderDriver,
  WrapperDriver,
  WrapperDriverPhoto,
  DriverPhoto,
  DriverInfo,
  DriverActions,
  OrderBillTitle,
  OrderProducts,
  ProductItem,
  WrapperProductImage,
  ProductImage,
  ProductInfo,
  OrderBill,
  ReviewsAction
} from './styles'

const OrderDetailsUI = (props) => {
  const {
    order,
    formatPrice
  } = props
  const [, t] = useLanguage()

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

  return (
    <Container>
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
            <BusinessLogoWrapper>
              <BusinessLogo bgimage={order?.business?.logo} />
            </BusinessLogoWrapper>
            <BusinessInfo>
              <h1>{order?.business?.name}</h1>
              <p>{order?.business?.address}</p>
            </BusinessInfo>
          </BusinessWrapper>
          <BusinessActions>
            <span>
              <FiPhone />
            </span>
            <span>
              <HiOutlineChat />
            </span>
            <span>
              <BiCaretDown />
            </span>
          </BusinessActions>
        </OrderBusiness>

        <OrderInfo>
          <OrderData>
            <h1>Order #{order?.id}</h1>
            <p>Date and time for your order</p> {/* use useLanguage context */}
            <p className='date'>{order?.delivery_datetime}</p>
            <StatusBar percentage={getOrderStatus(order?.status).percentage} />
          </OrderData>
          <OrderStatus>
            <span>{getOrderStatus(order?.status).value}</span>
            <StatusImage>
              <img src={require(`../../../template/assets/order/${getOrderStatus(order?.status).slug}.svg`)} />
            </StatusImage>
          </OrderStatus>
        </OrderInfo>

        <CustomerTitle>
          Customer
        </CustomerTitle>
        <OrderCustomer>
          {order?.customer?.photo && (
            <WrapperCustomerPhoto>
              <CustomerPhoto bgimage={order?.customer?.photo} />
            </WrapperCustomerPhoto>
          )}
          <CustomerInfo>
            <h1>{order?.customer?.name} {order?.customer?.lastname}</h1>
            <span>{order?.customer?.address}</span>
          </CustomerInfo>
        </OrderCustomer>

        {order?.driver && (
          <>
            <DriverTitle>
              Your Driver
            </DriverTitle>
            <OrderDriver>
              <WrapperDriver>
                {order?.customer?.photo && (
                  <WrapperDriverPhoto>
                    <DriverPhoto bgimage={order?.driver?.photo} />
                  </WrapperDriverPhoto>
                )}
                <DriverInfo>
                  <h1>{order?.driver?.name} {order?.driver?.lastname}</h1>
                  <span>Driver</span>
                </DriverInfo>
              </WrapperDriver>
              <DriverActions>
                <span>
                  <FiPhone />
                </span>
                <span>
                  <HiOutlineChat />
                </span>
              </DriverActions>
            </OrderDriver>
          </>
        )}

        <OrderBillTitle>
          Your Order
        </OrderBillTitle>
        <OrderProducts>
          {order?.products.map(product => (
            <ProductItem key={product.id}>
              <div className='info'>
                <p>{product.quantity}</p>
                <p><BiCaretDown /></p>
                <WrapperProductImage>
                  <ProductImage bgimage={product.images} />
                </WrapperProductImage>
                <ProductInfo>
                  <h1>{product.name}</h1>
                  {product.ingredients.length > 0 && <span>{product.ingredients[0].name}</span>}
                </ProductInfo>
              </div>
              <div className='price'>
                <span>{formatPrice(product.price)}</span>
              </div>
            </ProductItem>
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
                <td>Delivery Fee</td>
                <td>{formatPrice(order?.delivery_zone_price)}</td>
              </tr>
              <tr>
                <td>Tax (2%)</td>
                <td>{formatPrice(order?.tax_total)}</td>
              </tr>
              <tr>
                <td>Driver tip (0%)</td>
                <td>{formatPrice(order?.driver_tip)}</td>
              </tr>
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
      </Content>
    </Container>
  )
}

export const OrderDetails = (props) => {
  const orderDetailsProps = {
    ...props,
    UIComponent: OrderDetailsUI,
    order: {
      app_id: 'orderingweb',
      attachments: [],
      business: {
        address: '300 5th Avenue, New York, NY, USA',
        address_notes: null,
        cellphone: '123123123123',
        city_id: 1,
        email: 'test@ordering.co',
        id: 51,
        location: {
          lat: 40.74677350000001,
          lng: -73.98595739999996,
          zipcode: -1,
          zoom: 15
        },
        logo: 'https://res.cloudinary.com/ordering2/image/upload/v1562277711/bk6kvzrnfkvqgav9qi7j.png',
        name: 'McBonalds',
        order_id: 51,
        phone: '123123',
        zipcode: null
      },
      business_id: 41,
      cash: null,
      comment: null,
      created_at: '2020-09-03 13:52:27',
      customer: {
        address: '500 5th Ave, New York, NY 10110, USA',
        address_notes: 'Special address notes here',
        cellphone: '33183467364',
        country_phone_code: null,
        dropdown_option: null,
        dropdown_option_id: null,
        email: 'superadmin@ordering.co',
        id: 51,
        internal_number: null,
        lastname: 'Admin',
        location: {
          lat: 40.7539143,
          lng: -73.9810162
        },
        map_data: null,
        middle_name: null,
        name: 'Demo',
        order_id: 51,
        phone: null,
        photo: null,
        second_lastname: null,
        tag: 'other',
        zipcode: '10001'
      },
      customer_id: 1,
      delivery_datetime: '2020-09-03 09:52:00',
      delivery_type: 1,
      delivery_zone_id: 5,
      delivery_zone_price: 1,
      discount: 0,
      driver: null,
      driver_id: null,
      driver_tip: 0,
      driver_tip_total: 0,
      history: [{
        created_at: '2020-09-03 09:52:00',
        data: null,
        id: 148,
        order_id: 51,
        type: 1,
        updated_at: '2020-09-03 13:52:27'
      }],
      id: 51,
      language: {
        code: 'en',
        default: true,
        deleted_at: null,
        enabled: true,
        id: 1,
        name: 'English',
        rtl: '0'
      },
      language_id: 1,
      metafields: [],
      offer: 0,
      offer_id: null,
      pay_data: null,
      paymethod: {
        created_at: '2018-10-06 18:18:25',
        deleted_at: null,
        enabled: true,
        gateway: 'cash',
        id: 1,
        name: 'Cash',
        updated_at: '2018-10-06 18:18:25'
      },
      paymethod_id: 1,
      products: [{
        category_id: 252,
        comment: null,
        featured: false,
        id: 74,
        images: 'https://s3.amazonaws.com/ordering-images2/res/ordering/image/upload/eapprhj4mdy8aefualfj/1534195475.jpg',
        in_offer: false,
        ingredients: [],
        name: 'Hamburger',
        object: {},
        offer_price: null,
        options: [],
        order_id: 51,
        price: 7,
        product_id: 1299,
        quantity: 1,
        upselling: false
      }],
      ref_business: {
        about: '',
        address: '300 5th Avenue, New York, NY, USA',
        address_notes: null,
        alcohol: false,
        always_deliver: false,
        cellphone: '123123123123',
        city_id: 1,
        currency: 'USD',
        delivery_price: 0,
        delivery_time: '0:0',
        description: '',
        email: 'test@ordering.co',
        enabled: true,
        featured: false,
        fixed_usage_fee: 1,
        food: true,
        groceries: false,
        header: 'https://res.cloudinary.com/ordering2/image/upload/v1562277717/tiznbig1lvmegwemunpn.png',
        id: 41,
        laundry: false,
        location: {
          lat: 40.74677350000001,
          lng: -73.98595739999996,
          zipcode: -1,
          zoom: 15
        },
        logo: 'https://res.cloudinary.com/ordering2/image/upload/v1562277711/bk6kvzrnfkvqgav9qi7j.png',
        minimum: 0,
        name: 'McBonalds',
        owner_id: 3,
        owners: [{
          address: '5th avenue',
          address_notes: null,
          available: false,
          birthdate: null,
          busy: false,
          cellphone: '',
          city_id: 1,
          country_phone_code: null,
          created_at: '2018-10-06 18:18:24',
          deleted_at: null,
          dropdown_option_id: null,
          email: 'business@ordering.co',
          enabled: true,
          id: 3,
          internal_number: null,
          language_id: 1,
          lastname: '',
          level: 2,
          location: {
            lat: 40.774734,
            lng: -73.9653844,
            zipcode: -1,
            zoom: 15
          },
          login_type: 0,
          map_data: null,
          middle_name: null,
          name: 'Business',
          phone: '',
          photo: null,
          pivot: {
            business_id: 41,
            owner_id: 3
          },
          push_notifications: true,
          second_lastname: null,
          social_id: null,
          updated_at: '2018-10-06 18:18:25',
          zipcode: ''
        }],
        percentage_usage_fee: 10,
        phone: '123123',
        pickup_time: '0:0',
        printer_id: null,
        schedule: [],
        service_fee: 9,
        slug: 'mcbonalds',
        tax: 10,
        tax_type: 2,
        timezone: 'America/New_York',
        use_printer: false,
        zipcode: null
      },
      ref_user: {
        address: '500 5th Ave, New York, NY 10110, USA',
        address_notes: 'Special address notes here',
        available: false,
        birthdate: null,
        busy: false,
        cellphone: '33183467364',
        city_id: 1,
        country_phone_code: null,
        created_at: '2018-10-06 18:18:24',
        deleted_at: null,
        dropdown_option_id: 0,
        email: 'superadmin@ordering.co',
        enabled: true,
        id: 1,
        internal_number: null,
        language_id: 1,
        lastname: 'Admin',
        level: 0,
        location: {
          lat: 40.7539143,
          lng: -73.9810162
        },
        login_type: 0,
        map_data: null,
        middle_name: null,
        name: 'Demo',
        phone: '2332223',
        photo: null,
        push_notifications: true,
        second_lastname: null,
        social_id: null,
        updated_at: '2018-10-08 17:01:01',
        zipcode: '10001'
      },
      review: null,
      service_fee: 9,
      service_fee_total: 0.63,
      status: 0,
      subtotal: 7,
      tax: 10,
      tax_total: 0.7,
      tax_type: 2,
      to_print: false,
      total: 9.33,
      updated_at: '2020-09-03 13:52:27'
    }
  }

  return (
    <OrderDetailsController {...orderDetailsProps} />
  )
}
