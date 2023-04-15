import styled, { css } from 'styled-components'

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  opacity: 1;

  ${({ isCartOnProductsList }) => isCartOnProductsList && css`
    position: sticky;
    top: 20px;
  `}

  &:last-child {
    border-bottom: 0;
    margin-bottom: 10px;
  }
`

export const Accordion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: ${({ isClosed }) => isClosed ? 'not-allowed' : 'pointer'};
  transition: background-color 0.6s ease;
  position: relative;
  padding: 10px;

  ${props => props.isClosed && css`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  `}

  .rotate {
    transform: rotate(180deg);
  }

  .accordion__icon {
    transition: transform 0.6s ease;
  }
`

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: capitalize;
  width: 65%;

  > div {
    display: flex;
    align-items: center;

    .go-store {
      user-select: none;
      text-decoration: underline;
      color: ${props => props.theme.colors.primary};
      margin-right: 5px;
      ${props => props.theme?.rtl && css`
        margin-left: 5px;
        margin-right: 0;
      `}
    }

    .clear-cart {
      user-select: none;
      text-decoration: underline;
      color: #d81212;
    }
  }
  ${props => props.theme?.rtl && css`
    margin-right: 10px;
    margin-left: 0;
  `}

  h2, span {
    margin: 0px;
  }

  h2 {
    color: ${props => props.theme.colors.darkTextColor};
    font-size: 16px;
    font-weight: 500;
  }

  @media (min-width: 576px) {
    h2 {
      font-size: 18px;
    }
    span {
      font-size: 13px;
    }
  }
`

export const AccordionContent = styled.div`
  overflow: hidden;
  transition: min-height 0.6s ease;
`

export const AccordionText = styled.div`
  font-weight: 400;
  font-size: 14px;
  padding: 18px;
`

export const BusinessInfo = styled.div`
  display: flex;
  align-items: center;
  width: auto;

  h2 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (min-width: 576px) {
    width: 75%;
  }

`

export const BusinessTotal = styled.div`
  width: ${({ isCartOnProductsList }) => isCartOnProductsList ? '30%' : '25%'};
  display: none;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 13px;
    margin: 0px 5px;
    font-weight: 300;

    &:nth-child(1) {
      font-weight: 500;
    }
  }

  &.closed {
    flex: 1;
    p {
      text-align: center;
      margin: 0px 20px;
      font-size: 13px;
    }
  }

  @media (min-width: 481px) {
    display: flex;
  }
`

export const BusinessActions = styled.div`
  max-width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  span {
    height: 22px;
    svg {
      font-size: 22px;
    }

    &:not(:last-child) {
      margin-right: 5px;
      ${props => props.theme?.rtl && css`
        margin-left: 5px;
        margin-right: 0;
    `}
    }
  }

  @media (min-width: 768px) {
    span {
      height: 27px;
      svg {
        font-size: 27px;
      }
    }
  }
`

export const TimeInfo = styled.div`
  font-size: 13px;
  color: ${props => props.theme.colors.darkTextColor};
`
