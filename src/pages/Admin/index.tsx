import { useEffect, useMemo, useState } from 'react'
import {
  getDocs,
  collection,
  where,
  query,
  updateDoc,
} from 'firebase/firestore'
import { Container } from './styles'
import { db } from '../../config/firebase'
import { formatNumber } from '../../utils/formatNumber'
import excelIcon from '../../assets/images/icons/excel.svg'
import { Loader } from '../../components/Loader'
import { exportExcel } from '../../lib/excelExport'
import { format } from 'date-fns'
export interface IEmission {
  id: string
  total: number
  clientName: string
  clientWhatsapp: string
  isNeutralized: boolean
}

export function Admin() {
  const [isLoading, setIsLoading] = useState(true)
  const [totalEmissions, setTotalEmissions] = useState<IEmission[]>([])
  const [emissions, setEmissions] = useState<IEmission[]>([])
  const totalEmissionsTotal = useMemo(
    () => totalEmissions.reduce((acc, curr) => acc + curr.total, 0),
    [totalEmissions],
  )
  const emissionsTotal = useMemo(
    () => emissions.reduce((acc, curr) => acc + curr.total, 0),
    [emissions],
  )

  async function getEmissions() {
    try {
      setIsLoading(true)
      const collectionRef = collection(db, 'emissions')
      const q = query(collectionRef, where('isNeutralized', '==', false))
      const [responseTotal, response] = await Promise.all([
        getDocs(collectionRef),
        getDocs(q),
      ])
      const dataTotal = responseTotal.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as IEmission[]
      const data = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as IEmission[]

      setTotalEmissions(dataTotal)
      setEmissions(data)
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      console.log(err)
    }
  }

  async function handleNeutralize() {
    setIsLoading(true)
    const collectionRef = collection(db, 'emissions')
    const q = query(collectionRef, where('isNeutralized', '==', false))
    const response = await getDocs(q)

    await Promise.all(
      response.docs.map((item) => {
        return updateDoc(item.ref, { isNeutralized: true })
      }),
    )

    getEmissions()
  }

  function formatPhoneNumber(number: string) {
    if (number === '') {
      return ''
    }

    const match = number.match(/^(\d{2})(\d{4}|\d{5})(\d{4})$/)

    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`
    }

    return 'Número inválido'
  }

  function handleExport() {
    exportExcel({
      fileName: `Emissões calculadas até ${format(new Date(), 'dd-MM-yyyy')}`,
      excelData: emissions.map((item) => ({
        NOME: item.clientName,
        WHATSAPP: formatPhoneNumber(item.clientWhatsapp),
        TOTAL: item.total,
      })),
    })
  }

  useEffect(() => {
    getEmissions()
  }, [])

  return (
    <Container>
      <Loader visible={isLoading} />
      <h2>Emissões calculadas</h2>
      <p>Listagem das emissões calculadas que ainda não foram neutralizadas.</p>
      <div className="totalizers">
        <div className="total-card">
          <strong>{formatNumber(totalEmissionsTotal)} Kg</strong>
          <span>Totais Calculado</span>
        </div>
        <div className="total-card">
          <strong>{formatNumber(emissionsTotal)} Kg</strong>
          <span>A ser neutralizado</span>
        </div>
      </div>
      <div className="actions">
        <button className="export-button" onClick={handleExport}>
          <img src={excelIcon} alt="Excel" />
          Exportar
        </button>
        <button onClick={handleNeutralize}>Neutralizar</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Total emitido</th>
            <th>Nome</th>
            <th>Whatsapp</th>
          </tr>
        </thead>
        <tbody>
          {emissions.length === 0 && (
            <tr>
              <td colSpan={3} className="empty-message">
                Nenhuma emissão a ser neutralizada
              </td>
            </tr>
          )}
          {emissions.map((emission) => (
            <tr key={emission.id}>
              <td>{formatNumber(emission.total)} Kg</td>
              <td>{emission.clientName}</td>
              <td>{formatPhoneNumber(emission.clientWhatsapp)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
