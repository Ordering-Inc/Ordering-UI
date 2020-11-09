import { lighten } from 'polished'
import styled, { css } from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 100vh;
  position: relative;

  @media (min-width: 768px) {
    height: 100%;
  }

  @media (min-width: 1201px) {
    flex-wrap: nowrap;
  }
`

export const WrapperImage = styled.div`
  width: 100%;
  position: relative;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1201px) {
    width: calc(50% - 10px);
    top: 0;
  }
`

export const ProductImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 300px;

  img {
    border-radius: 16px;
    object-fit: contain;
    height: 100%;
    box-sizing: border-box;
  }

  @media (min-width: 1201px) {
    height: auto;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px;
  position: relative;
  margin-top: 10px;

  h1 {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    color: #263238;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 0px;
    ${props => props.theme?.rtl && css`
      text-align: right;
    `}
  }

  p {
    font-size: 14px;
    font-weight: 200;
    text-align: left;
    margin-top: 0px;

    line-height: 1.5em;
    height: 3em;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    ${props => props.theme?.rtl && css`
      text-align: right;
    `}
  }

  @media (min-width: 381px) {
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }
  }

  @media (min-width: 411px) {
    padding: 10px 0px;
  }

  @media (min-width: 1201px) {
    width: calc(50% - 20px);
    padding: 0px 10px;
    top: 0;
    margin-top: 0px;

    h1 {
      text-align: left;
    }
  }
`

export const ProductEdition = styled.div`
  overflow: auto;
  .error {
    background-color: ${lighten(0.58, '#A52121')};
  }
`

export const SectionTitle = styled.h3`
  font-size: 18px;
  padding: 15px;
  margin: 0px;
  font-weight: 600;
  color: #333333;
  background-color: #F7F7F7;
`

export const ProductComment = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-weight: 300;
    margin-bottom: 5px;
  }
  textarea {
    font-size: 16px;
    font-weight: 300;
    padding: 10px;
    border: 1px solid #CCC;
    outline: none;
    color: #555;
    resize: none;

    &:focus {
      border-color: #555;
    }
  }
`

export const ProductActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0px;
  width: 100%;

  div {
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    svg {
      width: 35px;
      height: 35px;
      cursor: pointer;
    }
  }

  button:disabled,
  button.disabled,
  svg.disabled {
    opacity: 0.5;
  }

  svg.disabled {
    pointer-events: none;
  }

  button.add {
    width: 100%;
    padding: 5px 10px;
    margin: 10px 0px 0px;

    span:last-child {
      float: right;
      margin-right: 10px;
      ${props => props.theme?.rtl && css`
        float: left;
        margin-left: 10px;
        margin-right: 0px;
      `}
    }
    &.soldout {
      width: 100%;
      cursor: not-allowed;
    }
  }

  @media (min-width: 577px) {
    justify-content: space-between;
    flex-direction: row;

    div {
      width: 25%;
    }
    button.add {
      width: 75%;
      margin: 0;
    }
  }

  @media (min-width: 1201px) {
    padding: 10px 0px 0px;

    div {
      width: 30%;
    }
    button.add {
      width: 68%;
    }
  }
`
export const SkeletonBlock = styled.div`
  width: ${({ width }) => width && `${width}%`};
  border-radius: 16px;
  margin: auto;

  span {
    margin-bottom: 10px;
  }
`
