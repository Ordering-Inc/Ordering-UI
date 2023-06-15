import React, { useState } from 'react'
import { useLanguage } from 'ordering-components'
import { Button, Checkbox, Input } from '../../../../styles'

import {
  InsertLinkContainer,
  WrapperInput,
  CheckboxWrapper
} from './styles'

export const InsertLink = (props) => {
  const {
    editorContext,
    onClose,
    handleRestoreEditor,
    isLinkButton
  } = props
  const [, t] = useLanguage()
  const [changesState, setChangesState] = useState({})

  const handleChangeInput = (e) => {
    setChangesState({
      ...changesState,
      [e.target.name]: e.target.value
    })
  }

  const handleInsertClick = () => {
    handleRestoreEditor()
    editorContext.invoke('editor.createLink', {
      text: isLinkButton
        ? `<button style='font-size: 9px;color: white;padding: 6px 11px; cursor: pointer; border-radius: 4px; background: #2C7BE5; border: none;'>${changesState?.text || 'button'}</button>`
        : (changesState?.text || ''),
      url: changesState?.url || '',
      isNewWindow: changesState?.isNewWindow ?? true
    })
    onClose()
  }

  return (
    <InsertLinkContainer>
      <h1>{t('INSERT_LINK', 'Insert link')}</h1>
      <WrapperInput>
        <label>{t('LINK_TEXT', 'Text to display')}</label>
        <Input
          name='text'
          onChange={e => handleChangeInput(e)}
        />
      </WrapperInput>
      <WrapperInput>
        <label>{t('LINK_URL', 'Url')}</label>
        <Input
          name='url'
          onChange={e => handleChangeInput(e)}
        />
      </WrapperInput>
      <CheckboxWrapper>
        <Checkbox
          defaultChecked
          onClick={e => setChangesState({ ...changesState, isNewWindow: e.target.checked })}
        />
        <span>{t('IS_NEW_WINDOW', 'Open in a new window')}</span>
      </CheckboxWrapper>
      <Button
        borderRadius='8px'
        color='primary'
        onClick={() => handleInsertClick()}
      >
        {t('INSERT', 'Insert')}
      </Button>
    </InsertLinkContainer>
  )
}
