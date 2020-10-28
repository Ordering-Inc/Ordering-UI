import styled, { css } from 'styled-components'

export const CmsError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  h2{
    color: #D81212
  }
`

export const CmsContainer = styled.div`
  padding: 0 30px;
`

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column
`

export const SkeletonHeader = styled.div`
  width: 100%;
  height: 100px;
  margin: 20px auto;
`

export const SkeletonContent = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  margin-bottom: 10px;
`

export const SkeletonInformation = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 10px;
  ${props => props.theme?.rtl && css`
    margin-left: 10px;
    margin-right: 0;
  `}  
`

export const SkeletonSide = styled.div`
  width: 30%;
  height: 100%;
  margin-left: 10px;
  ${props => props.theme?.rtl && css`
    margin-right: 10px;
    margin-left: 0;    
  `}  
`
