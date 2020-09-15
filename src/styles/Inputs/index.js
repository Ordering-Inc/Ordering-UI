import styled, { css } from 'styled-components'
import { darken } from 'polished'
import { Button } from '../Buttons'

const theme = {
  colors: {
    primary: '#D81313',
    primaryContrast: '#FFF',
    secundary: '#9A9A9A',
    secundaryContrast: '#000'
  }
}

export const Input = styled.input`
  background: #FFF;
  color: #BBB;
  border: 1px solid #BBB;
  border-radius: 30px;
  font-size: 16px;
  padding: 7px 15px;
  outline: none;

  &:focus {
    border-color: ${() => darken(0.07, '#CCC')};
  }

  ${({ w }) => w && css`
    width: ${w}%
  `}
`

export const InputGroup = styled.div`
  display: flex;

  & > ${Input}:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 0;
    padding-left: 0;
  }

  & > ${Input}:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0;
    padding-right: 0;
  }
`

export const InputGroupLeft = styled.div`
  border-radius: 34px 0 0 34px;
  line-height: 34px;
  padding-left: 7px;
  padding-right: 7px;
  font-size: 16px;
  border-width: 1px;
  height: 34px;
  border-style: solid;
  border-right-width: 0;

  & ${Button} {
    margin-left: -7px;
  }
`

export const InputGroupRight = styled(InputGroupLeft)`
  border-radius: 0 34px 34px 0;
  line-height: 34px;
  border-right-width: 1px;
  border-left-width: 0;

  & ${Button} {
    margin-left: 0;
    margin-right: -7px;
  }
`

export const InputPrimary = styled(Input)`
  background: #FFF;
  color: ${theme.colors.primary};
  border-color: ${theme.colors.primary};

  &:focus {
    border-color: ${() => darken(0.1, theme.colors.primary)};
  }
`

export const InputSecundary = styled(Input)`
  background: #FFF;
  color: ${theme.colors.secundary};
  border-color: ${theme.colors.secundary};

  &:focus {
    border-color: ${() => darken(0.1, theme.colors.secundary)};
  }
`
export const InputGroupPrimary = styled(InputGroup)`
  & > ${InputGroupLeft} {
    color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
  }
`
