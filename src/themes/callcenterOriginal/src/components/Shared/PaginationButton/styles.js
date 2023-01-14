import styled from 'styled-components'

export const WrapperPagination = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`
export const PageButton = styled.button`
  outline: none;
  border: 1px solid #00000029;
  border-radius: 100%;
  background: transparent;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 5px;

  &:active {
    background: #1c202e;
    color: #fff;
  }
  &:disabled {
    cursor: no-drop;
    pointer-events: none;
  }
`
export const WrapperPageState = styled.div`
  display: flex;
  min-width: 140px;
`
