import React, { useEffect, useState } from 'react'
import { useLanguage, useApi, useEvent } from 'ordering-components'
import { PhoneAutocomplete } from '../../../src/themes/callcenterOriginal/src/components/PhoneAutocomplete'
import { useHistory } from 'react-router-dom'
import { HelmetTags } from '../../components/HelmetTags'
import settings from '../../config.json'

import {
  HomeContainer
} from './styles'

export const HomePage = (props) => {
  const [events] = useEvent()

  const phoneProps = {
    ...props,
    fieldsNotValid: ['password'],
    countryCallingCode: settings.country_calling_code,
    onRedirectPage: (page) => {
      events.emit('go_to_page', { page })
    }
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
