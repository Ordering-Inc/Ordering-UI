import React, { useState } from 'react'
import { useLanguage } from 'ordering-components'
import { Button, Input } from '../../../../styles'
import { formatUrlVideo } from '../../../../../../../utils'

import {
  InsertLinkContainer,
  WrapperInput
} from './styles'

export const InsertVideo = (props) => {
  const {
    editorContext,
    onClose,
    handleRestoreEditor
  } = props
  const [, t] = useLanguage()
  const [videoUrl, setVideoUrl] = useState(null)

  const getVideoEmbedded = (video) => {
    if (video.indexOf('youtube')) {
      return '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/' + formatUrlVideo(video) + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    }
  }

  const handleInsertClick = () => {
    const HTMLstring = getVideoEmbedded(videoUrl)
    handleRestoreEditor()
    editorContext.invoke('editor.pasteHTML', HTMLstring)
    onClose()
  }
  return (
    <InsertLinkContainer>
      <h1>{t('INSERT_VIDEO', 'Insert video')}</h1>
      <WrapperInput>
        <label>{t('VIDEO_URL', 'Video url')}</label>
        <Input
          name='text'
          onChange={e => setVideoUrl(e.target.value)}
        />
      </WrapperInput>
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
