import styled from 'styled-components'

export const SpreadSheetContainer = styled.div`
  overflow: auto;
  > div {
    min-width: 900px !important;
  }

  .ht_clone_top {
    height: auto !important;
  }
  .wtHider {
    width: 100% !important;
    .wtSpreader {
      width: 100% !important;
    }
  }

  .ht_master .wtHolder {
    @media (min-width: 768px) {
      max-height: calc(100vh - 230px);
    }
  }

  .wtHolder {
    width: 100% !important;
    height: 100% !important;
  }

  table {
    min-width: 900px;

    td {
      padding: 15px;
      text-align: left !important;
      font-size: 13px;
      color: ${props => props.theme.colors.headingColor} !important;
      border: none !important;
      border-bottom: 1px solid #E9ECEF !important;
    }
    th {
      text-align: left;
      background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
      border: none !important;
      border-bottom: 1px solid #B1BCCC !important;
      > div {
        padding: 15px !important;
        font-size: 14px;
        font-weight: bold;
        color: ${props => props.theme.colors.headingColor} !important;
      }
    }
  }

  #hot-display-license-info {
    display: none;
  }
`
