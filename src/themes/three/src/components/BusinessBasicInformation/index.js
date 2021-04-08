import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Modal } from '../../../../../components/Modal'
import { BusinessInformation } from '../BusinessInformation'
import { useUtils, useOrder, useLanguage } from 'ordering-components'
import { convertHoursToMinutes } from '../../../../../utils'

import {
  BusinessContainer,
  BusinessContent,
  BusinessInfo,
  BusinessInfoItem,
  BusinessBottomContainer
} from './styles'

const types = ['food', 'laundry', 'alcohol', 'groceries']

export const BusinessBasicInformation = (props) => {
  const {
    isSkeleton,
    businessState,
    setOpenBusinessInformation,
    openBusinessInformation
  } = props
  const { business, loading } = businessState

  const [orderState] = useOrder()
  const [, t] = useLanguage()
  const [{ parsePrice, optimizeImage }] = useUtils()

  const getBusinessType = () => {
    if (Object.keys(business).length <= 0) return 'none'
    const typeObj = types.map(t => {
      return { [t]: business[t] }
    }).reduce((r, c) => ({ ...r, ...c }), {})
    const businessType = Object.entries(typeObj).reduce((a, [k, v]) => v !== false ? [...a, [k, v]] : a, [])[0]
    return businessType[0]
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
      <>
        <BusinessContainer bgimage={business?.header} isSkeleton={isSkeleton} id='container'>
          <BusinessContent>
            <BusinessInfo className='info'>
              <BusinessInfoItem>
                <div>
                  {!loading ? (
                    <p className='bold'>{business?.name}</p>
                  ) : (
                    <Skeleton width={100} />
                  )}
                </div>
                <div>
                  {orderState?.options.type === 1 && (
                    <>
                      {!loading ? (
                        <h5>
                          {business && parsePrice(business?.delivery_price || 0)} {t('DELIVERY_FEE', 'Delivery Fee')}
                        </h5>
                      ) : (
                        <Skeleton width={70} />
                      )}
                    </>
                  )}
                  {!loading ? (
                    <>
                      {orderState?.options?.type === 1 ? (
                        <h5>
                          {convertHoursToMinutes(business?.delivery_time)}
                        </h5>
                      ) : (
                        <h5>
                          {convertHoursToMinutes(business?.pickup_time)}
                        </h5>
                      )}
                    </>
                  ) : (
                    <Skeleton width={70} />
                  )}
                </div>
              </BusinessInfoItem>
            </BusinessInfo>
          </BusinessContent>
        </BusinessContainer>
        <BusinessBottomContainer>
          <div>
            <p>{business?.address}</p>
            {!loading && (
              <a onClick={() => setOpenBusinessInformation(true)}>
                {t('MORE_INFO', 'More info')}
              </a>
            )}
          </div>
        </BusinessBottomContainer>
        <Modal
          width='70%'
          open={openBusinessInformation}
          onClose={setOpenBusinessInformation}
          padding='0'
          hideCloseDefault
          isTransparent
        >
          <BusinessInformation
            business={business}
            getBusinessType={getBusinessType}
            optimizeImage={optimizeImage}
            onClose={setOpenBusinessInformation}
          />
        </Modal>
      </>
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
