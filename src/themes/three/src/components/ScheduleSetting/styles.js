import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Moment = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  border: 1px solid ${({ theme, active }) => active ? theme.colors.primary : theme.colors.secundary};
  font-weight: 500;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;

  svg {
    font-size: 24px;
  }

  ${({ isRadioButtonStyle }) => isRadioButtonStyle && css`
    border: none;
  `}
`

export const MomentContentWrapper = styled.div`
  padding: 20px;
`

export const Title = styled.h1`
  font-size: 24px;
`
