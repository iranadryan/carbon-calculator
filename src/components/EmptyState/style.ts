import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  h4 {
    margin-top: 16px;
  }

  span {
    color: ${({ theme }) => theme.colors.base[400]};
  }
`
