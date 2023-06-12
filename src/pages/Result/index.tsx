import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { IMaskInput } from 'react-imask'
import { Container } from './styles'
import logoImage from '../../assets/images/logo.svg'
import { Button } from '../../components/Button'
import { formatNumber } from '../../utils/formatNumber'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../config/firebase'

export function Result() {
  const [clientName, setClientName] = useState('')
  const [clientWhatsapp, setClientWhatsapp] = useState('')

  const navigate = useNavigate()
  const location = useLocation()
  const { total } = location.state as { total: number }

  async function handleSubmitEmission() {
    const emissionCollection = collection(db, 'emissions')
    await addDoc(emissionCollection, {
      total,
      clientName,
      clientWhatsapp,
      isNeutralized: false,
    })

    navigate('/')
  }

  return (
    <Container>
      <header>
        <img src={logoImage} alt="Nativa Carbono" />
      </header>
      <main>
        <div className="content">
          <h2>Resultado do Cálculo</h2>
          <p>Baseado nas suas respostas sua emissão foi de:</p>
          <span className="result-value">
            {formatNumber(total)} Kg de CO<sub>2</sub>
          </span>
          <p className="contact-text">
            Insira seu nome e Whatsapp para receber os dados referentes a
            neutralização deste evento assim que eles estiverem disponíveis.
          </p>
          <div className="contact-input">
            <input
              type="text"
              placeholder="Seu nome"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
            <IMaskInput
              mask={[{ mask: '(00) 0000-0000' }, { mask: '(00) 00000-0000' }]}
              name="phone"
              placeholder="Seu Whatsapp"
              unmask={true}
              value={clientWhatsapp}
              onAccept={(value) => {
                setClientWhatsapp(value as string)
              }}
            />
          </div>
          <p className="greetings">Obrigado por participar</p>
          <Button onClick={handleSubmitEmission}>Finalizar</Button>
        </div>
      </main>
    </Container>
  )
}
