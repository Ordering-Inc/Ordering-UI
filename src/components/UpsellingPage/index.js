import React from 'react'
import { UpsellingPage as UpsellingPageController, useLanguage } from 'ordering-components'
import { Container, UpsellingContainer, Item, Image, Details } from './styles'
import { Button } from '../../styles/Buttons'

const UpsellingPageUI = (props) => {
  const { upsellingProducts, productsList, handleAddProductUpselling, setModalOpen } = props
  const [, t] = useLanguage()

  return (
    <Container>
      <UpsellingContainer>
        {
          !productsList.loading ? (
            <>
              {
                !productsList.error ? upsellingProducts.map(product => (
                  <Item key={product.id}>
                    <Image>
                      <img src={product.images} />
                    </Image>
                    <Details>
                      <div>
                        <p>{product.name}</p>
                      </div>
                      <p>${product.price}</p>
                      <Button color='primary' onClick={handleAddProductUpselling}>{t('ADD', 'Add')}</Button>
                    </Details>
                  </Item>
                )) : (
                  <>
                    {productsList.message}
                  </>
                )
              }
            </>
          ) : 'loading'
        }
      </UpsellingContainer>
      <Button color='secondary' outline onClick={() => setModalOpen(false)}>
        {t('NO_THANKS', 'No, Thanks')}
      </Button>
    </Container>
  )
}

export const UpsellingPage = (props) => {
  const UpsellingPageProps = {
    ...props,
    UIComponent: UpsellingPageUI
  }

  return <UpsellingPageController {...UpsellingPageProps} />
}
