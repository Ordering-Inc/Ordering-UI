import React from 'react'
import styled from 'styled-components'

export const Option = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 5px 10px;

  img {
    width: 45px;
  }
`

export const PlaceholderTitle = styled(Option)`
  padding: 10px;
`

export const OptionContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const OptionName = styled.div`
  color: #263238;
  font-size: 16px;
  line-height: 1.3;
`
export const OptionCategory = styled.div`
  color: #263238;
  font-size: 12px;
  line-height: 1.3;
`

export const WrapperBusinessImage = styled.div`
  width: 45px;
  height: 45px;
  border: 1px solid #E3E3E3;
  border-radius: 10px;

  svg {
    width: 100%;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
    border-radius: 50%;
  }
`

const BusinessImageStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  border-radius: 10px;
`
export const BusinessImage = (props) => {
  return (
    <BusinessImageStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </BusinessImageStyled>
  )
}
