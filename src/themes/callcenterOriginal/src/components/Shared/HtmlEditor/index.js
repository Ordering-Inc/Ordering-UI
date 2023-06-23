import React, { useState, useEffect } from 'react'
import { HtmlEditor as HtmlEditorController } from 'ordering-components'
import $ from 'jquery'
import ReactSummernote from 'react-summernote'
import 'react-summernote/dist/react-summernote.css'
import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/tooltip'
import 'bootstrap/dist/css/bootstrap.css'
import { WrapperEditor } from './styles'
import { InsertLink } from './InsertLink'
import { InsertVideo } from './InsertVideo'
import { InsertImage } from './InsertImage'
import { Modal } from '../Modal'

const HtmlEditorUI = (props) => {
  const {
    body,
    handleChangeBody,
    imageListState,
    insertImageState,
    handleInsertImage,
    handleDeleteImage,
    selectedImageUrl,
    setSelectedImageUrl
  } = props

  const [openModal, setOpenModal] = useState(null)
  const [editorContext, setEditorContext] = useState(null)
  const [pageContent, setPageContent] = useState(null)

  const insertLink = (context) => {
    const ui = $.summernote.ui
    const button = ui.button({
      contents: '<i class="note-icon-link"/>',
      tooltip: 'link',
      class: 'note-btn',
      click: () => {
        setEditorContext(context)
        context.invoke('editor.saveRange')
        setOpenModal('link')
      }
    })
    return button.render()
  }

  const handleRestoreEditor = () => editorContext.invoke('restoreRange')

  const insertImage = (context) => {
    const ui = $.summernote.ui
    const button = ui.button({
      contents: '<i class="note-icon-picture"/>',
      tooltip: 'picture',
      class: 'note-btn',
      click: () => {
        setEditorContext(context)
        context.invoke('editor.saveRange')
        setOpenModal('image')
      }
    })
    return button.render()
  }

  const insertVideo = (context) => {
    const ui = $.summernote.ui
    const button = ui.button({
      contents: '<i class="note-icon-video"/>',
      tooltip: 'video',
      class: 'note-btn',
      click: () => {
        setEditorContext(context)
        context.invoke('editor.saveRange')
        setOpenModal('video')
      }
    })
    return button.render()
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setEditorContext(null)
  }

  useEffect(() => {
    if (!pageContent) return
    handleChangeBody(pageContent)
  }, [pageContent])

  const onInit = (note) => {
    if (body) {
      note.reset()
      note.replace(body)
    }
  }

  return (
    <>
      <WrapperEditor>
        <ReactSummernote
          onInit={onInit}
          options={{
            height: 350,
            fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New'],
            toolbar: [
              ['style', ['style']],
              ['font', ['bold', 'italic', 'underline', 'clear']],
              ['fontsize', ['fontsize']],
              ['color', ['color']],
              ['para', ['ul', 'paragraph']],
              ['table', ['table']],
              ['insert', ['insertLink', 'insertImage', 'insertVideo']],
              ['codeview', ['codeview']]
            ],
            buttons: {
              insertLink: insertLink,
              insertImage: insertImage,
              insertVideo: insertVideo
            }
          }}
          onChange={content => setPageContent(content)}
        />
      </WrapperEditor>
      <Modal
        width='60%'
        open={openModal === 'link'}
        onClose={() => setOpenModal(null)}
      >
        <InsertLink
          editorContext={editorContext}
          handleRestoreEditor={handleRestoreEditor}
          onClose={() => handleCloseModal()}
        />
      </Modal>
      <Modal
        width='60%'
        open={openModal === 'video'}
        onClose={() => setOpenModal(null)}
      >
        <InsertVideo
          editorContext={editorContext}
          handleRestoreEditor={handleRestoreEditor}
          onClose={() => handleCloseModal()}
        />
      </Modal>
      <Modal
        width='60%'
        open={openModal === 'image'}
        onClose={() => setOpenModal(null)}
      >
        <InsertImage
          imageListState={imageListState}
          editorContext={editorContext}
          handleRestoreEditor={handleRestoreEditor}
          onClose={() => handleCloseModal()}
          insertImageState={insertImageState}
          handleInsertImage={handleInsertImage}
          handleDeleteImage={handleDeleteImage}
          selectedImageUrl={selectedImageUrl}
          setSelectedImageUrl={setSelectedImageUrl}
        />
      </Modal>
    </>
  )
}

export const HtmlEditor = (props) => {
  const htmlEditorProps = {
    ...props,
    UIComponent: HtmlEditorUI
  }
  return <HtmlEditorController {...htmlEditorProps} />
}
