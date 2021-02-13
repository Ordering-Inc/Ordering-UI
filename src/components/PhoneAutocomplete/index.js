import React, { useState, useEffect } from 'react'
import {
  PhoneAutocomplete as PhoneAutocompleteController,
  useLanguage
} from 'ordering-components'

import { Modal } from '../Modal'
import { SignUpForm } from '../SignUpForm'
import { Button } from '../../styles/Buttons'
import { Input } from '../../styles/Inputs'
import { Alert } from '../Confirm'
import { UserDetails } from '../UserDetails'
import { AddressList } from '../AddressList'

import {
  PhoneContainer,
  ContentWrapper,
  Title,
  Slogan,
  AutoComplete,
  UserEdit
} from './styles'
import { SpinnerLoader } from '../SpinnerLoader'

const PhoneAutocompleteUI = (props) => {
  const {
    phone,
    customerState,
    customersPhones,
    setCustomersPhones,
    openModal,
    setOpenModal,
    onChangeNumber,
    setCustomerState
  } = props
  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const handleCloseAlert = () => {
    setCustomersPhones({ ...customersPhones, error: null })
    setAlertState({ open: false, content: [] })
  }

  const saveCustomerUser = (user) => {
    setCustomersPhones({ ...customersPhones, users: [...customersPhones.users, user] })
    setCustomerState({ ...customerState, result: user })
    setOpenModal({ customer: true, signup: false })
  }

  useEffect(() => {
    if (customersPhones.error) {
      setAlertState({ open: true, content: [customersPhones.error] })
    }
  }, [customersPhones.error])

  return (
    <>
      <PhoneContainer>
        <ContentWrapper>
          <Title>{t('TITLE_HOME', 'All We need is Food.')}</Title>
          <Slogan>{t('SUBTITLE_HOME', 'Let\'s start to order food now')}</Slogan>
          <AutoComplete className='autocomplete'>
            <Input
              name='phone-input'
              id='phone-input'
              placeholder='Phone'
              type='text'
              pattern='[0-9]*'
              onInput={onChangeNumber}
              value={phone}
              onChange={() => {}}
              maxLength='10'
              autoComplete='off'
              disabled={customersPhones?.loading}
            />
            {customersPhones?.loading && (
              <SpinnerLoader
                style={{
                  top: 0,
                  position: 'absolute',
                  height: 'auto',
                  left: '100%',
                  width: '0px',
                  transform: 'translate(-10px, 10%)'
                }}
              />
            )}
          </AutoComplete>
          <Button
            color='primary'
            name=''
          >
            {t('FIND', 'Find')}
          </Button>
        </ContentWrapper>
      </PhoneContainer>
      <Modal
        open={openModal.signup}
        width='80%'
        onClose={() => setOpenModal({ openModal, signup: false })}
      >
        <SignUpForm
          externalPhoneNumber={phone}
          saveCustomerUser={saveCustomerUser}
        />
      </Modal>
      <Modal
        open={openModal.customer}
        width='60%'
        onClose={() => setOpenModal({ openModal, customer: false })}
      >
        <UserEdit>
          {!customerState?.loading && (
            <>
              <UserDetails
                userData={customerState?.result}
                userId={customerState?.result?.id}
              />
              <AddressList
                isModal
                userId={customerState?.result?.id?.toString()}
                changeOrderAddressWithDefault
              />
            </>
          )}
        </UserEdit>
      </Modal>
      <Alert
        title={t('ERROR', 'Error')}
        open={alertState.open}
        content={alertState.content}
        onClose={handleCloseAlert}
        onAccept={handleCloseAlert}
      />
    </>
  )
}

export const PhoneAutocomplete = (props) => {
  const phoneProps = {
    UIComponent: PhoneAutocompleteUI,
    ...props
  }

  return <PhoneAutocompleteController {...phoneProps} />
}
