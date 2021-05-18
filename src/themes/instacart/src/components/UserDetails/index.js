import React, { useState, useEffect } from 'react'
import FcCancel from '@meronex/icons/fc/FcCancel'
import TiPencil from '@meronex/icons/ti/TiPencil'
import IosArrowDown from '@meronex/icons/ios/IosArrowDown'
import CgProfile from '@meronex/icons/cg/CgProfile'
import Skeleton from 'react-loading-skeleton'
import { Button } from '../../styles/Buttons'
import { Container, Accordion, AccordionContent, SideForm, UserData } from './styles'

import {
  UserFormDetails as UserFormController,
  useLanguage,
  useSession
} from 'ordering-components'

import { UserFormDetailsUI } from '../UserFormDetails'

const UserDetailsUI = (props) => {
  const {
    isEdit,
    formState,
    cleanFormState,
    cartStatus,
    toggleIsEdit,
    validationFields,
    isUserDetailsEdit,
    isCustomerMode
  } = props

  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const userData = props.userData || formState.result?.result || user

  const [setActive, setActiveState] = useState('')
  const [setRotate, setRotateState] = useState('accordion__icon')
  const toggleAccordion = () => {
    setActiveState(setActive === '' ? 'active' : '')
    setRotateState(
      setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate'
    )
  }

  useEffect(() => {
    if (isUserDetailsEdit) {
      !isEdit && toggleIsEdit()
    }
  }, [isUserDetailsEdit])

  const toggleEditState = () => {
    toggleIsEdit()
    cleanFormState({ changes: {} })
  }

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      {(validationFields.loading || formState.loading) && (
        <UserData>
          <Skeleton width={250} height={25} />
          <Skeleton width={180} height={25} />
          <Skeleton width={210} height={25} />
        </UserData>
      )}

      {!(validationFields.loading || formState.loading) && (
        <Container className='user-form'>
          <Accordion
            className={`accordion ${setActive}`}
            onClick={() => toggleAccordion()}
          >
            <h1><CgProfile /> {t('CUSTOMER_DETAILS', 'Customer Details')}</h1>
            <span>
              <IosArrowDown className={`${setRotate}`} />
            </span>
          </Accordion>
          <AccordionContent
            style={{ maxHeight: !setActive && '0px' }}
          >
            {cartStatus !== 2 && (
              !isEdit ? (
                <Button
                  color='primary'
                  onClick={() => toggleIsEdit()}
                >
                  {t('EDIT', 'Edit')}
                </Button>
              ) : (
                <Button
                  color='primary'
                  onClick={() => toggleEditState()}
                >
                  {t('CANCEL', 'Cancel')}
                </Button>
              )
            )}
            {!isEdit ? (
              <UserData>
                {(userData?.name || userData?.middle_name || userData?.lastname || userData?.second_lastname) && (
                  <p>
                    <strong>{t('NAME', 'Name')}:</strong> {userData?.name} {userData?.middle_name} {userData?.lastname} {userData?.second_lastname}
                  </p>
                )}
                {userData?.email && (
                  <p><strong>{t('EMAIL', 'Email')}:</strong> {userData?.email}</p>
                )}
                {(userData?.cellphone || user?.cellphone) && (
                  <p>
                    <strong>{t('CELLPHONE', 'Cellphone')}:</strong>
                    {(userData?.country_phone_code) && `+${(userData?.country_phone_code)} `}{(userData?.cellphone)}
                  </p>
                )}
              </UserData>
            ) : (
              <SideForm>
                <UserFormDetailsUI {...props} isCustomerMode={isCustomerMode} />
              </SideForm>
            )}
          </AccordionContent>
        </Container>
      )}
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const UserDetails = (props) => {
  const userDetailsProps = {
    ...props,
    UIComponent: UserDetailsUI
  }

  return <UserFormController {...userDetailsProps} />
}
