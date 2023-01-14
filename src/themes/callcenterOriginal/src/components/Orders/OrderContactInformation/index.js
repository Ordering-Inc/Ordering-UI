import React, { useContext, useState } from 'react'
import { useLanguage, useSession, useUtils } from 'ordering-components'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import BisBusiness from '@meronex/icons/bi/BisBusiness'
import { DriverSelector } from '../DriverSelector'
import { IconButton } from '../../../styles'
import { Telephone, ChevronDown } from 'react-bootstrap-icons'
import { Accordion, AccordionContext, useAccordionToggle } from 'react-bootstrap'
import { ReviewCustomer } from '../ReviewCustomer'
import { Modal } from '../../Shared'

import {
  BusinessInfo,
  PhotoWrapper,
  Photo,
  InfoContent,
  CustomerInfo,
  DriverInfoContainer,
  DriverInfo,
  DriverSelectorContainer,
  CutsomerDetail,
  CustomerInfoTable,
  ToggleItemWrapper,
  ReviewButton
} from './styles'

export const OrderContactInformation = (props) => {
  const {
    order,
    isTourOpen,
    setCurrentTourStep,
    handleOpenMessages,
    isServiceOrder
  } = props

  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const [{ optimizeImage }] = useUtils()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentCustomer, setCurrentCustomer] = useState(null)

  const pastOrderStatuses = [1, 2, 5, 6, 10, 11, 12, 15, 16, 17]

  const handleReviewCustomer = (customer) => {
    setCurrentCustomer(customer)
    setIsModalOpen(true)
  }

  const handleCustomerReviewed = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Accordion>
        {user?.level !== 2 && (
          <>
            <ContextAwareToggle eventKey='0'>
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
                    {order?.business?.phone && (
                      <IconButton
                        onClick={() => window.open(`tel:${order.business.phone}`)}
                      >
                        <Telephone />
                      </IconButton>
                    )}
                  </div>
                  <p>{order?.business?.phone}</p>
                </InfoContent>
                <ChevronDown className='down-arrow' />
              </BusinessInfo>
            </ContextAwareToggle>
            <Accordion.Collapse eventKey='0'>
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
            </Accordion.Collapse>
          </>
        )}
        <ContextAwareToggle eventKey='1'>
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
                {order?.customer?.cellphone && (
                  <IconButton
                    onClick={() => window.open(`tel:${order?.customer?.country_phone_code ? '+' + order?.customer?.country_phone_code : ''}${order?.customer?.cellphone}`)}
                  >
                    <Telephone />
                  </IconButton>
                )}
              </div>
              {/* {!order?.user_review && pastOrderStatuses.includes(order?.status) && (
                <ReviewButton
                  onClick={() => handleReviewCustomer(order?.customer)}
                >
                  {t('REVIEW', 'Review')}
                </ReviewButton>
              )} */}
            </InfoContent>
            <ChevronDown className='down-arrow' />
          </CustomerInfo>
        </ContextAwareToggle>
        <Accordion.Collapse eventKey='1'>
          <CutsomerDetail>
            <CustomerInfoTable>
              <tbody>
                {order?.customer?.cellphone && (
                  <tr>
                    <td>{t('CELLPHONE', 'Phone / Mobile')}</td>
                    <td>
                      <a href={`tel:${order?.customer?.country_phone_code ? '+' + order?.customer?.country_phone_code : ''}${order?.customer?.cellphone}`}>
                        {(order?.customer?.country_phone_code && `+${order?.customer?.country_phone_code}`)} {order?.customer?.cellphone}
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
                {!!order?.on_behalf_of && (
                  <tr>
                    <td>{t('ON_BEHALF_OF', 'On behalf of')}</td>
                    <td>{order?.on_behalf_of}</td>
                  </tr>
                )}
              </tbody>
            </CustomerInfoTable>
          </CutsomerDetail>
        </Accordion.Collapse>
      </Accordion>
      {order?.delivery_type === 1 && !isServiceOrder && (
        <>
          <DriverSelectorContainer>
            <p>{t('DRIVER_ASSIGN', 'Driver assign')}</p>
            <DriverSelector
              small
              isPhoneView
              defaultValue={order?.driver_id ? order.driver_id : 'default'}
              order={order}
              isTourOpen={isTourOpen}
              setCurrentTourStep={setCurrentTourStep}
              handleOpenMessages={handleOpenMessages}
              isOrderDrivers
              orderId={order?.id}
            />
          </DriverSelectorContainer>
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
                    {order?.driver?.cellphone && (
                      <IconButton
                        onClick={() => window.open(`tel:${order?.driver?.cellphone}`)}
                      >
                        <Telephone />
                      </IconButton>
                    )}
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

      <Modal
        width='700px'
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <ReviewCustomer
          order={order}
          customer={currentCustomer}
          onClose={() => handleCustomerReviewed()}
        />
      </Modal>
    </>
  )
}

const ContextAwareToggle = ({ children, eventKey, callback }) => {
  const currentEventKey = useContext(AccordionContext)
  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  )
  const isCurrentEventKey = currentEventKey === eventKey

  const handleButtonClick = () => {
    decoratedOnClick()
  }
  return (
    <ToggleItemWrapper
      active={isCurrentEventKey}
      onClick={handleButtonClick}
    >
      {children}
    </ToggleItemWrapper>
  )
}
