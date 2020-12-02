import React from 'react'
import { LanguageSelector as LanguageSelectorController } from 'ordering-components'
import { Select } from '../../styles/Select'

const LanguageSelectorUI = (props) => {
  const {
    languages,
    currentLanguage,
    handleChangeLanguage
  } = props
  const _languages = languages.languages?.map(language => {
    return {
      value: language.code, content: language.name, showOnSelected: language.code.toUpperCase()
    }
  })
  _languages && _languages.sort((a, b) =>
    (a.content > b.content) ? 1 : ((b.content > a.content) ? -1 : 0)
  )
  return (
    <Select
      isSmall
      options={_languages}
      defaultValue={currentLanguage}
      onChange={(languageId) => handleChangeLanguage(languageId)}
    />
  )
}

export const LanguageSelector = (props) => {
  const DefaultChangeLanguage = () => {}
  return (
    <LanguageSelectorController
      {...props}
      UIComponent={LanguageSelectorUI}
      onChangeLanguage={props.onChangeLanguage || DefaultChangeLanguage}
    />
  )
}
