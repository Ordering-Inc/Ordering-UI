import styled from 'styled-components'
import React from 'react'

export const Container = styled.div`
  position: relative;
`

export const PhotoWrapper = styled.div`
  display: flex;
  justify-content: center;

  svg {
    width: 220px;
    height: 200px;
  }
`

const ProfessionalPhotoStyled = styled.div`
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  height: 298px;
  width: 314px;
  min-width: 300px;
  border-radius: 7.6px;
`
export const ProfessionalPhoto = (props) => {
  const style = {}
  if (props.bgimage) {
    style.backgroundImage = `url(${props.bgimage})`
  }
  return (
    <ProfessionalPhotoStyled {...props} style={style}>
      {props.children}
    </ProfessionalPhotoStyled>
  )
}

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  > h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;
    margin-top: 27px;
    margin-bottom: 0px;
  }
`

export const Divider = styled.div`
  height: 8px;
  background-color: ${props => props.theme.colors.grayDividerColor};
  margin-left: -20px;
  width: calc(100% + 40px);
`

export const ScheduleWrapper = styled.div`
  margin-top: 30px;

  > div {
    padding: 0px;
  }
  h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 20px;
    margin-top: 0px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  background: ${props => props.theme.colors.backgroundPage};
  padding: 11px 0px 30px 0px;
  border-top: ${props => props.theme.colors.gray200};
  bottom: -30px;
  z-index: 1;

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  button {
    height: 44px;
    width: 100%;
    max-width: 300px;
  }
`
