import styled, { css } from 'styled-components'
import { Button } from '../../../../styles/Buttons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 7.6px;
  padding: 20px;
  box-shadow: 0px 4px 10px 0px #0000001F;
  margin: 55px 0 30px;
`

export const ReviewOrderContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Comments = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 10px;

  p {
    text-transform: capitalize;
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 15px;
    color: ${props => props.theme?.colors.darkTextColor};
  }

  textarea {
    min-height: 104px;
  }
`

export const Send = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 30px;
  width: 100%;

  span {
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    user-select: none;
  }

  button {
    font-size: 14px;
    padding: 6px 20px;
    width: 300px;
    height: 45px;
    line-height: 0;
    svg {
      color: white;
      font-size: 21px;
      vertical-align: middle;
      margin-left: 8px;
      ${props => props.theme?.rtl && css`
        margin-left: 0;
        margin-right: 8px;
        transform: rotateZ(180deg);
      `}
    }
  }
`

export const ReviewsProgressWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;

  p {
    margin-top: 0;
    margin-bottom: 17px;
    font-size: 15px;
    color: ${props => props.theme?.colors.darkTextColor};
    text-align: center;
  }
`

export const ReviewsProgressContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  svg {
    font-size: 4rem;
    color: ${props => props.theme?.colors.primary};
    cursor: pointer;
  }
`

export const LogoAndReviewWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const CommentsList = styled.div`
  p {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 15px;
    color: ${props => props.theme?.colors.darkTextColor};
  }

  button {
    border-radius: 7.6px;
    margin-bottom: 18px;
    margin-right: 40px;

    ${props => props.theme?.rtl && css`
      margin-left: 40px;
      margin-right: 0;
    `}

    svg {
      vertical-align: middle;
      margin-left: 5px;

      ${props => props.theme?.rtl && css`
        margin-right: 5px;
        margin-left: 0;
      `}
    }
  }
`

export const CommentButton = styled(Button)`
  border-radius: 7.6px;
  margin-bottom: 18px;
  margin-right: 18px;
  font-size: 13px;
  color: #414954;
  background: #E9ECEF;
  border: 1px solid #E9ECEF;
  transition: all 0.3s linear;

  ${props => props.theme?.rtl && css`
    margin-left: 18px;
    margin-right: 0;
  `}

  svg {
    vertical-align: middle;
    margin-left: 5px;

    ${props => props.theme?.rtl && css`
      margin-right: 5px;
      margin-left: 0;
    `}
  }

  ${({ active }) => active && css`
    background: ${props => props.theme?.colors.primary};
    border: 1px solid ${props => props.theme?.colors.primary};
    color: white;
  `}
`

export const ContinueContainer = styled.div`
  display: flex;
  align-items: center;
  p{
    flex: 1;
    margin: 0;
  }
`
