import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
// import Skeleton from 'react-loading-skeleton'
import { useLanguage } from 'ordering-components'
import { Button } from '../../styles/Buttons'
import { Select } from '../../styles/Select'
import { Input } from '../../styles/Inputs'

import {
  CurbsideContainer,
  FormInputGroup,
  InputWrapper
} from './styles'

export const CurbsideDetail = (props) => {
  const [, t] = useLanguage()
  const formMethods = useForm()
  const { AdminSettings } = props

  const handleChangeVal = () => {

  }
  useEffect(() => {

  }, [])

  return (
    <CurbsideContainer>
      <h1>{t('CURBSIDE', 'Curbside')}</h1>
      {
        props.beforeMidElements?.map((BeforeMidElements, i) => (
          <React.Fragment key={i}>
            {BeforeMidElements}
          </React.Fragment>))
      }
      {
        props.beforeMidComponents?.map((BeforeMidComponents, i) => (
          <BeforeMidComponents key={i} {...props} />))
      }
      <FormInputGroup>
        {AdminSettings?.checkout_settings?.information_show_status?.delivery_type_special?.curbside_detail?.car_type && (
          <InputWrapper className='VehicleType'>
            <p>{t('VEHICLE_TYPE', 'Vehicle type')}</p>
            <Select
              type='text'
              name='Vehicle_type'
              placeholder={t('VEHICLE_TYPE', 'Vehicle type')}
              ref={formMethods.register('Vehicle_type')}
              autoComplete='off'
              defaultValue={{ value: 'VerhicleType', content: 'VerhicleType' }}
              options={[{ value: 'VerhicleType', content: 'VerhicleType' }, { value: 'VerhicleType1', content: 'VerhicleType1' }]}
              onChange={(e) => handleChangeVal(e)}
            />
          </InputWrapper>
        )}
        {AdminSettings?.checkout_settings?.information_show_status?.delivery_type_special?.curbside_detail?.car_model && (
          <InputWrapper>
            <p>{t('MODEL', 'Model')}</p>
            <Input
              type='text'
              name='Model'
              placeholder={t('MODEL', 'Model')}
              ref={formMethods.register('Model')}
              onChange={(e) => handleChangeVal(e)}
              autoComplete='off'
            />
          </InputWrapper>
        )}
        {AdminSettings?.checkout_settings?.information_show_status?.delivery_type_special?.curbside_detail?.car_registration && (
          <InputWrapper>
            <p>{t('CAR_REGISTRATION', 'Car registration')}</p>
            <Input
              type='text'
              name='Car_registration'
              placeholder={t('CAR_REGISTRATION', 'Car registration')}
              ref={formMethods.register('Car_registration')}
              onChange={(e) => handleChangeVal(e)}
              autoComplete='off'
            />
          </InputWrapper>
        )}
        {AdminSettings?.checkout_settings?.information_show_status?.delivery_type_special?.curbside_detail?.car_color && (
          <InputWrapper>
            <p>{t('COLOR', 'Color')}</p>
            <Input
              type='text'
              name='Color'
              placeholder={t('VEHICLE_TYPE', 'Color')}
              ref={formMethods.register('Color')}
              onChange={(e) => handleChangeVal(e)}
              autoComplete='off'
            />
          </InputWrapper>
        )}
        {AdminSettings?.checkout_settings?.information_show_status?.delivery_type_special?.curbside_detail?.spot_number && (
          <InputWrapper className='spotWrapper'>
            <p>{t('SPOT_NUMBER', 'Spot number')}</p>
            <Input
              type='number'
              name='Spot'
              placeholder={t('SPOT_NUMBER', 'Spot number')}
              ref={formMethods.register('Spot')}
              onChange={(e) => handleChangeVal(e)}
              autoComplete='off'
            />
          </InputWrapper>
        )}
        <Button
          id='second-btn'
          color='primary'
        >
          {t('UPDATE', 'Update')}
        </Button>
      </FormInputGroup>
    </CurbsideContainer>
  )
}
