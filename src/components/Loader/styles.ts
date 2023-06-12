import { keyframes, styled } from 'styled-components'

const rotation = keyframes`
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: rgba(254, 254, 254, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    width: 60px;
    height: 60px;
    border: 6px solid ${({ theme }) => theme.colors.primary[500]};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${rotation} 1s linear infinite;
  }
`
