import emptyIllustrationImage from '../../assets/images/empty-illustration.svg'
import { Container } from './style'

export function EmptyState() {
  return (
    <Container>
      <img src={emptyIllustrationImage} alt="Lista vazia" />
      <h4>Nenhum selecionado</h4>
      <span>Selecione pelo menos um veículo para calcular</span>
    </Container>
  )
}
