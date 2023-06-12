import { useEffect, useState } from 'react'
import { getDocs, collection, where, query } from 'firebase/firestore'
import { Container } from './styles'
import { db } from '../../config/firebase'
import { formatNumber } from '../../utils/formatNumber'

export interface IEmission {
  id: string
  total: number
  clientName: string
  clientWhatsapp: string
  isNeutralized: boolean
}

export function Admin() {
  const [emissions, setEmissions] = useState<IEmission[]>([])

  useEffect(() => {
    async function getEmissions() {
      try {
        const q = query(
          collection(db, 'emissions'),
          where('isNeutralized', '==', false),
        )
        const response = await getDocs(q)
        const data = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as IEmission[]

        setEmissions(data)
      } catch (err) {
        console.log(err)
      }
    }

    getEmissions()
  }, [])

  return (
    <Container>
      <h2>Emissões calculadas</h2>
      <p>Listagem das emissões calculadas que ainda não foram neutralizadas.</p>
      <table>
        <thead>
          <tr>
            <th>Total emitido</th>
            <th>Nome</th>
            <th>Whatsapp</th>
          </tr>
        </thead>
        <tbody>
          {emissions.map((emission) => (
            <tr key={emission.id}>
              <td>{formatNumber(emission.total)} Kg</td>
              <td>{emission.clientName}</td>
              <td>{emission.clientWhatsapp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
