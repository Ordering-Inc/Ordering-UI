import React, { useRef, useEffect } from 'react'
import { useLanguage, useSession, LogoutAction as LogoutActionController, useEvent, useCustomer, useConfig } from 'ordering-components'
import { usePopper } from 'react-popper'
import {
  HeaderItem,
  PopoverBody,
  PopoverList,
  PopoverListItem,
  PopoverListLink,
  ExtraOptions,
  Divider,
  UserImgWrapper,
  RoundMark
} from './styles'
import { DropDownCircleImage } from '../../../../../components/Dropdown/style'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import { capitalize } from '../../../../../utils'
import AiOutlineMenu from '@meronex/icons/ai/AiOutlineMenu'
import { useTheme } from 'styled-components'

const optionsDefault = [
  { name: 'search', pathname: '/explore', displayName: 'explore', key: 'explore' },
  { name: 'orders', pathname: '/profile/orders', displayName: 'orders', key: 'orders' }
]

export const UserPopover = (props) => {
  const {
    open,
    isHome,
    optionsList,
    withLogout,
    isCustomerMode
  } = props
  const [sessionState] = useSession()
  const [, t] = useLanguage()
  const [events] = useEvent()
  const [{ configs }] = useConfig()
  const theme = useTheme()
  const referenceElement = useRef()
  const popperElement = useRef()
  const arrowElement = useRef()

  const isWalletEnabled = configs?.cash_wallet?.value && configs?.wallet_enabled?.value === '1' && (configs?.wallet_cash_enabled?.value === '1' || configs?.wallet_credit_point_enabled?.value === '1')
  const isPromotionsEnabled = configs?.advanced_offers_module?.value === '1' || configs?.advanced_offers_module?.value === true
  const isAddressListNewPage = theme.layouts?.profile?.components?.address_list?.components?.layout?.position === 'new_page'

  const extraOptions = [
    { name: 'profile', pathname: '/profile', displayName: 'view account', key: 'view_account', isActive: true },
    { name: 'wallets', pathname: '/wallets', displayName: 'wallets', key: 'wallets', isActive: isWalletEnabled && !isCustomerMode },
    { name: 'promotions', pathname: '/promotions', displayName: 'promotions', key: 'promotions', isActive: isPromotionsEnabled },
    { name: 'messages', pathname: '/messages', displayName: 'messages', key: 'messages', isActive: !isCustomerMode },
    { name: 'help', pathname: '/help', displayName: 'help', key: 'help', isActive: true },
    { name: 'sessions', pathname: '/sessions', displayName: 'sessions', key: 'sessions', isActive: true },
    { name: 'addresses', pathname: '/profile/addresses', displayName: 'places', key: 'places', isActive: isAddressListNewPage }
  ]

  const options = isCustomerMode
    ? optionsDefault.filter(option => option.name === 'profile')
    : optionsList || optionsDefault
  const popper = usePopper(referenceElement.current, popperElement.current, {
    placement: 'auto',
    modifiers: [
      { name: 'arrow', options: { element: arrowElement.current } },
      {
        name: 'offset',
        options: {
          offset: [0, 12]
        }
      }
    ]
  })

  const { styles, attributes } = popper

  useEffect(() => {
    // forceUpdate && forceUpdate()
  }, [open, sessionState])

  const handleClickOutside = (e) => {
    if (!open) return
    const outsidePopover = !popperElement.current?.contains(e.target)
    const outsidePopoverMenu = !referenceElement.current?.contains(e.target)
    if (outsidePopover && outsidePopoverMenu) {
      props.onClose && props.onClose()
    }
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      props.onClose && props.onClose()
    }
  }

  const handleGoToPage = (page) => {
    events.emit('go_to_page', { page })
    props.onClick && props.onClick()
  }

  useEffect(() => {
    window.addEventListener('mouseup', handleClickOutside)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('mouseup', handleClickOutside)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const popStyle = { ...styles.popper, visibility: open ? 'visible' : 'hidden', minWidth: '150px' }
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)'
  }
  return (
    <div style={{ overflow: 'hidden' }}>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <HeaderItem
        isPhoto={sessionState?.user?.photo}
        isHome={isHome}
        ref={referenceElement}
        isOpen={open}
        onClick={props.onClick}
      >
        <AiOutlineMenu className='menu-list' />
        <UserImgWrapper>
          <RoundMark />
          <DropDownCircleImage
            src={sessionState?.user?.photo}
            fallback={<FaUserAlt />}
          />
        </UserImgWrapper>

      </HeaderItem>
      <PopoverBody ref={popperElement} style={popStyle} {...attributes.popper}>
        <PopoverList>
          {options && options.length > 0 && (
            options.map((option, i) => (
              <PopoverListLink
                key={i}
                active={window.location.pathname === option.pathname}
                onClick={() => handleGoToPage(option.name)}
              >
                {t((option.key || option.name).toUpperCase(), capitalize(option.displayName || option.name))}
              </PopoverListLink>
            ))
          )}
          <Divider />
          <ExtraOptions>
            {
              extraOptions && extraOptions.length > 0 && (
                extraOptions.map((option, i) => option.isActive && (
                  <PopoverListLink
                    key={i}
                    active={window.location.pathname === option.pathname}
                    onClick={() => handleGoToPage(option.name)}
                  >
                    {t((option.key || option.name).toUpperCase(), capitalize(option.displayName || option.name))}
                  </PopoverListLink>
                ))
              )
            }

            <Divider />
            {withLogout && (
              <PopoverListItemLogout onClose={props.onClose} />
            )}
          </ExtraOptions>
        </PopoverList>
      </PopoverBody>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </div>
  )
}

const LogoutActionUI = (props) => {
  const [, t] = useLanguage()
  const [, { deleteUserCustomer }] = useCustomer()

  const handleClick = () => {
    const GoogleAuth = window?.gapi?.auth2?.getAuthInstance()
    if (GoogleAuth) {
      const signedIn = GoogleAuth.isSignedIn.get()
      if (signedIn) {
        GoogleAuth.signOut().then(() => {
          GoogleAuth.disconnect()
        })
      }
    }

    deleteUserCustomer(true)
    props.handleLogoutClick()
    props.onClose && props.onClose()
  }
  return (
    <PopoverListItem onClick={handleClick}>
      {t('LOGOUT', 'Logout')}
    </PopoverListItem>
  )
}

const PopoverListItemLogout = (props) => {
  const logoutActionProps = {
    UIComponent: LogoutActionUI,
    onClose: props.onClose
  }
  return (
    <LogoutActionController {...logoutActionProps} />
  )
}
