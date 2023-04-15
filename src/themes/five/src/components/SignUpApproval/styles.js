import styled, { css } from 'styled-components'

export const Container = styled.div`
  text-align: center;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
`
export const HeaderSection = styled.div`

`
export const Title = styled.p`
  margin: 0;
  font-size: 24px;
  transform: translate(0px, -22px);
`
export const LogoImage = styled.img`
  width: 100%;
  object-fit: cover;

  ${({ approvalType }) => css`
    ${approvalType ? `
      @media (min-width: 450px) {
        width: 395px;
      }
    ` : `
    @media (min-width: 600px) {
        width: 540px;
    }
    `}
  `}
`
export const BodySection = styled.div`
  margin-top: 25px;
`
export const DescriptionContainer = styled.div`

`
export const Description = styled.p`
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 5px;
  word-break: break-all;
  > .bigger {
    font-weight: 600;
  }
  > .italic {
    font-style: italic;
  }
  > .green-text {
    color: ${props => props.theme.colors.links} !important;
  }
`
export const ProjectInfoContainer = styled.table`
  margin: 35px auto 0;
  width: 100%;
  .bigger {
    font-weight: 600;
  }
  .td-text-right {
    text-align: right;
    padding-right: 20px;
  }
  .td-text-left {
    text-align: left;
  }
  .green-text {
    color: ${props => props.theme.colors.links} !important;
  }
  td {
    > a {
      word-break: break-all;
    }
  }
`
export const FooterSection = styled.div`
  margin: 35px auto 25px;
`
export const ActionGroup = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > button {
    width: 48.5%;
    padding: 5px;
  }
`
export const ContactSection = styled.div`
  margin: 25px auto 0;
  font-style: italic;

  > a.green-text {
    color: ${props => props.theme.colors.links} !important;
  }
`
