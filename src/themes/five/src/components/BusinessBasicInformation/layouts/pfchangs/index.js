import { useLanguage, useOrder, useUtils } from 'ordering-components'
import React from 'react'
import { Button } from '../../../../styles/Buttons/theme/pfchangs'
import { BusinessInfoContainer, BusinessContainer, DeliveryPickupContainer, TitleContainer } from './styles'
import RiArrowDropDownLine from '@meronex/icons/ri/RiArrowDropDownLine'
import { Modal } from '../../../Modal'
import { BusinessInformation } from '../../../BusinessInformation/layouts/pfchangs'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import isBetween from 'dayjs/plugin/isBetween'

dayjs.extend(timezone)
dayjs.extend(isBetween)

export const BusinessBasicInformationPFChangs = (props) => {
  const {
    businessState,
    isSkeleton,
    setOpenBusinessInformation,
    openBusinessInformation
  } = props
  const { business } = businessState
  const [, t] = useLanguage()
  const [orderState, { changeType }] = useOrder()

  const types = ['food', 'laundry', 'alcohol', 'groceries']
  const [{ optimizeImage }] = useUtils()

  const getBusinessType = () => {
    if (Object.keys(business).length <= 0) return t('GENERAL', 'General')
    const _types = []
    types.forEach(type => business[type] && _types.push(
      t(`BUSINESS_TYPE_${type?.replace(/\s/g, '_')?.toUpperCase()}`, type)
    ))
    return _types.join(', ')
  }

  return (
    <BusinessInfoContainer>
      <TitleContainer>
        <h2 className='bold'>{business?.name}</h2>
        <RiArrowDropDownLine onClick={() => setOpenBusinessInformation(true)} />
      </TitleContainer>
      <DeliveryPickupContainer orderTypeSelected={orderState?.options?.type}>
        <Button
          color={orderState?.options?.type === 2 ? '#000' : '#FFF'}
          onClick={() => changeType(2)}
          disabled={orderState?.loading}
        >
          {t('PICKUP', 'Pickup')}
        </Button>
        <Button
          color={orderState?.options?.type === 1 ? '#000' : '#FFF'}
          onClick={() => changeType(1)}
          disabled={orderState?.loading}
        >
          {t('DELIVERY', 'Delivery')}
        </Button>
      </DeliveryPickupContainer>
      <BusinessContainer bgimage={business?.header} isSkeleton={isSkeleton} id='container' isClosed={!business?.open} />
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
    </BusinessInfoContainer>
  )
}
