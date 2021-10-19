import React, { useState, useEffect } from 'react'
import { UpsellingPage as UpsellingPageController, useLanguage, useUtils } from 'ordering-components'
import {
  Container,
  UpsellingContainer,
  Item,
  Image,
  Details,
  CloseUpselling,
  SkeletonContainer,
  HorizontalUpsellingContainer,
  HorizontalItem,
  HorizontalImage,
  HorizontalDetails,
  WrapAutoScroll
} from './styles'
import { Button } from '../../styles/Buttons'
import Skeleton from 'react-loading-skeleton'
import { Modal } from '../Modal'
import { ProductForm } from '../ProductForm'
import { AutoScroll } from '../AutoScroll'

const UpsellingPageUI = (props) => {
  const {
    upsellingProducts,
    handleUpsellingPage,
    openUpselling,
    canOpenUpselling,
    setCanOpenUpselling,
    business,
    isCustomMode,
    setIsUpselling
  } = props
  const [, t] = useLanguage()
  const [actualProduct, setActualProduct] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [{ parsePrice, optimizeImage }] = useUtils()

  useEffect(() => {
    if (!isCustomMode) {
      if (upsellingProducts?.products?.length && !upsellingProducts.loading) {
        setCanOpenUpselling && setCanOpenUpselling(true)
      } else if (!upsellingProducts?.products?.length && !upsellingProducts.loading && !canOpenUpselling && openUpselling) {
        handleUpsellingPage()
      }
    }
    if (!upsellingProducts.loading && upsellingProducts?.products.length <= 0) {
      setIsUpselling(false)
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
          <UpsellingContainer>
            {
              !upsellingProducts.loading ? (
                <>
                  {
                    !upsellingProducts.error ? upsellingProducts.products.map((product, i) => (
                      <Item key={product.id} name={product.name}>
                        <Image>
                          <img src={optimizeImage(product.images, 'h_300,c_limit')} alt={`product-${i}`} width='150px' height='150px' loading='lazy' />
                        </Image>
                        <Details>
                          <div>
                            <h3 title={product.name}>{product.name}</h3>
                          </div>
                          <p>{parsePrice(product.price)}</p>
                          <Button color='primary' onClick={() => handleFormProduct(product)}>{t('ADD', 'Add')}</Button>
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
        <WrapAutoScroll>
          <HorizontalUpsellingContainer>
            {
              !upsellingProducts.loading ? (
                <AutoScroll scrollId='upSelling'>
                  {
                    !upsellingProducts.error ? upsellingProducts.products.map((product, i) => (
                      <HorizontalItem key={product.id} name={product.name}>
                        <HorizontalDetails>
                          <div>
                            <h3 title={product.name}>{product.name}</h3>
                          </div>
                          <div>
                            <span>{parsePrice(product.price)}</span>
                            {product.offer_price && (
                              <span className='discount'>{parsePrice(product.offer_price)}</span>
                            )}
                          </div>
                          <Button color='primary' onClick={() => handleFormProduct(product)}>{t('ADD', 'Add')}</Button>
                        </HorizontalDetails>
                        <HorizontalImage>
                          <img src={optimizeImage(product.images, 'h_300,c_limit')} alt={`product-${i}`} width='150px' height='150px' loading='lazy' />
                        </HorizontalImage>
                      </HorizontalItem>
                    )) : (
                      <>
                        {upsellingProducts.message}
                      </>
                    )
                  }
                </AutoScroll>
              ) : [...Array(8)].map((item, i) => (
                <SkeletonContainer key={i}>
                  <Skeleton width={250} height={80} />
                </SkeletonContainer>
              ))
            }
          </HorizontalUpsellingContainer>
        </WrapAutoScroll>
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
      <Modal
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        width='70%'
        closeOnBackdrop
        hideCloseDefault
        padding='20px 0 0 0'
        customModal
        isProductForm
      >
        {actualProduct && (
          <ProductForm
            product={actualProduct}
            businessId={actualProduct.api.businessId}
            businessSlug={business.slug}
            onSave={() => handleSaveProduct()}
            onClose={() => setModalIsOpen(false)}
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
