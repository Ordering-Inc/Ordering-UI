import React, { useEffect } from 'react'
import { UpsellingPage as UpsellingPageController, useLanguage } from 'ordering-components'
import { Container, UpsellingContainer, Item, Image, Details, CloseUpselling, SkeletonContainer } from './styles'
import { Button } from '../../styles/Buttons'
import Skeleton from 'react-loading-skeleton'
import { Modal } from '../Modal'

const UpsellingPageUI = (props) => {
  const { upsellingProducts, productsList, handleAddProductUpselling, handleUpsellingPage, openUpselling, canOpenUpselling, setCanOpenUpselling } = props
  const [, t] = useLanguage()

  useEffect(() => {
    if (upsellingProducts.length) {
      setCanOpenUpselling(true)
    }
  }, [upsellingProducts])

  return (
    <Modal
      title={t('WANT_SOMETHING_ELSE', 'Do you want something else?')}
      open={openUpselling && canOpenUpselling}
      onClose={() => handleUpsellingPage(false)}
      width='70%'
    >
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
                          <h3 title={product.name}>{product.name}</h3>
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
        <CloseUpselling>
          <Button
            color='secondary'
            outline
            onClick={() => handleUpsellingPage(false)}
          >
            {t('NO_THANKS', 'No, Thanks')}
          </Button>
        </CloseUpselling>

      </Container>
    </Modal>
  )
}

export const UpsellingPage = (props) => {
  const UpsellingPageProps = {
    ...props,
    UIComponent: UpsellingPageUI
  }

  return <UpsellingPageController {...UpsellingPageProps} />
}
