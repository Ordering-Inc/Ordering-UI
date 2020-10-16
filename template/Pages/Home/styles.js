import styled, { css } from 'styled-components'

export const HomeContainer = styled.div`
  background-color: #F8F8F8;
  display: flex;
  flex-direction: column;
`
export const HomeSection = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 0px 50px 20px;
  background: #FFF;

  ${({ column }) => column && css`
    flex-direction: column;
  `}

  ${({ bgColor }) => bgColor && css`
    background: ${bgColor};
  `}

  ${({ bgimage }) => bgimage && css`
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url(${bgimage});
    background-repeat: no-repeat, repeat;
    width: 100%;
    background-size: cover;
    object-fit: cover;
    background-position: center;
    min-height: 350px;
    justify-content: center;
    align-items: center;
  `}
  @media (max-width: 942px) {
    flex-direction: column;
    &.reverse {
      flex-direction: column-reverse;
    }
  }
  @media (max-width: 942px) {
    padding: 0px 10px 20px;
  }
`

export const HomeTitle = styled.div`
  width: 100%;
  h2 {
    text-align: center;
    font: normal normal normal 45px/79px Lobster;
    letter-spacing: 0px;
    color: #263238;
    font-weight: bold;
  }
  span {
    color: ${props => props.theme.colors.primary};
  }
  @media (max-width: 480px) {
    h2 {
      font-size: 30px;
      margin: 0px;
    }
  }
`

export const StepsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  margin-top: 15px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 30px;
    svg {
      font-size: 70px;
    }
    h3 {
      font-weight: normal;
      text-align: center;
    }
  }
  
  @media (max-width: 1042px) {
    div {
      width: 100%;
      margin-bottom: 20px;
    }
  }
`

// export const TriangleShape = styled.div`
//   transform: rotate(-90deg);
//   width: 262px;
//   height: 229px;
//   margin: 0 auto;
//   padding-top: 15px;
//   position: relative;
//   background: ${props => props.theme.colors.primary};
//   color: white;
//   font-size: 11px;
//   letter-spacing: 0.2em;
//   text-align: center;
//   text-transform: uppercase;
//   &::after {
//     content: ' ';
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     width: 0;
//     height: 0;
//     border-bottom: 122px solid white;
//     border-left: 131px solid transparent;
//     border-right: 131px solid transparent;
//   }
// `

// export const TriangleShape = styled.div`
//   width: 50%;
//   height: 0px;
//   border-top: 100px solid #32557f;
//   border-right: 100px solid transparent;
//   border-bottom: 100px solid #32557f;
// `

export const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  width: 50%;
  div {
    display: flex;
    justify-content: center;
    max-height: 400px;
    max-width:100%;
    img {
      width: auto;
      height : auto;
      max-height: 100%;
      max-width: 100%;
    }
  }
  @media (max-width: 942px) {
    margin-top: 40px;
    width: 100%;
  }
`

export const WrapTextContent = styled.div`
  padding: 20px;
  h2{
    font: normal normal normal 64px/80px ${props => props.theme.fonts.special || 'Georgia'};
  }
  div {
    padding: 0px 70px;
  }
  @media (max-width: 942px) {
    div {
      padding: 0px 0px;
    }
  }
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  div {
    h2 > span {
      color: ${props => props.theme.colors.primary};
    }
  }
  &.center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    h2 {
      font-size: 70px;
      color: #FFF;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    button {
      width: 122px;
    }
  }
  @media (max-width: 942px) {
    width: 100%;
    text-align: center;
    &.center {
      h2 {
        font-size: 45px;
      }
    }
  }
  @media (max-width: 480px) {
    h2 {
      font-size: 20px;
    }
    div {
      text-align: left;
      margin-top: 25px;
    }
    &.center {
      h2 {
        font-size: 24px;
        text-align: center;
      }
    }
  }
`

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  > * {
    margin: 0px 10px
  }
  svg {
    font-size: 4em;
    fill: ${props => props.theme.colors.primary};
  }
`
export const HomeFooter = styled.div`
  font: normal normal normal 128px/160px ${props => props.theme.fonts.special || 'Georgia'};
`

export const Line = styled.div`
    position: relative;
    border: 1px solid red;
    align-self: center;
    &::after{
      content: '';
      position: absolute;
      border: 2px solid red;
      transform: translateY(-50%);
      right: 100%;
      border-radius: 50%
    }
    &::before{
      content: '';
      position: absolute;
      border: 2px solid red;
      left: 100%;
      transform: translateY(-50%);
      border-radius: 50%;
    }
`
