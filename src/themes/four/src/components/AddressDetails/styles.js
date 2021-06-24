import styled, { css } from 'styled-components'

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #CCC;
  padding: 20px;
`

export const Accordion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ active }) => active && css`
    cursor: pointer;
  `}
  transition: background-color 0.6s ease;
  position: relative;
  padding: 10px 0;

  .rotate {
    transform: rotate(180deg);
  }

  .accordion__icon {
    transition: transform 0.6s ease;
  }

  svg {
    color: ${props => props.theme.colors?.grayColor};
    font-size: 20px;
  }
`

export const AccordionContent = styled.div`
  overflow: hidden;
  transition: min-height 0.6s ease;
`

export const WrappMap = styled.div`
  width: 100%;
  margin: auto;
`

export const Map = styled.div`
  font-size: 100%;

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 15px;
    -webkit-user-drag: none;
    aspect-ratio: attr(width) / attr(height)
  }
`

export const Text = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 10px;
  max-width: 80%;

  h4{
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    margin: 0;
  }

  svg {
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
  }

  ${({ active }) => active && css`
    svg {
      color: ${props => props.theme.colors?.primary};
    }
  `}
`
