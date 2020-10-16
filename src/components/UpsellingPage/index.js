import React, { useEffect } from 'react'
import { UpsellingPage as UpsellingPageController, useLanguage } from 'ordering-components'
import { Container, UpsellingContainer, Item, Image, Details, CloseUpselling, SkeletonContainer } from './styles'
import { Button } from '../../styles/Buttons'
import Skeleton from 'react-loading-skeleton'

const UpsellingPageUI = (props) => {
  const { upsellingProducts, productsList, handleAddProductUpselling, handleUpsellingPage } = props
  const [, t] = useLanguage()

  useEffect(() => {
    if (!productsList.loading) {
      emptyProductList()
    }
  }, [productsList.loading])

  const emptyProductList = () => {
    if (!upsellingProducts.length) {
      handleUpsellingPage()
    }
  }
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
                        <h5 title={product.name}>{product.name}</h5>
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
          ) : [...Array(8)].map((item, i) => (
            <SkeletonContainer key={i}>
              <Skeleton width={150} height={250} />
            </SkeletonContainer>
          ))
        }
      </UpsellingContainer>
      {!productsList.loading
        ? (
          <CloseUpselling>
            <Button
              color='secondary'
              outline
              onClick={() => handleUpsellingPage(false)}
            >
              {t('NO_THANKS', 'No, Thanks')}
            </Button>
          </CloseUpselling>
        )
        : ''}

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
