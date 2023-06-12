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

      .result-value {
        font-size: 48px;
        font-weight: 600;
        align-self: center;
        margin-top: 32px;
      }

      .contact-text {
        max-width: 664px;
        margin-top: 32px;
      }

      .contact-input {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 24px;
        margin-top: 16px;

        input {
          width: 100%;
          height: 48px;
          font-size: 16px;
          padding: 0 12px;
          outline: 0;
          background: ${({ theme }) => theme.colors.base.white};
          border: 1px solid ${({ theme }) => theme.colors.base[200]};
          border-radius: 8px;
          box-shadow: ${({ theme }) => theme.shadows.input};
          transition: all 0.2s ease;

          &:focus {
            border-color: ${({ theme }) => theme.colors.primary[500]};
          }
        }
      }

      button {
        margin: 32px auto 48px;
      }
    }
  }
`
