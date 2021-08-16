import styled, { css } from 'styled-components'

export const BusinessSearch = styled.div`
  width: 100%;
  position: relative;
  min-width: 250px;
  margin-left: auto;
    

  input {
    width: 100%;
    background-position: right 10px center;
    background-repeat: no-repeat;
    background-size: 15px;
    box-sizing: border-box;
    padding: 7px 22px;
    border: none;
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    background-color: transparent;
    font-size: 16px;
    line-height: 24px;
    ${({ isCustomLayout }) => !isCustomLayout && css`
      justify-content: center;
      -webkit-transition: width 0.4s ease-in-out;
      transition: width 0.4s ease-in-out; 
    `}
  }

  @media(min-width: 481px){
    width: 50%;
    margin-left: calc(100% - 51.5793654%);
    ${props => props.theme?.rtl && css`
      margin-left: unset;
      margin-right: auto;
    `}
  }
`

export const DeleteContent = styled.span`
  position: absolute;
  font-weight: 300;
  padding: 10px 0;
  color: #333;
  font-size: 1rem;
  right: 0;
  border-radius: 25%;
  max-height: 100%;
  ${props => props.theme?.rtl && css`
    right: unset;
    left: 0;
  `}
  span{
    cursor: pointer;
  }
  img{
    width: 20px;
    transform: translate(-25%, 0%);
    ${props => props.theme?.rtl && css`
      transform: translate(25%, 0%);
    `}
  }
`
export const SearchIcon = styled.div`
  position: absolute;
  bottom: 7px;
  left: 0;
  ${props => props.theme?.rtl && css`
    left: unset;
    right: 0;
  `}

  svg {
    color: ${props => props.theme.colors.disabled};
  }
`
