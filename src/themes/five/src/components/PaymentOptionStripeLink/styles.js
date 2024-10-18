import styled, { css } from 'styled-components'

export const StripeLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  .message {
    font-size: 14px;
  }

  .user-info {
    display: flex;
    flex-direction: column;

    .inputs-wrapper {
      display: flex;
      > div {
        width: 50%
      }
      input {
        width: 100%;
        padding: 7px 15px 7px 34px;
      }
      .first-input {
        margin-right: 25px;
      }
    }
  }
  .buttons-wrapper {
    display: flex;
    padding-top: 20px;

    div {
      width: 50%;
    }
    div:first-child {
      margin-right: 10px;
    }

    button {
      width: 100%;
      min-height: 45px;
    }
  }
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

export const InputPhoneNumberWrapper = styled.div`
  width: 100%;
  padding-top: 10px;
  p {
    font-weight: 500;
    font-size: 20px;
    color: ${props => props.theme.colors.darkTextColor};
    width: 100%;
    text-align: left;
    margin: 0 0 7px 0;
  }

  .input-icon {
    top: 8px;
  }
`

export const InputBeforeIconWrapper = styled.div`
  position: absolute;
  padding: 6px 6px 6px 10px;

  ${props => props.theme.rtl && css`
    right: 100px;
    left: initial;
  `}

  svg {
    color: #B1BCCC;
    font-size: 16px;
  }
`

export const CodeSentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  h3 {
    font-size: 20px;
  }

  .countdown {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 20px 0;

    div {
      width: 30%;
      background-color: ${props => props.theme.colors.grayDividerColor};
      padding: 10px 10px;
      p {
        text-align: center;
        font-size: 32px;
        color: ${props => props.theme.colors.success500};
        margin: 0;
      }
    }
  }

  button {
    width: 100%;
    min-height: 45px;
  }
`
