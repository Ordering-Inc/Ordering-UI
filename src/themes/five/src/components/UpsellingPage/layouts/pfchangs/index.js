import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils, UpsellingPage as UpsellingPageController } from 'ordering-components'
import AiOutlinePlusCircle from '@meronex/icons/ai/AiOutlinePlusCircle'
import {
  SkeletonContainer,
  HorizontalItem,
  HorizontalImage,
  HorizontalDetails,
  VerticalUpsellingContainer,
  ProductInfo
} from './styles'
import Skeleton from 'react-loading-skeleton'
import { Modal } from '../../../Modal'
import { ProductForm } from '../../../ProductForm/layouts/pfchangs'

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

  useEffect(() => {
    if (!isCustomMode) {
      if (upsellingProducts?.products?.length && !upsellingProducts.loading) {
        setCanOpenUpselling && setCanOpenUpselling(true)
      } else if (!upsellingProducts?.products?.length && !upsellingProducts.loading && !canOpenUpselling && openUpselling) {
        handleUpsellingPage()
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

  const closeModalProductForm = () => {
    setModalIsOpen(false)
  }

  return (
    <>
      <VerticalUpsellingContainer>
        {
          !upsellingProducts.loading ? (
            <>
              {
                (Object.keys(upsellingProducts.error)?.length === 0 && upsellingProducts.products.length > 0) ? upsellingProducts.products.map((product, i) => (
                  <HorizontalItem key={product.id} name={product.name}>
                    <HorizontalImage>
                      <img src={product.images} alt={`product-${i}`} loading='lazy' />
                    </HorizontalImage>
                    <HorizontalDetails>
                      <ProductInfo>
                        <h3 title={product.name}>{product.name}</h3>
                        <p>{product.description}</p>
                        <span>{parsePrice(product.price)}</span>
                      </ProductInfo>
                      <AiOutlinePlusCircle onClick={() => handleFormProduct(product)}>{t('ADD', 'Add')}</AiOutlinePlusCircle>
                    </HorizontalDetails>
                  </HorizontalItem>
                )) : (
                  <div>
                    {upsellingProducts.message || t('NO_UPSELLING_PRODUCTS', 'There are no upselling products')}
                  </div>
                )
              }
            </>
          ) : [...Array(8)].map((item, i) => (
            <SkeletonContainer key={i}>
              <Skeleton width={250} height={100} />
            </SkeletonContainer>
          ))
        }
      </VerticalUpsellingContainer>
      <Modal
        width='60%'
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        padding='0'
        closeOnBackdrop
        disableOverflowX
        hideCloseDefault
      >
        {actualProduct && (
          <ProductForm
            useKioskApp={props.useKioskApp}
            product={actualProduct}
            businessId={actualProduct.api.businessId}
            businessSlug={business.slug}
            onSave={() => handleSaveProduct()}
            closeModalProductForm={closeModalProductForm}
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
