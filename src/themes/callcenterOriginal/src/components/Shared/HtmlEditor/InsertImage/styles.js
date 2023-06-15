import styled from 'styled-components'

export const InsertImageContainer = styled.div`
  h1 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 25px;
  }
  > button {
    height: 42px;
  }
`

export const ImageListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`

export const WrapperImage = styled.div`
  margin: 5px;
  cursor: pointer;
  transition: all 250ms;
  position: relative;

  &:hover {
    transform: scale(1.1);
  }
  img {
    height: 120px;
    background-color: #CCC;
  }
`

export const CloseButton = styled.div`
  position: absolute;
  cursor: pointer;
  top: 5px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: #E63757;
  width: 24px;
  height: 24px;
  padding: 0 5px;
  svg {
    color: #FFF;
    font-size: 14px;
  }
`

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    font-size: 14px;
  }
`

export const NewImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 20px auto;

  @media (min-width: 768px){
    width: auto;
  }
`

export const Image = styled.div`
  width: 100%;
  height: 130px;
  border-radius: 8px;
  overflow: hidden;
  background: ${({ isImage, theme }) => isImage ? '#FFF' : `${theme.colors.backgroundPage}`};
  cursor: -webkit-grab;
  cursor: grab;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));

  img,
  div {
    width: 100%;
    border-radius: 8px;
    height: 100%;
    overflow: hidden;
  };

  img{
    object-fit: cover;
  }
`

export const Camera = styled.div`
  > * {
    margin-top: 10px;
    width: 30px;
    height: 30px;
  }
`

export const UploadImageIconContainer = styled.div`
  position: absolute;
  top: 0px;
  background: rgba(0,0,0,0.2);
  padding: 4px;
`

export const UploadImageIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #FFF;
  border: 1px dashed #fff;
  span {
    margin: 0;
  }

  svg {   
    width: 45px;
    height: 45px;
  }
`

export const SkeletonWrapper = styled.div`
  span{
    height: 100%;
    position: relative;
    top: -2.5px;
  }
`
