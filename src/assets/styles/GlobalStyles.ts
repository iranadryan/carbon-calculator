import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.base.white};
    font-family: 'Manrope', sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.base[700]};
  }

  input, button, textarea, select {
    font-family: 'Manrope', sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.base[700]};
  }

  button {
    appearence: none;
    cursor: pointer;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }

  p {
    line-height: 140%;
  }

  strong {
    font-weight: 600;
    letter-spacing: -0.01em;
    display: block;
  }

  h1, 
  h2, 
  h3, 
  h4 {
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -0.01em;
  }

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 28px;
  }

  h3 {
    font-size: 24px;
  }

  h4 {
    font-size: 20px;
  }
`
