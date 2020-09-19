import React from 'react'
import { FooterContainer, Content, Copy, SocialMedia, SocialIcon } from './styles'
import { AiFillFacebook, ImInstagram, AiFillTwitterSquare, FaYoutubeSquare, FaWhatsappSquare } from 'react-icons/all'
import { useLanguage } from 'ordering-components'

export const Footer = () => {
  const [, t] = useLanguage()

  return (
    <>
      <FooterContainer>
        <Content>
          <h5>{t('FOOTER_QL1_TITLE')}</h5>
          <a href={t('FOOTER_QL1_1_HREF')}> {t('FOOTER_QL1_1')} </a>
          <a href={t('FOOTER_QL1_2_HREF')}>{t('FOOTER_QL1_2')}</a>
          <a href={t('FOOTER_QL1_3_HREF')}>{t('FOOTER_QL1_3')}</a>
        </Content>
        <Content>
          <h5>{t('FOOTER_QL2_TITLE')}</h5>
          <a href={t('FOOTER_QL2_1_HREF')}>{t('FOOTER_QL2_1')}</a>
          <a href={t('FOOTER_QL2_2_HREF')}>{t('FOOTER_QL2_2')}</a>
          <a href={t('FOOTER_QL2_3_HREF')}>{t('FOOTER_QL2_3')}</a>
        </Content>
        <SocialMedia>
          <h5>{t('FOOTER_QL3_TITLE')}</h5>
          <SocialIcon><AiFillFacebook href={t('FOOTER_QL3_1_HREF')} /></SocialIcon>
          <SocialIcon><ImInstagram href={t('FOOTER_QL3_2_HREF')} /></SocialIcon>
          <SocialIcon><AiFillTwitterSquare href={t('FOOTER_QL3_3_HREF')} /></SocialIcon>
          <SocialIcon><FaYoutubeSquare href={t('FOOTER_QL3_4_HREF')} /></SocialIcon>
          <SocialIcon><FaWhatsappSquare href={t('FOOTER_QL3_5_HREF')} /></SocialIcon>
        </SocialMedia>
        <Copy>
          {t('FOOTER_COPY')}
        </Copy>
      </FooterContainer>

    </>
  )
}
