import React, { useEffect, useState } from 'react'
import { useApi, useEvent, useSite } from 'ordering-components'
import { useLocation } from 'react-router-dom'

import { HelmetTags } from '../../components/HelmetTags'
import settings from '../../config'


import {
  HomeContainer,

} from './styles'

import { PhoneAutocomplete } from '../../../src/themes/callcenterOriginal'

export const HomePage = (props) => {
  const [events] = useEvent()
  const phone = new URLSearchParams(useLocation()?.search)?.get('phone') || null

  const phoneProps = {
    ...props,
    fieldsNotValid: ['password'],
    countryCallingCode: settings.country_calling_code,
    limitPhoneLength: parseInt(settings.limit_phone_length) ?? settings.limit_phone_length,
    onRedirectPage: (page) => {
      events.emit('go_to_page', { page })
    },
    franchiseId: settings?.franchiseId,
    urlPhone: phone || null
  }

  return (
    <>
      <HelmetTags page='home' />
      <HomeContainer>
        <PhoneAutocomplete {...phoneProps} />
      </HomeContainer>
    </>
  )
}

export default HomePage
