import React from 'react'
import { FooterContainer, Content, Copy, SocialMedia, SocialIcon } from './styles'
import { ImFacebook2, ImInstagram, ImTwitter, ImYoutube, ImWhatsapp } from 'react-icons/all'
import { useLanguage } from 'ordering-components'

export const Footer = () => {
  const [, t] = useLanguage()

  return (
    <>
      <FooterContainer>
        <Content>
          <h5>{t('FOOTER_QL1_TITLE').toUpperCase()}</h5>
          <a href={t('FOOTER_QL1_1_HREF')}> {t('FOOTER_QL1_1')} </a>
          <a href={t('FOOTER_QL1_2_HREF')}>{t('FOOTER_QL1_2')}</a>
          <a href={t('FOOTER_QL1_3_HREF')}>{t('FOOTER_QL1_3')}</a>
        </Content>
        <Content>
          <h5>{t('FOOTER_QL2_TITLE').toUpperCase()}</h5>
          <a href={t('FOOTER_QL2_1_HREF')}>{t('FOOTER_QL2_1')}</a>
          <a href={t('FOOTER_QL2_2_HREF')}>{t('FOOTER_QL2_2')}</a>
          <a href={t('FOOTER_QL2_3_HREF')}>{t('FOOTER_QL2_3')}</a>
        </Content>
        <SocialMedia>
          <h5>{t('FOOTER_QL3_TITLE').toUpperCase()}</h5>
          <div>
            <SocialIcon><ImFacebook2 href={t('FOOTER_QL3_1_HREF')} /></SocialIcon>
            <SocialIcon><ImInstagram href={t('FOOTER_QL3_2_HREF')} /></SocialIcon>
            <SocialIcon><ImTwitter href={t('FOOTER_QL3_3_HREF')} /></SocialIcon>
            <SocialIcon><ImYoutube href={t('FOOTER_QL3_4_HREF')} /></SocialIcon>
            <SocialIcon><ImWhatsapp href={t('FOOTER_QL3_5_HREF')} /></SocialIcon>
          </div>
        </SocialMedia>
        <Copy>
          {t('FOOTER_COPY', '© 2016 - 2020 Ordering - Create e-commerce Apps and Websites with your brand. All rights reserved. Ordering, Inc.')}
        </Copy>
      </FooterContainer>
    </>
  )
}
