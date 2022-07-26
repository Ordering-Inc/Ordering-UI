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
  WrapAutoScroll,
  UpsellingPageTitleWrapper,
  Divider
} from './styles'
import { Button } from '../../styles/Buttons'
import MdClose from '@meronex/icons/md/MdClose'
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
    isCustomMode
  } = props
  const [, t] = useLanguage()
  const [actualProduct, setActualProduct] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [{ parsePrice }] = useUtils()
  const [showUpselling, setShowUpSelling] = useState(true)

  useEffect(() => {
    if (!isCustomMode) {
      if (upsellingProducts?.products?.length && !upsellingProducts.loading) {
        setCanOpenUpselling && setCanOpenUpselling(true)
      } else if (!upsellingProducts?.products?.length && !upsellingProducts.loading && !canOpenUpselling && openUpselling) {
        handleUpsellingPage()
      }
    }
  }, [upsellingProducts.loading, upsellingProducts?.products.length])

  useEffect(() => {
    if (upsellingProducts?.products.length > 0) setShowUpSelling(true)
    else setShowUpSelling(false)
  }, [upsellingProducts?.products.length])

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
                    (!upsellingProducts.error && upsellingProducts.products?.length > 0) ? upsellingProducts.products.map((product, i) => (
                      <Item key={product.id} name={product.name}>
                        <Image>
                          <img src={product.images} alt={`product-${i}`} width='150px' height='150px' loading='lazy' />
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
                      <div>
                        {upsellingProducts.message || t('NO_UPSELLING_PRODUCTS', 'There are no upselling products')}
                      </div>
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
        showUpselling ? (
          <>
            <Divider />
            <UpsellingPageTitleWrapper>
              <p>{t('UPSELLING_QUESTION', 'Do you want something else?')}</p>
              <MdClose onClick={() => setShowUpSelling(false)} />
            </UpsellingPageTitleWrapper>
            <WrapAutoScroll>
              <HorizontalUpsellingContainer>
                {
                  !upsellingProducts.loading ? (
                    <AutoScroll scrollId='upSelling'>
                      {
                        (!upsellingProducts.error && upsellingProducts.products.length > 0) ? upsellingProducts.products.map((product, i) => (
                          <HorizontalItem key={product.id} name={product.name}>
                            <HorizontalDetails>
                              <div>
                                <h3 title={product.name}>{product.name}</h3>
                              </div>
                              <div>
                                <span>{parsePrice(product.price)}</span>
                              </div>
                              <Button color='primary' onClick={() => handleFormProduct(product)}>{t('ADD', 'Add')}</Button>
                            </HorizontalDetails>
                            <HorizontalImage>
                              <img src={product.images} alt={`product-${i}`} loading='lazy' />
                            </HorizontalImage>
                          </HorizontalItem>
                        )) : (
                          <div>
                            {upsellingProducts.message || t('NO_UPSELLING_PRODUCTS', 'There are no upselling products')}
                          </div>
                        )
                      }
                    </AutoScroll>
                  ) : [...Array(8)].map((item, i) => (
                    <SkeletonContainer key={i}>
                      <Skeleton width={250} height={100} />
                    </SkeletonContainer>
                  ))
                }
              </HorizontalUpsellingContainer>
            </WrapAutoScroll>
          </>
        ) : (
          <></>
        )
      ) : (
        <>
          {!canOpenUpselling || upsellingProducts?.products?.length === 0 ? '' : (
            <Modal
              title={t('UPSELLING_QUESTION', 'Do you want something else?')}
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
        width='700px'
        padding='0'
        closeOnBackdrop
        disableOverflowX
      >
        {actualProduct && (
          <ProductForm
            useKioskApp={props.useKioskApp}
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
