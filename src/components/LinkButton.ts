import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const LinkButton = styled(Link)`
  width: 100%;
  max-width: 320px;
  height: 60px;
  background: ${({ theme }) => theme.gradients.main};
  border-radius: 999px;
  border: none;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.base[100]};
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(1.05) saturate(0.9);
  }
`
