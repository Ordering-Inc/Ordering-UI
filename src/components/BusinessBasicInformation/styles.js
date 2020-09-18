import styled, { css } from 'styled-components'

export const BusinessContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  max-height: 260px;
  height: 260px;
  background-color: ${({ isSkeleton }) => isSkeleton && '#F8F8F8'};

  background-image: ${({ bgimage }) =>
    `url(${bgimage})`
  };
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 200px;
  justify-content: flex-start;
  align-items: flex-end;
`

export const BusinessContent = styled.div`
  display: flex;
  background-color: #FFF;
  padding: 10px;
  border-radius: 10px;
  margin: 20px;
  max-height: 75px;
  width: 340px;
`

export const WrapperBusinessLogo = styled.div`
  max-width: 75px;
  max-height: 75px;
  height: 75px;
  width: 75px;
`

export const BusinessLogo = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;

  ${({ bgimage }) => bgimage && css`
    background-image: url(${bgimage});
  `}
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 75px;
  border-radius: 10px;
`

export const BusinessInfo = styled.div`
  display: flex;
  width: calc(100% - 75px);
`

export const BusinessInfoItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 5px 0px 16px;
  div {
    display: flex;
    justify-content: space-between;
    p {
      display: flex;
      align-items: center;
      margin: 0px;
      text-transform: capitalize;
      svg {
        margin-right: 4px;
        &.start {
          color: #FFC917;
        }
        &.popup {
          color: #D81313;
          cursor: pointer;
        }
      }
    }
    p.bold {
      font-weight: bold;
    }
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`
