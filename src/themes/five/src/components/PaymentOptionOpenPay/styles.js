import styled, { css } from 'styled-components'

export const OptionStripeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const WarningMessage = styled.p`
  color: #D81212;
  font-size: 24px;
  padding-left: 10px;
  font-weight: bold;
  opacity: 0.8;
  ${props => props.theme?.rtl && css`
    padding-right: 10px;
    padding-left: 0;
  `}
`

export const CardItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #EAEAEA;
  margin-bottom: 10px;
  ${({ isCursor }) => isCursor && css`
    cursor: pointer;

    &:hover {
      background-color: #F8F9FA;
    }
  `}
`

export const CardItemContent = styled.div`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    margin-right: 13px;
    ${props => props.theme?.rtl && css`
      margin-left: 13px;
      margin-right: 0;
    `}

    img {
      width: 24px;
      height: 20px;
    }
  }

  span {
    font-size: 14px;
    color: ${props => props.theme?.colors.headingColor};
  }
`

export const CardItemActions = styled.div`
  display: flex;
  align-items: center;

  > span {
    font-weight: 600;
    font-size: 12px;
    color: ${props => props.theme?.colors.headingColor};
    margin-right: 20px;
    ${props => props.theme?.rtl && css`
      margin-left: 20px;
      margin-right: 0;
    `}
  }
`

export const BlockLoading = styled.div`
  width: 100%;
  margin-bottom: 10px;
`

export const AddNewCard = styled.div`
  span {
    font-size: 14px;
    color: ${props => props.theme?.colors.primary};
    cursor: pointer;
    user-select: none;
  }
`

export const CardItemActionsWrapper = styled.div`
  position: relative;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7.6px;
    cursor: pointer;
    width: 26px;
    height: 24px;
    transition: all 0.3s;
  
    svg {
      font-size: 20px;
      color: #212121;
    }

    &:hover {
      background: #F8F9FA;
    }
  }
`

export const ActionsContent = styled.div`
  position: absolute;
  z-index: 10;
  top: 100%;
  background: #FFFFFF;
  border: 1px solid #E9ECEF;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  overflow: hidden;
  ${props => props.theme?.rtl ? css`
    left: 0;
  ` : css`
    right: 0;
  `}

  div {
    padding: 10px 13px;
    font-size: 14px;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.3s;
    color: ${props => props.theme?.colors.headingColor};

    &:hover {
      background: #f8f9fa;
    }

    &.delete {
      color: #E63757;
    }
  }
`

export const CardForm = styled.div`
  *{ 
    box-sizing: border-box;
  }
.formDiv {
  width: 400px;
  padding: 30px;
  border-radius: 10px;
  -webkit-box-shadow: -1px 8px 15px 0px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: -1px 8px 15px 0px rgba(0, 0, 0, 0.44);
  box-shadow: -1px 8px 15px 0px rgba(0, 0, 0, 0.44);
}

  input {
    box-sizing: border-box;
    width: 100%;
    margin: 0px;
  }

  button {
    width: 100%;
    margin-top: 20px;
  }
`

export const Row = styled.div`
  display: flex;
  width: 100%;
  margin: 20px 0;
`

export const InputContainer = styled.div`
  flex: 1;
  ${({ isValid, showBorder }) => showBorder && css`
    ${isValid ? css`
      -webkit-box-shadow: 1px 1px 1px 1px #0CAD63;
      -moz-box-shadow: 1px 1px 1px 1px #0CAD63;
      box-shadow: 1px 1px 1px 1px #0CAD63;
    ` : css`
      -webkit-box-shadow: 1px 1px 1px 1px #C90800;
      -moz-box-shadow: 1px 1px 1px 1px #C90800;
      box-shadow: 1px 1px 1px 1px #C90800;
    `}
  `}
  input {
    border: 1px solid #7D7E7B;
  }
  input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #7D7E7B;
    opacity: 1; /* Firefox */
  }

  input:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #7D7E7B;
  }

  input::-ms-input-placeholder { /* Microsoft Edge */
    color: #7D7E7B;
  }
`
