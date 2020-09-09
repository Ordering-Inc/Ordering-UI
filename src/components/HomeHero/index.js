import React, { useState } from 'react'
import {
  HeroContainer,
  ContentWrapper,
  Title,
  Slogan,
  WrapInput
} from './styles'

import { Button } from '../../styles/Buttons'
import { Input } from '../../styles/Inputs'

import { Modal } from '../Modal'
import { AddressForm } from '../AddressForm'
import { AddressList } from '../AddressList'

// import { useSession } from 'ordering-components'

import locationIcon from '../../../template/assets/input-location-icon.svg'

export const HomeHero = (props) => {
  // const [{ auth }] = useSession()

  const [modalIsOpen, setModalIsOpen] = useState(true)

  const closeModal = () => setModalIsOpen(false)

  return (
    <HeroContainer>
      <ContentWrapper>
        <Title>All We need is Food</Title>
        <Slogan>Let's start to order food now</Slogan>
        <WrapInput withIcon={locationIcon}>
          <Input placeholder='Address or Zip Code' />
        </WrapInput>
        <Button
          color='primary'
          onClick={() => setModalIsOpen(true)}
        >
          Find Business
        </Button>
      </ContentWrapper>
      {modalIsOpen && (
        <Modal
          title='Address'
          open={modalIsOpen}
          onClose={() => closeModal()}
        >
          {/* <AddressForm
            userId={1}
            useValidationFileds
            accessToken='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGl2NC1mZWF0dXJlcy5vcmRlcmluZy5jb1wvdjQwMFwvZW5cL2x1aXN2NFwvYXV0aCIsImlhdCI6MTU5OTU3ODMwMiwiZXhwIjoxNjMxMTE0MzAyLCJuYmYiOjE1OTk1NzgzMDIsImp0aSI6Ik9lS1h1dlh4OWJBZEttbloiLCJzdWIiOjEsInBydiI6ImRjODczOTBlY2E3ZmZkZTUwMTQyYTNiZjQxOGY4ZGFjZmE1ZmNhNjAiLCJsZXZlbCI6MH0.kSkbL7Lvtz_IYsUwOyt0fi6BlP_E93OZk5cLZLrb1kc'
            ordering={props.ordering}
            onCancel={() => closeModal()}
            onSaveAddressForm={() => closeModal()}
          /> */}
          <AddressList
            userId={1}
            accessToken='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGl2NC1mZWF0dXJlcy5vcmRlcmluZy5jb1wvdjQwMFwvZW5cL2x1aXN2NFwvYXV0aCIsImlhdCI6MTU5OTU3ODMwMiwiZXhwIjoxNjMxMTE0MzAyLCJuYmYiOjE1OTk1NzgzMDIsImp0aSI6Ik9lS1h1dlh4OWJBZEttbloiLCJzdWIiOjEsInBydiI6ImRjODczOTBlY2E3ZmZkZTUwMTQyYTNiZjQxOGY4ZGFjZmE1ZmNhNjAiLCJsZXZlbCI6MH0.kSkbL7Lvtz_IYsUwOyt0fi6BlP_E93OZk5cLZLrb1kc'
            ordering={props.ordering}
            changeOrderAddressWithDefault
          />
        </Modal>
      )}
    </HeroContainer>
  )
}
