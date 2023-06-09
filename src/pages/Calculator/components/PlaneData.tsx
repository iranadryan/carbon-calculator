import React, { useState } from 'react'
import { states, cities } from '../../../utils/brazilStatesAndCities'
import { ICalculatorData } from '..'

interface PlaneDataProps {
  data: {
    active: boolean
    originState: string
    originCity: string
    destinationState: string
    destinationCity: string
  }
  setData: React.Dispatch<React.SetStateAction<ICalculatorData>>
}

export function PlaneData({ data, setData }: PlaneDataProps) {
  const [originCities, setOriginCities] = useState<Array<string[]>>([])
  const [destinationCities, setDestinationCities] = useState<Array<string[]>>(
    [],
  )

  function handleChangeState(type: 'origin' | 'destination', state: string) {
    const citiesToShow = cities.find((item) => item[0] === state)

    if (citiesToShow) {
      const [, citiesData] = citiesToShow as [string, string[][]]
      if (type === 'origin') {
        setData((prevState) => {
          const newData = { ...prevState }
          newData.plane.originState = state
          newData.plane.originCity = ''
          return newData
        })
        setOriginCities(citiesData)
      } else {
        setData((prevState) => {
          const newData = { ...prevState }
          newData.plane.destinationState = state
          newData.plane.destinationCity = ''
          return newData
        })
        setDestinationCities(citiesData)
      }
    }
  }

  return (
    <div className="data-card">
      <strong>Avião</strong>
      <section>
        <p>Qual a origem?</p>
        <select
          name="originState"
          id="originState"
          value={data.originState}
          onChange={(e) => handleChangeState('origin', e.target.value)}
        >
          <option value="" disabled>
            Selecione o Estado
          </option>
          {states.map(([uf, name]) => (
            <option key={uf} value={uf}>{`${uf} - ${name}`}</option>
          ))}
        </select>
        <select
          name="originCity"
          id="originCity"
          value={data.originCity}
          onChange={(e) =>
            setData((prevState) => {
              const newData = { ...prevState }
              newData.plane.originCity = e.target.value
              return newData
            })
          }
        >
          <option value="" disabled>
            Selecione a Cidade
          </option>
          {originCities.map(([name]) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </section>
      <section>
        <p>Qual o destino?</p>
        <select
          name="destinationState"
          id="destinationState"
          value={data.destinationState}
          onChange={(e) => handleChangeState('destination', e.target.value)}
        >
          <option value="" disabled>
            Selecione o Estado
          </option>
          {states.map(([uf, name]) => (
            <option key={uf} value={uf}>{`${uf} - ${name}`}</option>
          ))}
        </select>
        <select
          name="destinationCity"
          id="destinationCity"
          value={data.destinationCity}
          onChange={(e) =>
            setData((prevState) => {
              const newData = { ...prevState }
              newData.plane.destinationCity = e.target.value
              return newData
            })
          }
        >
          <option value="" disabled>
            Selecione a Cidade
          </option>
          {destinationCities.map(([name]) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </section>
    </div>
  )
}
