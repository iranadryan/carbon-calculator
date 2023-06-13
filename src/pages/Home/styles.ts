import { styled } from 'styled-components'
import headerBackground from '../../assets/images/header-bg-1.png'

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  header {
    margin-top: 100px;
    height: 400px;
    width: 100%;
    background: url(${headerBackground});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 360px;
    }
  }

  main {
    width: 100%;
    max-width: calc(492px + 32px);
    padding: 0 16px;
    align-self: center;
    margin-top: 52px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h1 {
      text-align: center;
    }

    p {
      margin-top: 12px;
    }

    .current-results {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 24px;
      margin-top: 20px;

      .result-card {
        width: 100%;
        padding: 16px 0;
        background: ${({ theme }) => theme.gradients.card};
        border-radius: 16px;
        box-shadow: ${({ theme }) => theme.shadows.card};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        strong {
          font-size: 40px;
          color: ${({ theme }) => theme.colors.primary[500]};
        }
      }
    }

    a {
      margin: 42px auto 52px;
    }
  }

  footer {
    color: ${({ theme }) => theme.colors.base[400]};
    margin: auto 0 48px;
    align-self: center;

    strong {
      display: inline-block;
    }
  }

  @media only screen and (max-width: 600px) {
    main {
      .current-results {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`
