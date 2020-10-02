import styled from 'styled-components'
import { HeaderInvert } from '../../../template/components/Header/styles'

export const HeaderItem = styled.div`
  cursor: pointer;
  color: #333;
  ${HeaderInvert} & {
    color: #FFF;
  }

  p {
    margin: 0px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`

export const PopoverBody = styled.div`
  background-color: #FFF;
  color: #333;
  padding: 15px;
  border-radius: 10px;
  max-width: 500px;
  z-index: 1001;
`

export const PopoverArrow = styled.div`
  width: 0; 
  height: 0; 
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 8px solid #FFF;
  top: -8px;
`
