import styled from 'styled-components'

export const WrapButtonText = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 5px;

  svg {
    font-size: 18px;
  }

  > span {
    display: inherit;
  }
`

export const Border = styled.span`
  color: #7f7c7c;
`
export const HeaderItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const PopoverBody = styled.div`
  position: absolute;
  background-color: #FFF;
  color: #333;
  padding: 15px 30px;
  max-width: 600px;
  z-index: 1001;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 10px;
  margin-top: 15px;

  @media (max-width: 992px) {
    padding: 10px 15px;
  }

  @media (max-width: 576px) {
    left: 60px;
  }
`
