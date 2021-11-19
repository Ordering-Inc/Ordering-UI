import styled, { css } from 'styled-components'

export const CategoriesContainer = styled.div`
  display: flex;
  padding: 5px;
  background: ${props => props.theme.colors.backgroundPage};
  z-index: 1000;
  ${({ isVerticalList }) => isVerticalList && css`
    padding: 0px;
    @media (min-width: 768px) {
      position: sticky;
      top: 0;
      height: 100vh;
      overflow-y: scroll;
    }
  `}
  div.special{
    ${props => !props.featured && css`
      display: none;
    `}
  }

  @media (min-width: 768px) {
    padding: 0px 15px;
  }

  /* width */
  &::-webkit-scrollbar {
    width: 0px;
  }
`

export const Accordion = styled.div`
  cursor: pointer;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-top: none;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  box-sizing: border-box;
  padding: 0 15px;
  text-transform: uppercase;
  height: 40px;
  display: flex;
  align-items: center;
  svg {
    display: inline-flex;
    position: absolute;
    top: 0px;
    right: -12px;
    ${props => props.theme?.rtl && css`
      right: unset;
      left: -12px;
      transform: rotate(180deg);
    `}
  }
  &:hover {
    color: ${props => props.theme.colors.primary};
    background-color: #fafafa;
  }
`
export const AccordionPanel = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: #F6EFEA;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-top: none;
  font-size: 15px;
  ul {
    width: 100%;
    padding-left: 0;
    list-style: none;
    margin: 0;
    li {
      box-sizing: border-box;
      padding: 10px 15px;
      padding-left: 30px;
      width: 100%;
      white-space: nowrap;
      &.active {
        color: ${props => props.theme.colors.primary};
      }
      &:hover {
        color: ${props => props.theme.colors.primary};
        font-weight: 500;
      }
      &:first-child {
        padding-top: 12px;
      }
      &:last-child {
        padding-bottom: 12px;
      }
    }
  }
`
