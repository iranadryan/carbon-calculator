import { Container } from './styles'
import { LinkButton } from '../../components/LinkButton'
import logoImage from '../../assets/images/logo.svg'

export function Home() {
  return (
    <Container>
      <header>
        <img src={logoImage} alt="Nativa Carbono" />
      </header>
      <main>
        <h1>
          Vamos calcular suas emissões de CO<sub>2</sub> até este evento?
        </h1>
        <p>
          Ao final do evento, todas as emissões, computadas aqui, serão
          neutralizadas pela Nativa Carbono através da compra de Créditos de
          Carbono Certificados.
        </p>
        <div className="current-results">
          <div className="result-card">
            <strong>156</strong>
            <span>Pessoas Calcularam</span>
          </div>
          <div className="result-card">
            <strong>258 Kg</strong>
            <span>
              De CO<sub>2</sub> Calculados
            </span>
          </div>
        </div>
        <LinkButton to="/calculator">Iniciar Calculadora</LinkButton>
      </main>
      <footer>
        Uma iniciativa <strong>Nativa Carbono</strong> - 2023
      </footer>
    </Container>
  )
}
