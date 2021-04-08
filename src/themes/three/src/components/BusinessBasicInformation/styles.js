import styled, { css } from 'styled-components'

export const BusinessContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  max-height: 260px;
  height: 260px;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  min-height: 200px;
  justify-content: center;
  align-items: flex-end;

  ${props => props.isSkeleton && css`
    background-color: #F8F8F8;
  `}

  ${props => props.bgimage && css`
    background-image: url(${props.bgimage});
  `}

  @media (min-width: 490px) {
    justify-content: flex-start;
  }
`

export const BusinessContent = styled.div`
  display: flex;
  max-height: 75px;
  margin-left: 4.5%;
  margin-right: 4.5%;
  margin-bottom: 20px;
`
export const BusinessInfo = styled.div`
  display: flex;
`

export const BusinessInfoItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    font-size: 14px;
    display: flex;
    justify-content: space-between;

    h5 {
      font-weight: 300;
      svg{
        margin-bottom: 1px;
      }
    }

    h5,
    p {
      display: flex;
      align-items: center;
      margin: 0px;
      text-transform: capitalize;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      svg {
        margin-right: 4px;

        ${props => props.theme?.rtl && css`
          margin-left: 4px;
          margin-right: 0px;
        `}

        &.start {
          color: #FFC917;
        }

        &.popup {
          color: ${props => props.theme.colors.primary};
          cursor: pointer;
          transform: rotate(180deg);
        }
      }

      &.bold {
        font-weight: 600;
        font-size: 32px;
      }

      &.type {
        font-weight: 300;
      }
    }

    @media (min-width: 481px) {
      font-size: 16px;
    }
  }
`
export const BusinessBottomContainer = styled.div`
  width: 91%;
  margin: 0 auto;
  padding: 20px 0;

  > div {
    display: flex;
    align-items: center;
    column-gap: 20px;

    p {
      margin: 0px;
    }

    a {
      font-weight: 600;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  @media (max-width: 576px) {
    > div {
      flex-direction: column;
    }
  }
`
