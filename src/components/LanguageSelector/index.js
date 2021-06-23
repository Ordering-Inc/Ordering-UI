import React from 'react'
import { LanguageSelector as LanguageSelectorController } from 'ordering-components'
import { Select } from '../../styles/Select'

const LanguageSelectorUI = (props) => {
  const {
    languagesState,
    currentLanguage,
    handleChangeLanguage,
    notReload,
    defaultLanguages,
    defaultCurrentLanguage
  } = props
  let singleLanguage = true

  const _languages = languagesState?.languages?.map(language => {
    return {
      value: language?.code, content: language?.name, showOnSelected: language.code?.toUpperCase()
    }
  })
  if ( !languagesState.loading ) {
    if ( languagesState.languages?.length != 1 ) {
      singleLanguage = false
    }
  }
  _languages && _languages.sort((a, b) =>
    (a.content > b.content) ? 1 : ((b.content > a.content) ? -1 : 0)
  )
  return (
    singleLanguage ? null : (
    <Select
      options={languagesState?.loading ? defaultLanguages : _languages}
      defaultValue={languagesState?.loading ? defaultCurrentLanguage : currentLanguage}
      onChange={(languageId) => handleChangeLanguage(languageId)}
      notReload={notReload}
    />
    )
  )
}

export const LanguageSelector = (props) => {
  const DefaultChangeLanguage = () => {}
  const langProps = {
    ...props,
    UIComponent: LanguageSelectorUI,
    onChangeLanguage: props.onChangeLanguage || DefaultChangeLanguage,
    defaultLanguages: [{
      content: 'English',
      showOnSelected: 'EN',
      value: 'en'
    }],
    defaultCurrentLanguage: 'en'
  }
  return (
    <LanguageSelectorController {...langProps} />
  )
}
