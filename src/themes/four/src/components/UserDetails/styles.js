import styled, { css } from 'styled-components'

export const Container = styled.div`
  border-bottom: 1px solid #CCC;
  padding: 0 20px;
`

export const Accordion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color 0.6s ease;
  position: relative;
  padding: 20px 0;

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

  h1 {
    margin: 0px;
    font-size: 20px;
    display: flex;
    align-items: center;

    svg {
      ${props => props.theme?.rtl ? css`
        margin-left: 10px;
      ` : css`
        margin-right: 10px;
      `}
    }
  }
  &.active h1 svg {
    color: ${props => props.theme.colors?.primary};
  }
`

export const AccordionContent = styled.div`
  overflow: hidden;
  transition: min-height 0.6s ease;
`

export const SideForm = styled.div`
  width: 100%;
  margin-top: 25px;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  ${props => props.theme?.rtl && css`
    text-align: right;
  `}

  > * {
    margin: 8px 0;
    width: 75%;
  }
`
