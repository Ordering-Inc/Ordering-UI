import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Modal } from '../../../Modal/theme/two'
import {
  UserFormDetails as UserFormController,
  useLanguage,
  useSession
} from 'ordering-components'
import { UserFormDetailsUI } from '../../../UserFormDetails/theme/two'
import { Container, Header, UserData } from './styles'

const UserDetailsUI = (props) => {
  const {
    userData: externalUserData,
    isEdit,
    formState,
    // cleanFormState,
    // cartStatus,
    toggleIsEdit,
    validationFields,
    isUserDetailsEdit,
    externalLoading
  } = props

  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const [openModal, setOpenModal] = useState(false)
  const userData = formState.result?.result ? formState.result?.result : externalUserData

  useEffect(() => {
    if (isUserDetailsEdit) {
      !isEdit && toggleIsEdit()
    }
  }, [isUserDetailsEdit])

  // const toggleEditState = () => {
  //   toggleIsEdit()
  //   cleanFormState({ changes: {} })
  // }

  return (
    <>
      {(validationFields.loading || formState.loading || externalLoading) && (
        <UserData>
          <Skeleton width={250} height={25} />
          <Skeleton width={180} height={25} />
          <Skeleton width={210} height={25} />
        </UserData>
      )}

      {!(validationFields.loading || formState.loading || externalLoading) && (
        <Container>
          <Header className='user-form'>
            <h1>{t('PHONE_NUMBER', 'Phone number')}</h1>
            <span onClick={() => setOpenModal(true)}>
              {t('CHANGE', 'Change')}
            </span>
          </Header>

          <UserData>
            {(userData?.cellphone || user?.cellphone) && (
              <>
                {(userData?.cellphone || user?.cellphone)}
              </>
            )}
          </UserData>
        </Container>
      )}

      <Modal
        title={t('EDIT_PHONE_NUMBER', 'Edit phone number')}
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <UserFormDetailsUI
          isCheckout
          {...props}
          onCancel={() => setOpenModal(false)}
        />
      </Modal>
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
