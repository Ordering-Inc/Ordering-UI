import React from 'react'
import { FooterContainer, Content, Copy, SocialMedia, SocialIcon } from './styles'
import FaWhatsapp from '@meronex/icons/fa/FaWhatsapp'
import FaYoutube from '@meronex/icons/fa/FaYoutube'
import FaTwitter from '@meronex/icons/fa/FaTwitter'
import FaInstagram from '@meronex/icons/fa/FaInstagram'
import FaFacebook from '@meronex/icons/fa/FaFacebook'
import { useLanguage } from 'ordering-components'

export const Footer = () => {
  const [, t] = useLanguage()

  return (
    <>
      <FooterContainer>
        <Content>
          <h1><strong>{t('FOOTER_QL1_TITLE')}</strong></h1>
          <a href={t('FOOTER_QL1_1_HREF')} aria-label='ordering'> {t('FOOTER_QL1_1')}</a>
          <a href={t('FOOTER_QL1_2_HREF')} aria-label='ordering channel'>{t('FOOTER_QL1_2')}</a>
          <a href={t('FOOTER_QL1_3_HREF')} aria-label='languages'>{t('FOOTER_QL1_3')}</a>
        </Content>
        <Content>
          <h1><strong>{t('FOOTER_QL2_TITLE')}</strong></h1>
          <a href={t('FOOTER_QL2_1_HREF')} aria-label='facebook'>{t('FOOTER_QL2_1')}</a>
          <a href={t('FOOTER_QL2_2_HREF')} aria-label='languages'>{t('FOOTER_QL2_2')}</a>
          <a href={t('FOOTER_QL2_3_HREF')} aria-label='instagram'>{t('FOOTER_QL2_3')}</a>
        </Content>
        <SocialMedia>
          <h1><strong>{t('FOOTER_QL3_TITLE')}</strong></h1>
          <div>
            <SocialIcon href={t('FOOTER_QL3_1_HREF')} aria-label='facebook'><FaFacebook /></SocialIcon>
            <SocialIcon href={t('FOOTER_QL3_2_HREF')} aria-label='instagram'><FaInstagram /></SocialIcon>
            <SocialIcon href={t('FOOTER_QL3_3_HREF')} aria-label='twitter'><FaTwitter /></SocialIcon>
            <SocialIcon href={t('FOOTER_QL3_4_HREF')} aria-label='youtube'><FaYoutube /></SocialIcon>
            <SocialIcon href={t('FOOTER_QL3_5_HREF')} aria-label='whatsapp'><FaWhatsapp /></SocialIcon>
          </div>
        </SocialMedia>
        <Copy>
          <span>
            {t('FOOTER_COPY', '© 2016 - 2020 Ordering - Create e-commerce Apps and Websites with your brand. All rights reserved. Ordering, Inc.')}
          </span>
        </Copy>
      </FooterContainer>
    </>
  )
}
