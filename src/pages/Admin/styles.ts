import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 664px;
  margin: 48px auto;

  table {
    width: 100%;
    margin-top: 32px;
    border-spacing: 1;
    border-collapse: collapse;

    th,
    td {
      padding: 6px 8px;
    }

    thead {
      tr {
        background: #add144;
        color: ${({ theme }) => theme.colors.base.white};

        th {
          font-weight: 600;
        }
      }
    }

    tbody {
      tr {
        background: #fafafa;

        &:nth-child(even) {
          background: #f2f2f2;
        }
      }
    }
  }
`
