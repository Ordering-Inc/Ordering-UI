import React, { useState, useEffect } from 'react'
import { Modal } from '../Modal'
import { useWindowSize } from '../../../../../../hooks/useWindowSize'
import { XLg } from 'react-bootstrap-icons'
import { IconButton } from '../../../styles/Buttons'

import {
  MainContainer,
  CloseButtonWrapper
} from './styles'
export const MoreSidebarLayout = (props) => {
  const {
    isExtendExtraOpen
  } = props
  const { width } = useWindowSize()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (width > 1000) setIsModalOpen(false)
    else setIsModalOpen(true)
  }, [width])
  return (
    <>
      {width > 1000 ? (
        <MainContainer>
          <CloseButtonWrapper
            isExtendExtraOpen={isExtendExtraOpen}
          >
            <IconButton
              color='black'
              onClick={() => props.onClose()}
            >
              <XLg />
            </IconButton>
          </CloseButtonWrapper>
          {props.children}
        </MainContainer>
      ) : (
        <Modal
          width='80%'
          open={isModalOpen}
          onClose={() => props.onClose()}
        >
          {props.children}
        </Modal>
      )}
    </>
  )
}
