import React from 'react'
import {
  FooterContainer,
  InnerContainer,
  FooterTopContent,
  LogoContainer,
  LinkMainContent,
  LinkBlock,
  AppDownloadContariner,
  WrapAppImgae,
  FooterBottomContainer,
  SocialLinkContainer,
  SocialIcon,
  PolicyContainer,
  CopyWritterContainer
} from './styles'
import FaTwitter from '@meronex/icons/fa/FaTwitter'
import FaInstagram from '@meronex/icons/fa/FaInstagram'
import FaFacebook from '@meronex/icons/ai/AiFillFacebook'
import { useLanguage } from 'ordering-components'
import { useTheme } from 'styled-components'

export const Footer = (props) => {
  const [, t] = useLanguage()
  const theme = useTheme()

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />
      ))}
      <FooterContainer>
        <InnerContainer>
          <FooterTopContent>
            <LogoContainer>
              <img alt='Isotype' width='150px' height='45px' src={theme?.images?.logos?.logotypeInvert} loading='lazy' />
            </LogoContainer>
            <LinkMainContent>
              <LinkBlock>
                <h1>{t('ABOUT_ORDERING', 'About ordering')}</h1>
                <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                  {t('READ_OUR_BLOG', 'Read our blog')}
                </a>
                <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                  {t('BUY_GIFT_CARDS', 'Buy gift cards')}
                </a>
                <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                  {t('CREATE_A_BUSINESS_ACCOUNT', 'Create a business account')}
                </a>
                <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                  {t('ADD_YOUR_RESTAURANT', 'Add your restaurant')}
                </a>
                <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                  {t('SIGN_UP_TO_DELIVERY', 'Sign up to deliver')}
                </a>
              </LinkBlock>
              <LinkBlock>
                <h1>{t('GET_HELP', 'Get Help')}</h1>
                <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                  {t('READ_FAQS', 'Read FAQs')}
                </a>
                <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                  {t('VIEW_ALL_CITIES', 'View all cities')}
                </a>
                <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                  {t('VIEW_ALL_COUNTRIES', 'View all countries')}
                </a>
                <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                  {t('RESTAURANTS_NEAR_ME', 'Restaurants near me')}
                </a>
                <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                  {t('SAVE_ON_YOUR_FIRST_ORDER', 'Save on your first order')}
                </a>
              </LinkBlock>
            </LinkMainContent>
          </FooterTopContent>
          <AppDownloadContariner>
            <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')} className='right'>
              <WrapAppImgae>
                <img src={theme?.images?.general?.appStore} alt='app store' />
              </WrapAppImgae>
            </a>
            <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')} className='right'>
              <WrapAppImgae>
                <img src={theme?.images?.general?.googlePlay} alt='google play' />
              </WrapAppImgae>
            </a>
          </AppDownloadContariner>
          <FooterBottomContainer>
            <SocialLinkContainer>
              <SocialIcon
                target='_blank'
                rel='noreferrer'
                href={t('FOOTER_QL3_1_HREF')}
                aria-label='facebook'
              >
                <FaFacebook />
              </SocialIcon>
              <SocialIcon
                target='_blank'
                rel='noreferrer'
                href={t('FOOTER_QL3_3_HREF')}
                aria-label='twitter'
              >
                <FaTwitter />
              </SocialIcon>
              <SocialIcon
                target='_blank'
                rel='noreferrer'
                href={t('FOOTER_QL3_2_HREF')}
                aria-label='instagram'
              >
                <FaInstagram />
              </SocialIcon>
            </SocialLinkContainer>
            <PolicyContainer>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('PRIVACY_POLICY', 'Privacy policy')}
              </a>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('TERMS', 'Terms')}
              </a>
              <a rel='noopener noreferrer' target='_blank' aria-label='link1' href={t('FOOTER_QL1_1_HREF')}>
                {t('PRICIING', 'Pricing')}
              </a>
            </PolicyContainer>
          </FooterBottomContainer>
          <CopyWritterContainer>
            {t('COPRYWRITTER_FRONT', 'reCAPTCHA and Google protect this site. Privacy Policy and Terms of Service apply. © 2021 Ordering')}
          </CopyWritterContainer>
        </InnerContainer>
      </FooterContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />
      ))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
    </>
  )
}
