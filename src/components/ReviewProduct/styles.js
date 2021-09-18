import styled, { css } from 'styled-components'
import { Button } from '../../styles/Buttons'

export const ReviewProductContainer = styled.form``

export const ActionBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const SingleProductReviewContainer = styled.div`
  margin-bottom: 30px;
`

export const HandReviewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 15px;
    color: ${props => props.theme?.colors.headingColor};
    margin: 0;
    color: #344050;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const HandReviewContent = styled.div`
  display: flex;
  align-items: center;
`

export const HandIconWrapper = styled.span`
  margin-left: 15px;

  ${props => props.theme?.rtl && css`
    margin-right: 15px;
    margin-left: 0;
  `}

  svg {
    font-size: 24px;
    color: #B1BCCC;
    cursor: pointer;
    transition: all 0.3s linear;
  }

  ${({ active }) => active && css`
    svg {
      color: ${props => props.theme?.colors.primary};
    }
  `}
`

export const AdditionCommentsWrapper = styled.div``

export const AddCommentHideShow = styled.p`
  text-decoration: underline;
  text-align: center;
  user-select: none;
  cursor: pointer;
  margin: 0;
  transition: all 0.3s linear;
  color: #909BA9;
  font-size: 13px;

  &:hover {
    color: ${props => props.theme?.colors.primary};
  }
  
  ${({ active }) => active && css`
    color: ${props => props.theme?.colors.primary};
  `}
`

export const Comments = styled.div`
  margin-top: 50px;

  p {
    margin-top: 0;
    margin-bottom: 8px;
    font-size: 14px;
    color: #344050;
  }

  textarea {
    width: 100%;
    box-sizing: border-box;
    border-radius: 7.6px;
    min-height: 100px;
  }
`

export const CommentsList = styled.div`
  margin-top: 20px;
`

export const ButtonCustomized = styled(Button)`
  border-radius: 50px;
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
