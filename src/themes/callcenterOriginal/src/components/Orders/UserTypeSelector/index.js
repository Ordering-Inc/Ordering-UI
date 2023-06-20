import React from 'react'
import { useLanguage } from 'ordering-components'
import { Select } from '../../../styles/Select'
import { Select as FirstSelect } from '../../../styles/Select/FirstSelect'
import {
  Option
} from './styles'

export const UserTypeSelector = (props) => {
  const {
    userId,
    defaultUserType,
    handleChangeUserType,
    isPrimary
  } = props
  const [, t] = useLanguage()

  const userTypes = [
    {
      value: 0,
      content: <Option>{t('ADMINISTRATOR', 'Administrator')}</Option>,
      showOnSelected: <Option padding>{t('ADMINISTRATOR', 'Administrator')}</Option>,
      disabled: !isPrimary && defaultUserType === 0
    },
    {
      value: 2,
      content: <Option>{t('BUSINESS_OWNER', 'Business owner')}</Option>,
      showOnSelected: <Option padding>{t('BUSINESS_OWNER', 'Business owner')}</Option>,
      disabled: !isPrimary && defaultUserType === 2
    },
    {
      value: 3,
      content: <Option>{t('USER', 'User')}</Option>,
      showOnSelected: <Option padding>{t('USER', 'User')}</Option>,
      disabled: !isPrimary && defaultUserType === 3
    },
    {
      value: 9,
      content: <Option>{t('CALL_CENTER_AGENT', 'Call center agent')}</Option>,
      showOnSelected: <Option padding>{t('CALL_CENTER_AGENT', 'Call center agent')}</Option>,
      disabled: !isPrimary && defaultUserType === 9
    },
    {
      value: 8,
      content: <Option>{t('PROFESSIONAL', 'Professional')}</Option>,
      showOnSelected: <Option padding>{t('PROFESSIONAL', 'Professional')}</Option>,
      disabled: !isPrimary && defaultUserType === 8
    }
  ]
  const placeholder = <Option isWeight>{t('TYPE', 'Type')}</Option>

  const onUpdateUserType = (type) => {
    handleChangeUserType && handleChangeUserType({ id: userId, level: type })
  }

  return (
    <>
      {isPrimary ? (
        <FirstSelect
          defaultValue={defaultUserType}
          placeholder={placeholder}
          options={userTypes}
          onChange={type => handleChangeUserType(type)}
        />
      ) : (
        <Select
          type='primary'
          noSelected
          placeholder={placeholder}
          options={userTypes}
          onChange={type => onUpdateUserType(type)}
        />
      )}
    </>
  )
}
