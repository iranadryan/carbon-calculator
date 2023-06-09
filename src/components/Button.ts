import { styled } from 'styled-components'

export const Button = styled.button`
  width: 320px;
  height: 60px;
  background: ${({ theme }) => theme.gradients.main};
  border-radius: 999px;
  border: none;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.base[100]};
  transition: all 0.3s ease-in-out;

  &:hover {
    filter: brightness(1.05) saturate(0.9);
  }
`
