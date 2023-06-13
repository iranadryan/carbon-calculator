import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: calc(664px + 32px);
  padding: 0 16px;
  margin: 48px auto;

  .totalizers {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    margin-top: 24px;

    .total-card {
      background: ${({ theme }) => theme.gradients.card};
      padding: 16px;
      box-shadow: ${({ theme }) => theme.shadows.card};
      border-radius: 16px;

      strong {
        color: ${({ theme }) => theme.colors.primary[500]};
        font-size: 32px;
        font-weight: 700;
      }
    }
  }

  .actions {
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;

    button {
      padding: 0 16px;
      height: 48px;
      border: none;
      border-radius: 12px;
      background: ${({ theme }) => theme.colors.primary[500]};
      color: ${({ theme }) => theme.colors.base.white};
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  table {
    width: 100%;
    margin-top: 8px;
    border-spacing: 1;
    border-collapse: collapse;
    border-radius: 12px;
    overflow: hidden;

    th,
    td {
      padding: 6px 8px;
    }

    thead {
      tr {
        background: ${({ theme }) => theme.colors.primary[500]};
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

  @media only screen and (max-width: 600px) {
    .totalizers {
      grid-template-columns: 1fr;
      grid-gap: 12px;
    }
  }
`
