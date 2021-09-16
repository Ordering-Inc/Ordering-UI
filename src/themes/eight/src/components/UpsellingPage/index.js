import React, { useState, useEffect } from 'react'
import { UpsellingPage as UpsellingPageController, useLanguage, useUtils } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
import { Modal } from '../../../../../components/Modal'

import { AutoScroll } from '../AutoScroll'
import { ProductForm } from '../ProductForm'
import { Button } from '../../styles'

import {
  Container,
  UpsellingContainer,
  Item,
  Image,
  Details,
  CloseUpselling,
  SkeletonContainer
} from './styles'

const UpsellingPageUI = (props) => {
  const {
    upsellingProducts,
    handleUpsellingPage,
    openUpselling,
    canOpenUpselling,
    setCanOpenUpselling,
    business,
    isCustomMode,
    setOpenUpselling
  } = props
  const [, t] = useLanguage()
  const [actualProduct, setActualProduct] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [{ parsePrice }] = useUtils()

  useEffect(() => {
    if (!isCustomMode) {
      if (upsellingProducts?.products?.length && !upsellingProducts.loading) {
        setCanOpenUpselling && setCanOpenUpselling(true)
      } else if (!upsellingProducts?.products?.length && !upsellingProducts.loading && !canOpenUpselling && openUpselling) {
        handleUpsellingPage()
      }
      if (!upsellingProducts.loading && upsellingProducts?.products.length === 0) {
        setCanOpenUpselling && setCanOpenUpselling(false)
        setOpenUpselling && setOpenUpselling(false)
      }
    }
  }, [upsellingProducts.loading, upsellingProducts?.products.length])

  const handleFormProduct = (product) => {
    setActualProduct(product)
    setModalIsOpen(true)
  }

  const handleSaveProduct = () => {
    setActualProduct(null)
    setModalIsOpen(false)
  }

  const UpsellingLayout = () => {
    return (
      <>
        {props.beforeElements?.map((BeforeElement, i) => (
          <React.Fragment key={i}>
            {BeforeElement}
          </React.Fragment>))}
        {props.beforeComponents?.map((BeforeComponent, i) => (
          <BeforeComponent key={i} {...props} />))}
        <Container>
          <UpsellingContainer isCustomMode={isCustomMode}>
            {isCustomMode ? (
              <>
                {upsellingProducts?.products.length > 0 && (
                  <h1>{t('WANT_SOMETHING_ELSE', 'Do you want something else?')}</h1>
                )}
                <AutoScroll>
                  {
                    !upsellingProducts.loading ? (
                      <>
                        {
                          !upsellingProducts.error ? upsellingProducts.products.map((product, i) => (
                            <Item key={product.id} name={product.name} isCustomMode>
                              <Image>
                                <img src={product.images} alt={`product-${i}`} width='150px' height='150px' loading='lazy' />
                                <Button
                                  color='primaryGradient'
                                  onClick={() => handleFormProduct(product)}
                                >
                                  {t('ADD', 'Add')}
                                </Button>
                              </Image>
                              <Details>
                                <div>
                                  <h3 title={product.name}>{product.name}</h3>
                                </div>
                                <p>{parsePrice(product.price)}</p>
                              </Details>
                            </Item>
                          )) : (
                            <>
                              {upsellingProducts.message}
                            </>
                          )
                        }
                      </>
                    ) : [...Array(8)].map((item, i) => (
                      <SkeletonContainer key={i}>
                        <Skeleton width={300} height={100} />
                      </SkeletonContainer>
                    ))
                  }
                </AutoScroll>
              </>
            ) : (
              <>
                {
                  !upsellingProducts.loading ? (
                    <>
                      {
                        !upsellingProducts.error ? upsellingProducts.products.map((product, i) => (
                          <Item key={product.id} name={product.name}>
                            <Image>
                              <img src={product.images} alt={`product-${i}`} width='150px' height='150px' loading='lazy' />
                              <Button
                                color='primaryGradient'
                                onClick={() => handleFormProduct(product)}
                              >
                                {t('ADD', 'Add')}
                              </Button>
                            </Image>
                            <Details>
                              <div>
                                <h3 title={product.name}>{product.name}</h3>
                              </div>
                              <p>{parsePrice(product.price)}</p>
                            </Details>
                          </Item>
                        )) : (
                          <>
                            {upsellingProducts.message}
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
              </>
            )}
          </UpsellingContainer>
        </Container>
        {props.afterComponents?.map((AfterComponent, i) => (
          <AfterComponent key={i} {...props} />))}
        {props.afterElements?.map((AfterElement, i) => (
          <React.Fragment key={i}>
            {AfterElement}
          </React.Fragment>))}
      </>
    )
  }

  return (
    <>

      {isCustomMode ? (
        <UpsellingLayout />
      ) : (
        <>
          {!canOpenUpselling || upsellingProducts?.products?.length === 0 ? '' : (
            <Modal
              title={t('WANT_SOMETHING_ELSE', 'Do you want something else?')}
              open={openUpselling}
              onClose={() => handleUpsellingPage()}
              width='70%'
            >
              <UpsellingLayout />
              <CloseUpselling>
                <Button
                  color='secondary'
                  outline
                  onClick={() => handleUpsellingPage(false)}
                >
                  {t('NO_THANKS', 'No, Thanks')}
                </Button>
              </CloseUpselling>
            </Modal>
          )}
        </>
      )}
      <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)} width='70%' padding='0' closeOnBackdrop>
        {actualProduct && (
          <ProductForm
            product={actualProduct}
            businessId={actualProduct.api.businessId}
            businessSlug={business.slug}
            onSave={() => handleSaveProduct()}
          />
        )}
      </Modal>
    </>
  )
}

export const UpsellingPage = (props) => {
  const UpsellingPageProps = {
    ...props,
    UIComponent: UpsellingPageUI
  }

  return <UpsellingPageController {...UpsellingPageProps} />
}
