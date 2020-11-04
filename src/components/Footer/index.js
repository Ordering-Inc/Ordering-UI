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
          <h1>{t('FOOTER_QL1_TITLE')}</h1>
          <a
            rel='noopener noreferrer'
            target='_blank'
            aria-label='link1'
            href={t('FOOTER_QL1_1_HREF')}
          >
            {t('FOOTER_QL1_1')}
          </a>
          <a
            rel='noopener noreferrer'
            target='_blank'
            aria-label='link2'
            href={t('FOOTER_QL1_2_HREF')}
          >
            {t('FOOTER_QL1_2')}
          </a>
          <a
            rel='noopener noreferrer'
            target='_blank'
            aria-label='link3'
            href={t('FOOTER_QL1_3_HREF')}
          >
            {t('FOOTER_QL1_3')}
          </a>
        </Content>
        <Content>
          <h1>{t('FOOTER_QL2_TITLE')}</h1>
          <a
            rel='noopener noreferrer'
            target='_blank'
            aria-label='link4'
            href={t('FOOTER_QL2_1_HREF')}
          >
            {t('FOOTER_QL2_1')}
          </a>
          <a
            rel='noopener noreferrer'
            target='_blank'
            aria-label='link5'
            href={t('FOOTER_QL2_2_HREF')}
          >
            {t('FOOTER_QL2_2')}
          </a>
          <a
            rel='noopener noreferrer'
            target='_blank'
            aria-label='link6'
            href={t('FOOTER_QL2_3_HREF')}
          >
            {t('FOOTER_QL2_3')}
          </a>
        </Content>
        <SocialMedia>
          <h1>{t('FOOTER_QL3_TITLE')}</h1>
          <div>
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
              href={t('FOOTER_QL3_2_HREF')}
              aria-label='instagram'
            >
              <FaInstagram />
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
              href={t('FOOTER_QL3_4_HREF')}
              aria-label='youtube'
            >
              <FaYoutube />
            </SocialIcon>
            <SocialIcon
              target='_blank'
              rel='noreferrer'
              href={t('FOOTER_QL3_5_HREF')}
              aria-label='whatsapp'
            >
              <FaWhatsapp />
            </SocialIcon>
          </div>
        </SocialMedia>
        <Copy>
          {t('FOOTER_COPY', '© 2016 - 2020 Ordering - Create e-commerce Apps and Websites with your brand. All rights reserved. Ordering, Inc.')}
        </Copy>
      </FooterContainer>
    </>
  )
}
