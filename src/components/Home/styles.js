import styled, { css } from 'styled-components'

export const HomeContainer = styled.div`
  background-color: #F8F8F8;
  display: flex;
  flex-direction: column;
`
export const HomeSection = styled.div`
  display: flex;
  align-items: center;
  padding: 50px 0px;
  background: #FFF;
  justify-content: space-between;

  ${({ column }) => column && css`
    flex-direction: column;
  `}

  ${({ bgColor }) => bgColor && css`
    background: ${bgColor};
  `}

  ${({ bgimage }) => bgimage && css`
    background-image: url(${bgimage});
    background-repeat: no-repeat, repeat;
    width: 100%;
    background-size: cover;
    object-fit: cover;
    background-position: center;
  `}
`

export const HomeTitle = styled.div`
  width: 100%;
  h1 {
    text-align: center;
    font: normal normal normal 45px/79px Lobster;
    letter-spacing: 0px;
    color: #263238;
    font-weight: bold;
  }
  span {
    color: #D81212;
  }
`

export const StepsBlock = styled.div`
  display: flex;
  margin-top: 15px;
  /*
  > * {
    margin: 0px 50px;
  }
  */
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
`

// export const TriangleShape = styled.div`
//   transform: rotate(-90deg);
//   width: 262px;
//   height: 229px;
//   margin: 0 auto;
//   padding-top: 15px;
//   position: relative;
//   background: #D81212;
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
  max-width: 50%;
  div {
    display: flex;
    justify-content: center;
    max-height: 300px;
    max-width:100%;
    img {
      width: auto;
      height : auto;
      max-height: 100%;
      max-width: 100%;
    }
  }
`

export const WrapTextContent = styled.div`
  padding: 20px;
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 250px;
  div {
    padding: 0px 80px;
    h1 > span {
      color: #D81212;
    }
  }
  &.center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    h1 {
      font-size: 70px;
      color: #FFF;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    button {
      width: 122px;
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
    font-size: 40px;
    fill: #D81212;
  }
`
