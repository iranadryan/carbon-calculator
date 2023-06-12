import { styled } from 'styled-components'
import headerBackground from '../../assets/images/header-bg-2.png'

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  header {
    height: 320px;
    width: 100%;
    background: url(${headerBackground});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-top: -48px;
    }
  }

  main {
    width: 100%;
    background: ${({ theme }) => theme.colors.base.white};
    border-radius: 48px 48px 0 0;
    margin-top: -48px;
    display: flex;
    justify-content: center;

    .content {
      width: 100%;
      max-width: 664px;
      margin-top: 48px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h2,
      > p {
        width: 100%;
        max-width: 492px;
        align-self: center;
      }

      h2 {
        text-align: center;
      }

      > p {
        margin-top: 12px;
      }

      .vehicles-filters {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 24px;
        margin-top: 32px;

        .vehicle-card {
          width: 100%;
          height: 120px;
          background: ${({ theme }) => theme.gradients.card};
          border-radius: 16px;
          box-shadow: ${({ theme }) => theme.shadows.card};
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          cursor: pointer;

          input {
            appearance: none;
            position: absolute;
            top: 8px;
            right: 8px;
            width: 20px;
            height: 20px;
            border: none;
            border-radius: 999px;
            background: ${({ theme }) => theme.colors.base.white};

            &:checked::before {
              content: '';
              height: 12px;
              width: 12px;
              background: ${({ theme }) => theme.gradients.main};
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              border-radius: 999px;
            }
          }
        }
      }

      .selected-data {
        margin-top: 32px;
        width: 100%;

        h3 {
          text-align: center;
        }

        .data-card {
          margin-top: 12px;
          width: 100%;
          padding: 16px;
          background: ${({ theme }) => theme.gradients.card};
          border-radius: 16px;
          box-shadow: ${({ theme }) => theme.shadows.card};

          strong {
            margin-bottom: 8px;
          }

          section {
            display: flex;
            align-items: center;
            gap: 8px;

            & + section {
              margin-top: 4px;
            }

            input {
              width: 200px;
              font-size: 14px;
              padding: 6px 8px;
              outline: 0;
              background: ${({ theme }) => theme.colors.base.white};
              border: 1px solid ${({ theme }) => theme.colors.base[200]};
              border-radius: 8px;
              transition: all 0.2s ease;

              &:focus {
                border-color: ${({ theme }) => theme.colors.primary[500]};
              }
            }

            select {
              width: 200px;
              font-size: 14px;
              padding: 6px 8px;
              outline: 0;
              background: ${({ theme }) => theme.colors.base.white};
              border: 1px solid ${({ theme }) => theme.colors.base[200]};
              border-radius: 8px;
              transition: all 0.2s ease;

              &:focus {
                border-color: ${({ theme }) => theme.colors.primary[500]};
              }
            }
          }
        }
      }

      button {
        margin: 32px auto 48px;
      }
    }
  }
`
