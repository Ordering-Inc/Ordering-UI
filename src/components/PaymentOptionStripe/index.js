import React, { useState } from 'react'
import { PaymentOptionStripe as PaymentOptionStripeController, useSession } from 'ordering-components'

import { Modal } from '../Modal'
import { StripeElementsForm } from '../StripeElementsForm'

const PaymentOptionStripeUI = (props) => {
  const {
    deleteCard,
    cardSelected,
    cardsList,
    handleSelectCard,
    handleCardClick,
    handleNewCard
  } = props
  const [{ token }] = useSession()

  const [addCartOpen, setAddCardOpen] = useState(false)

  const _handleNewCard = (card) => {
    setAddCardOpen(false)
    handleNewCard(card)
  }

  return (
    <>
      {!token && <strong style={{ color: 'red' }}>Sorry, you need to login to use this method</strong>}

      {token && (
        <>
          <div>
            {!cardsList.loading && !cardsList.error ? (
              <>
                {cardsList.cards && cardsList.cards.length > 0 ? (
                  cardsList.cards.map((card, i) => (
                    <div key={i} style={{ padding: '5px' }} onClick={() => handleCardClick(card)}>
                      <input
                        type='radio'
                        name='card'
                        value={card.id}
                        style={{ marginLeft: '5px' }}
                        checked={card.id === cardSelected?.id}
                        readOnly
                      />
                      <span>{`XXXX-XXXX-XXXX-${card.last4}`} ({card.brand})</span>
                      <button onClick={() => deleteCard(card)}>Delete</button>
                    </div>
                  ))
                ) : (
                  <p>❌ Not Found ❌</p>
                )}
              </>
            ) : (
              <>
                {cardsList.error && cardsList.error.length > 0 ? (
                  cardsList.error.map((e, i) => (
                    <p key={i}>ERROR: [{e}]</p>
                  ))
                ) : (
                  <p>Loading...</p>
                )}
              </>
            )}
          </div>
          {handleSelectCard && <button style={{ margin: '10px 0px' }} onClick={() => handleSelectCard(cardSelected)} disabled={!cardSelected}>Accept</button>}
          <button style={{ margin: '10px 0px' }} onClick={() => setAddCardOpen(true)}>Add card</button>
        </>
      )}

      <Modal
        className='modal-info'
        open={addCartOpen}
        onCancel={() => setAddCardOpen(false)}
        onClose={() => setAddCardOpen(false)}
        title='Add card'
      >
        <button onClick={() => setAddCardOpen(false)}>x</button>
        <div>
          <StripeElementsForm
            businessId={props.businessId}
            publicKey={props.publicKey}
            toSave
            // clientSecret={props.clientSecret}
            onNewCard={_handleNewCard}
          />
        </div>
      </Modal>
    </>
  )
}

export const PaymentOptionStripe = (props) => {
  const paymentOptionStripeProps = {
    ...props,
    UIComponent: PaymentOptionStripeUI
  }
  return (
    <PaymentOptionStripeController {...paymentOptionStripeProps} />
  )
}
