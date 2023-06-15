import React, { useState, useRef, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  useLanguage,
  DragAndDrop,
  ExamineClick
} from 'ordering-components'
import { Button, Input } from '../../../../styles'
import { XLg } from 'react-bootstrap-icons'
import BiImage from '@meronex/icons/bi/BiImage'
import { bytesConverter } from '../../../../../../../utils'
import { Alert, Confirm } from '../../../Shared'

import {
  InsertImageContainer,
  ImageListContainer,
  WrapperImage,
  WrapperInput,
  NewImage,
  Image,
  SkeletonWrapper,
  UploadImageIconContainer,
  UploadImageIcon,
  CloseButton
} from './styles'

export const InsertImage = (props) => {
  const {
    imageListState,
    editorContext,
    onClose,
    handleRestoreEditor,
    insertImageState,
    handleInsertImage,
    handleDeleteImage,
    selectedImageUrl,
    setSelectedImageUrl
  } = props
  const [, t] = useLanguage()
  const [imageUrl, setImageUrl] = useState(null)
  const imageInputRef = useRef(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const handleInsertClick = () => {
    handleRestoreEditor()
    editorContext.invoke('editor.insertImage', imageUrl)
    onClose()
  }

  const handleClickImage = (type) => {
    imageInputRef.current.click()
  }

  const handleFiles = (files) => {
    if (files.length === 1) {
      const type = files[0].type.split('/')[0]
      if (type !== 'image') {
        setAlertState({
          open: true,
          content: [t('ERROR_ONLY_IMAGES', 'Only images can be accepted')]
        })
        return
      }

      if (bytesConverter(files[0]?.size) > 2048) {
        setAlertState({
          open: true,
          content: [t('IMAGE_MAXIMUM_SIZE', 'The maximum image size is 2 megabytes')]
        })
        return
      }

      setConfirm({
        open: true,
        content: t('QUESTION_ADD_GALLERY_IMAGE', 'Are you sure that you want to add this gallery image?'),
        handleOnAccept: () => {
          setConfirm({ ...confirm, open: false })
          handleInsertImage(files[0])
        }
      })
    }
  }

  const onDeleteClick = (imageId) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_GALLERY_ITEM', 'Are you sure that you want to delete this image?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteImage(imageId)
      }
    })
  }

  useEffect(() => {
    setImageUrl(selectedImageUrl)
  }, [selectedImageUrl])

  return (
    <InsertImageContainer>
      <h1>{t('INSERT_IMAGE', 'Insert image')}</h1>
      <WrapperInput>
        <label>{t('IMAGE_URL', 'Image URL')}</label>
        <Input
          value={imageUrl || ''}
          onChange={e => setImageUrl(e.target.value)}
        />
      </WrapperInput>
      <Button
        borderRadius='8px'
        color='primary'
        onClick={() => handleInsertClick()}
      >
        {t('INSERT', 'Insert')}
      </Button>
      <NewImage>
        <Image onClick={() => handleClickImage()} isImage={insertImageState?.change?.soucre}>
          <ExamineClick onFiles={handleFiles} childRef={(e) => { imageInputRef.current = e }} accept='image/png, image/jpeg, image/jpg' disabled={insertImageState.loading}>
            <DragAndDrop onDrop={dataTransfer => handleFiles(dataTransfer.files)} accept='image/png, image/jpeg, image/jpg' disabled={insertImageState.loading}>
              {
                insertImageState.loading
                  ? (<SkeletonWrapper><Skeleton /></SkeletonWrapper>)
                  : insertImageState?.change?.soucre && <img src={insertImageState?.change?.soucre} alt='image' loading='lazy' />
              }
              <UploadImageIconContainer>
                <UploadImageIcon>
                  <BiImage />
                  <span>{t('DRAG_DROP_IMAGE_HERE', 'Put your image here')}</span>
                </UploadImageIcon>
              </UploadImageIconContainer>
            </DragAndDrop>
          </ExamineClick>
        </Image>
      </NewImage>
      <ImageListContainer>
        {imageListState.images.map(image => (
          <WrapperImage
            key={image.id}
            onClick={() => setSelectedImageUrl(image?.source)}
          >
            <CloseButton
              onClick={() => onDeleteClick(image.id)}
            >
              <XLg />
            </CloseButton>
            <img src={image?.source} alt='' />
          </WrapperImage>
        ))}
      </ImageListContainer>
      <Alert
        title={t('WEB_APPNAME', 'ORDERING')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
      <Confirm
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </InsertImageContainer>
  )
}
