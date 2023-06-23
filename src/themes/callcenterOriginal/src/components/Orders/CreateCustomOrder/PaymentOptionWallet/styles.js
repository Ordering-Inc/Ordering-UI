import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.colors.borderColor};
  ${(props) => props.isBottomBorder && css`
    border-bottom: 1px solid ${(props) => props.theme.colors.gray200};
  `}
  padding: 20px 0;
`

export const SectionLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SectionLeftText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  label {
    margin: 0;
  }
`

export const SectionWrapper = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
`
