import React from 'react'
import { PhoneAutocomplete as PhoneAutocompleteController, useLanguage, useSession } from 'ordering-components'

import { Modal } from '../Modal'
import { SignUpForm } from '../SignUpForm'
import { Button } from '../../styles/Buttons'
import { Input } from '../../styles/Inputs'
import { Alert } from '../Confirm'
import { UserDetails } from '../UserDetails'
import { AddressList } from '../AddressList'

import { PhoneContainer, ContentWrapper, Title, Slogan, AutoComplete, UserEdit } from './styles'

const PhoneAutocompleteUI = (props) => {
  const {
    onChangeNumber,
    phone,
    errorMinLength,
    setErrorMinLength,
    openCustomer,
    setOpenCustomer,
    openAddress,
    setOpenAddress,
    userState,
    gettingPhones
  } = props
  const [, t] = useLanguage()
  const [{ user }] = useSession()

  const handleCloseAlert = () => {
    setErrorMinLength({ error: false, dispatch: false })
  }

  const handleCloseCustomer = () => {
    setOpenCustomer(false)
  }

  const handleCloseAddress = () => {
    setOpenAddress(false)
  }

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
              disabled={gettingPhones?.loading}
            />
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
        open={openCustomer}
        width='80%'
        onClose={handleCloseCustomer}
      >
        <SignUpForm
          externalPhoneNumber={phone}
          externalCloseModal={handleCloseCustomer}
        />
      </Modal>
      <Modal
        open={openAddress}
        width='60%'
        onClose={handleCloseAddress}
      >
        <UserEdit>
          {!userState?.loading && (
            <>
              <UserDetails userData={userState?.result || user} externalLoading={userState?.loading} userId={userState?.result?.id || user?.id?.toString()} />
              {!userState?.loading && (
                <AddressList userId={userState?.result?.id?.toString() || user?.id?.toString()} isModal />
              )}
            </>
          )}
        </UserEdit>
      </Modal>
      <Alert
        title={t('ERROR', 'Error')}
        open={errorMinLength.dispatch}
        content='The Phone / Mobile must be 10 characters'
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
