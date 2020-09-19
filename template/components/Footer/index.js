import React from 'react'
import { FooterContainer, Content, Copy, SocialMedia, SocialIcon } from './styles'
import { AiFillFacebook, ImInstagram, AiFillTwitterSquare, FaYoutubeSquare, FaWhatsappSquare } from 'react-icons/all'

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Content>
          <h5>ORDERING, INC.</h5>
          <p>About us</p>
          <p>Stores</p>
          <p>Contact</p>
        </Content>
        <Content>
          <h5>DOCUMENTATION</h5>
          <p>Download app</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </Content>
        <SocialMedia>
          <h5>SOCIAL MEDIA</h5>
          <SocialIcon><AiFillFacebook /></SocialIcon>
          <SocialIcon><ImInstagram /></SocialIcon>
          <SocialIcon><AiFillTwitterSquare /></SocialIcon>
          <SocialIcon><FaYoutubeSquare /></SocialIcon>
          <SocialIcon><FaWhatsappSquare /></SocialIcon>
        </SocialMedia>
        <Copy>
    © 2016 - 2020 Ordering - Create e-commerce Apps and Websites with your brand. All rights reserved. Ordering, Inc.
        </Copy>
      </FooterContainer>

    </>
  )
}
