import React from 'react'
import { useLanguage } from 'ordering-components'
import FaFacebookF from '@meronex/icons/fa/FaFacebookF'
import { Twitter, Instagram, Globe } from 'react-bootstrap-icons'
import { LanguageSelector } from '../LanguageSelector'

import {
  Container,
  FooterWrapper,
  FooterBottom,
  Content,
  Description,
  SocialIconList,
  LanguageWrapper,
  SocialGroup
} from './styles'

export const Footer = () => {
  const [, t] = useLanguage()

  return (
    <Container>
      <FooterWrapper>
        <Content>
          <h4>{t('FOOTER_QL1_TITLE')}</h4>
          <div>
            <a rel='noopener noreferrer' target='_blank' href={t('FOOTER_QL1_1_HREF')}>{t('FOOTER_QL1_1')}</a>
          </div>
          <div>
            <a rel='noopener noreferrer' target='_blank' href={t('FOOTER_QL1_2_HREF')}>{t('FOOTER_QL1_2')}</a>
          </div>
          <div>
            <a rel='noopener noreferrer' target='_blank' href={t('FOOTER_QL1_3_HREF')}>{t('FOOTER_QL1_3')}</a>
          </div>
        </Content>
        <Content>
          <h4>{t('FOOTER_QL2_TITLE')}</h4>
          <div>
            <a rel='noopener noreferrer' target='_blank' href={t('FOOTER_QL2_1_HREF')}>{t('FOOTER_QL2_1')}</a>
          </div>
          <div>
            <a rel='noopener noreferrer' target='_blank' href={t('FOOTER_QL2_2_HREF')}>{t('FOOTER_QL2_2')}</a>
          </div>
          <div>
            <a rel='noopener noreferrer' target='_blank' href={t('FOOTER_QL2_3_HREF')}>{t('FOOTER_QL2_3')}</a>
          </div>
        </Content>
        <Content>
          <h4>{t('FOOTER_QL3_TITLE')}</h4>
          <div>
            <a rel='noopener noreferrer' target='_blank' href={t('FOOTER_QL3_1_HREF')}>{t('FOOTER_QL3_1')}</a>
          </div>
          <div>
            <a rel='noopener noreferrer' target='_blank' href={t('FOOTER_QL3_2_HREF')}>{t('FOOTER_QL3_2')}</a>
          </div>
          <div>
            <a rel='noopener noreferrer' target='_blank' href={t('FOOTER_QL3_3_HREF')}>{t('FOOTER_QL3_3')}</a>
          </div>
        </Content>
        <Content>
          <h4>{t('FOOTER_QL4_TITLE')}</h4>
          <div>
            <a rel='noopener noreferrer' target='_blank' href={t('FOOTER_QL4_1_HREF')}>{t('FOOTER_QL4_1')}</a>
          </div>
          <div>
            <a rel='noopener noreferrer' target='_blank' href={t('FOOTER_QL4_2_HREF')}>{t('FOOTER_QL4_2')}</a>
          </div>
          <div>
            <a rel='noopener noreferrer' target='_blank' href={t('FOOTER_QL4_3_HREF')}>{t('FOOTER_QL4_3')}</a>
          </div>
        </Content>
      </FooterWrapper>
      <FooterBottom>
        <Description>{t('FOOTER_DESC', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.')}</Description>
        <SocialIconList>
          <LanguageWrapper>
            <Globe />
            <LanguageSelector />
          </LanguageWrapper>
          <SocialGroup>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'><FaFacebookF /></a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'><Twitter /></a>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'><Instagram /></a>
          </SocialGroup>
        </SocialIconList>
      </FooterBottom>
    </Container>
  )
}
