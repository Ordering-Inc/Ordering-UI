import React, { useState } from 'react'
import { useLanguage, useUtils, useConfig, useCustomer } from 'ordering-components'
import { UserAddForm } from '../../UserAddForm'
import { AddressList } from '../../AddressList'
import { Dot, HouseDoor } from 'react-bootstrap-icons'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import CgSpinnerTwoAlt from '@meronex/icons/cg/CgSpinnerTwoAlt'
import { SideBar } from '../../../Shared'
import { Button, Input, LinkButton } from '../../../../styles'
import {
  SectionContainer,
  SearchBarContainer,
  SearchBarWrapper,
  OptionsToSelectContainer,
  SelectOption,
  WrapperImage,
  SelectedUserWrapper,
  CustomerAddressWrapper,
  SavedPlaces,
  AddressListWrapper
} from './styles'

export const SelectCustomer = (props) => {
  const {
    phone,
    customersPhones,
    selectedUser,
    setSelectedUser,
    onChangeNumber,
    handleParentSidebarMove,
    customerAddress
  } = props

  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const [{ configs }] = useConfig()
  const [, { setUserCustomer }] = useCustomer()

  const [searchInputFocus, setSearchInputFocus] = useState(false)
  const [showSearchbar, setShowSearchbar] = useState(true)
  const [openSidebar, setOpenSidebar] = useState(null)
  const [openExtraAdddress, setOpenExtraAddress] = useState(false)

  let timeout = null
  const onInputChange = (inputValue) => {
    if (inputValue && inputValue.length > 10) {
      return
    }
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      onChangeNumber(inputValue)
    }, 750)
  }

  const onSelectUser = (user) => {
    setUserCustomer(user, true)
    setSelectedUser(user)
    setShowSearchbar(false)
  }

  const handleOpenAddForm = () => {
    setOpenSidebar('user_add_form')
    handleParentSidebarMove(500)
  }

  const handleCloseSidebar = () => {
    setOpenSidebar(null)
    handleParentSidebarMove(0)
  }

  const onPhoneNumberPaste = (event) => {
    event.preventDefault()
    const pastedValue = event.clipboardData.getData('text/plain')
    const trimmedValue = pastedValue.replace(/\D/g, '')
    document.execCommand('insertText', false, trimmedValue)
    onChangeNumber(trimmedValue)
  }

  return (
    <>
      <SectionContainer>
        <h3>{t('CUSTOMER', 'Customer')}</h3>
        <p>{t('SEARCH_WITH_PHONE_FOR_CUSTOM_ORDER', 'Search with the phone the customer who will assign the custom order.')}</p>
        <SearchBarContainer>
          {showSearchbar ? (
            <SearchBarWrapper>
              <Input
                placeholder={t('PHONE_NUMBER', 'Phone number')}
                onChange={e => onInputChange(e.target.value)}
                defaultValue={phone}
                onKeyPress={(e) => {
                  if (!/^[0-9]$/.test(e.key) || e.target.value.length >= 10) {
                    e.preventDefault()
                  }
                }}
                onFocus={() => setSearchInputFocus(true)}
                onBlur={() => {
                  setTimeout(() => {
                    setSearchInputFocus(false)
                  }, 300)
                }}
                onPaste={(event) => onPhoneNumberPaste(event)}
              />
              {customersPhones.loading && (
                <span className='loading'>
                  <CgSpinnerTwoAlt />
                </span>
              )}
              {searchInputFocus && (
                <OptionsToSelectContainer>
                  {customersPhones?.users?.length > 0 ? (
                    <>
                      {customersPhones?.users?.map(user => (
                        <SelectOption
                          key={user.id}
                          onClick={() => onSelectUser(user)}
                        >
                          <span>{user?.cellphone || user?.phone}</span>
                          <Dot />
                          <WrapperImage>
                            {user?.photo ? (
                              <img src={optimizeImage(user?.photo, 'h_50,c_limit')} alt='' />
                            ) : (
                              <FaUserAlt />
                            )}
                          </WrapperImage>
                          <span className='name'>{user?.name} {user?.lastname}</span>
                        </SelectOption>
                      ))}
                    </>
                  ) : (
                    <p>
                      {
                        customersPhones.loading
                          ? t('LOADING', 'Loading')
                          : phone?.length > 6 ? t('NO_OPTIONS', 'No options') : t('TYPE_AT_LEAST_NUMBER_SUGGEST', 'Type at least 7 numbers for suggesstions')
                      }
                    </p>
                  )}
                </OptionsToSelectContainer>
              )}
            </SearchBarWrapper>
          ) : (
            <>
              <SelectedUserWrapper>
                <SelectOption
                  onClick={() => setShowSearchbar(true)}
                >
                  <span>{selectedUser?.cellphone || selectedUser?.phone}</span>
                  <Dot />
                  <WrapperImage>
                    {selectedUser?.photo ? (
                      <img src={optimizeImage(selectedUser?.photo, 'h_50,c_limit')} alt='' />
                    ) : (
                      <FaUserAlt />
                    )}
                  </WrapperImage>
                  <span className='name'>{selectedUser?.name} {selectedUser?.lastname}</span>
                </SelectOption>
              </SelectedUserWrapper>
            </>
          )}
          <Button
            borderRadius='8px'
            color='primary'
            disabled={openSidebar === 'user_add_form'}
            onClick={() => handleOpenAddForm()}
          >
            {t('USERS_REGISTER', 'New user')}
          </Button>
        </SearchBarContainer>
        {selectedUser && (
          <CustomerAddressWrapper>
            {customerAddress?.address && (
              <div>
                <HouseDoor />
                <span>{customerAddress?.address}</span>
              </div>
            )}
            <LinkButton
              onClick={() => {
                setOpenSidebar('address_list')
                handleParentSidebarMove(500)
              }}
            >
              {customerAddress?.address ? t('CHANGE', 'Change') : t('ADD_NEW_ADDRESS', 'Add new address')}
            </LinkButton>
          </CustomerAddressWrapper>
        )}
      </SectionContainer>

      {openSidebar === 'user_add_form' && (
        <SideBar
          isBorderShow
          sidebarId='user_add_form'
          open={openSidebar === 'user_add_form'}
          onClose={() => handleCloseSidebar()}
        >
          <UserAddForm
            isFromCustomOrder
            // defaultPhoneNumber={
            //   findExitingCountryPhoneCode(configs?.default_country_code?.value?.toUpperCase())
            //     ? `+${findExitingCountryPhoneCode(configs?.default_country_code?.value?.toUpperCase())} ${selectedUser?.cellphone || selectedUser?.phone || phone}`
            //     : `+1 ${selectedUser?.cellphone || selectedUser?.phone || phone}`
            // }
            handleSuccessAdd={onSelectUser}
            onClose={() => handleCloseSidebar()}
          />
        </SideBar>
      )}
      {openSidebar === 'address_list' && (
        <SideBar
          isBorderShow={!openExtraAdddress}
          sidebarId='address_list'
          defaultSideBarWidth={openExtraAdddress ? 1000 : 500}
          moveDistance={openExtraAdddress ? 500 : 0}
          open={openSidebar === 'address_list'}
          onClose={() => handleCloseSidebar()}
        >
          <SavedPlaces>
            <h2>{selectedUser?.name} {selectedUser?.lastname}</h2>
            <p>{t('SELECT_CUSTOMER_ADDRESS', 'Select customer address')}</p>
            <AddressListWrapper>
              <AddressList
                isSeletectedUserAddresses
                userId={selectedUser?.id}
                addresses={selectedUser?.addresses}
                userState={{
                  user: selectedUser
                }}
                setExtraOpen={setOpenExtraAddress}
                handleSuccessUpdate={setSelectedUser}
              />
            </AddressListWrapper>
          </SavedPlaces>
        </SideBar>
      )}
    </>
  )
}
