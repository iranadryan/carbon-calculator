import { useEffect, useMemo, useState } from 'react'
import { Container } from './styles'
import { LinkButton } from '../../components/LinkButton'
import logoImage from '../../assets/images/logo.svg'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { IEmission } from '../Admin'
import { formatNumber } from '../../utils/formatNumber'
import { Loader } from '../../components/Loader'

export function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [emissions, setEmissions] = useState<IEmission[]>([])
  const emissionsTotal = useMemo(
    () => emissions.reduce((acc, curr) => acc + curr.total, 0),
    [emissions],
  )

  useEffect(() => {
    async function getEmissions() {
      try {
        setIsLoading(true)
        const emissionsColletion = collection(db, 'emissions')
        const response = await getDocs(emissionsColletion)
        const data = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as IEmission[]

        setIsLoading(false)
        setEmissions(data)
      } catch (err) {
        setIsLoading(false)
        console.log(err)
      }
    }

    getEmissions()
  }, [])

  return (
    <Container>
      <Loader visible={isLoading} />
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
            <strong>{emissions.length}</strong>
            <span>Pessoas Calcularam</span>
          </div>
          <div className="result-card">
            <strong>{formatNumber(emissionsTotal)}</strong>
            <span>
              Kg De CO<sub>2</sub> Calculados
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
