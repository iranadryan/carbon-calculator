import { useState } from 'react'
import { Container } from './styles'
import logoImage from '../../assets/images/logo.svg'
import carIcon from '../../assets/images/icons/car.svg'
import bikeIcon from '../../assets/images/icons/bike.svg'
import busIcon from '../../assets/images/icons/bus.svg'
import planeIcon from '../../assets/images/icons/plane.svg'
import { PlaneData } from './components/PlaneData'
import { Button } from '../../components/Button'
import { EmptyState } from '../../components/EmptyState'
import { getDistanceFromLatLon } from '../../utils/getDistanceFromLatLon'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Loader } from '../../components/Loader'

export interface ICalculatorData {
  car: {
    active: boolean
    fuel: string
    distance: string
  }
  bike: {
    active: boolean
    distance: string
  }
  bus: {
    active: boolean
    type: string
    distance: string
  }
  plane: {
    active: boolean
    originState: string
    originCity: string
    destinationState: string
    destinationCity: string
  }
}

export function Calculator() {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<ICalculatorData>({
    car: {
      active: false,
      fuel: 'gasoline',
      distance: '',
    },
    bike: {
      active: false,
      distance: '',
    },
    bus: {
      active: false,
      type: 'intercity',
      distance: '',
    },
    plane: {
      active: false,
      originState: '',
      originCity: '',
      destinationState: '',
      destinationCity: '',
    },
  })
  const navigate = useNavigate()

  const isEmpty =
    !data.car.active &&
    !data.bike.active &&
    !data.bus.active &&
    !data.plane.active
  const canCalculate =
    (data.car.active ? !!data.car.distance : true) &&
    (data.bike.active ? !!data.bike.distance : true) &&
    (data.bus.active ? !!data.bus.distance : true) &&
    (data.plane.active
      ? !!data.plane.originState &&
        !!data.plane.originCity &&
        !!data.plane.destinationState &&
        !!data.plane.destinationCity
      : true)

  function handleToggleVehicle(vehicle: keyof ICalculatorData) {
    setData((prevState) => {
      const newData = { ...prevState }

      if (vehicle === 'car') {
        newData.car.distance = ''
      }

      if (vehicle === 'bike') {
        newData.bike.distance = ''
      }

      if (vehicle === 'bus') {
        newData.bus.distance = ''
        newData.bus.type = 'intercity'
      }

      if (vehicle === 'plane') {
        newData.plane.originState = ''
        newData.plane.originCity = ''
        newData.plane.destinationState = ''
        newData.plane.destinationCity = ''
      }

      newData[vehicle].active = !newData[vehicle].active

      return newData
    })
  }

  async function handleGetDistance(origin: string, destination: string) {
    const { data: originData } = await axios.get(
      encodeURI(`https://geocode.maps.co/search?q=${origin}`),
    )
    const { data: destinationData } = await axios.get(
      encodeURI(`https://geocode.maps.co/search?q=${destination}`),
    )
    const distance = Math.round(
      getDistanceFromLatLon(
        originData[0].lat,
        originData[0].lon,
        destinationData[0].lat,
        destinationData[0].lon,
      ),
    )

    return distance
  }

  async function handleCalculate() {
    setIsLoading(true)
    let total = 0

    if (data.car.active) {
      if (data.car.fuel === 'gasoline') {
        total += Number(data.car.distance) * 0.217
      }

      if (data.car.fuel === 'alcohol') {
        total += Number(data.car.distance) * 0.175
      }

      if (data.car.fuel === 'diesel') {
        total += Number(data.car.distance) * 0.88
      }
    }

    if (data.bike.active) {
      total += Number(data.bike.distance) * 0.064
    }

    if (data.bus.active) {
      if (data.bus.type === 'intercity') {
        total += Number(data.bus.distance) * 0.72339
      }

      if (data.bus.type === 'urban') {
        total += Number(data.bus.distance) * 1.8084779
      }
    }

    if (data.plane.active) {
      const distance = await handleGetDistance(
        `${data.plane.originCity}, ${data.plane.originState}, Brazil`,
        `${data.plane.destinationCity}, ${data.plane.destinationState}, Brazil`,
      )
      console.log(distance)

      if (distance > 6000) {
        console.log(1)
        total += distance * 0.197
      } else if (distance >= 1500) {
        console.log(2)
        total += distance * 0.317
      } else {
        console.log(3)
        total += distance * 0.338
      }
    }

    setIsLoading(false)
    navigate('/result', {
      state: {
        total: Number(total.toFixed(2)),
      },
    })
  }

  return (
    <Container>
      <Loader visible={isLoading} />
      <header>
        <img src={logoImage} alt="Nativa Carbono" />
      </header>
      <main>
        <div className="content">
          <h2>
            Calculadora de Emissão de CO<sub>2</sub>
          </h2>
          <p>
            Selecione todos os tipos de veículos utilizados em seu trajeto até o
            evento e preencha as informações necessárias.
          </p>
          <div className="vehicles-filters">
            <label className="vehicle-card">
              <input
                type="checkbox"
                checked={data.car.active}
                onChange={() => handleToggleVehicle('car')}
              />
              <img src={carIcon} alt="Carro" />
            </label>
            <label className="vehicle-card">
              <input
                type="checkbox"
                checked={data.bike.active}
                onChange={() => handleToggleVehicle('bike')}
              />
              <img src={bikeIcon} alt="Motocicleta" />
            </label>
            <label className="vehicle-card">
              <input
                type="checkbox"
                checked={data.bus.active}
                onChange={() => handleToggleVehicle('bus')}
              />
              <img src={busIcon} alt="Ônibus" />
            </label>
            <label className="vehicle-card">
              <input
                type="checkbox"
                checked={data.plane.active}
                onChange={() => handleToggleVehicle('plane')}
              />
              <img src={planeIcon} alt="Avião" />
            </label>
          </div>
          <div className="selected-data">
            <h3>Veículos Selecionados</h3>
            {isEmpty && <EmptyState />}
            {data.car.active && (
              <div className="data-card">
                <strong>Carro</strong>
                <section>
                  <p>Qual o tipo de combustível utilizado?</p>
                  <select
                    name="fuel"
                    id="fuel"
                    value={data.car.fuel}
                    onChange={(e) =>
                      setData((prevState) => {
                        const newData = { ...prevState }
                        newData.car.fuel = e.target.value
                        return newData
                      })
                    }
                  >
                    <option value="gasoline">Gasolina</option>
                    <option value="alcohol">Álcool</option>
                    <option value="diesel">Diesel</option>
                  </select>
                </section>
                <section>
                  <p>Qual a distância percorrida?</p>
                  <input
                    type="number"
                    placeholder="Insira a kilometragem"
                    value={data.car.distance}
                    onChange={(e) =>
                      setData((prevState) => {
                        const newData = { ...prevState }
                        newData.car.distance = e.target.value
                        return newData
                      })
                    }
                  />
                </section>
              </div>
            )}
            {data.bike.active && (
              <div className="data-card">
                <strong>Moto</strong>
                <section>
                  <p>Qual a distância percorrida?</p>
                  <input
                    type="number"
                    placeholder="Insira a kilometragem"
                    value={data.bike.distance}
                    onChange={(e) =>
                      setData((prevState) => {
                        const newData = { ...prevState }
                        newData.bike.distance = e.target.value
                        return newData
                      })
                    }
                  />
                </section>
              </div>
            )}
            {data.bus.active && (
              <div className="data-card">
                <strong>Ônibus</strong>
                <section>
                  <p>Qual o tipo de ônibus utlizado?</p>
                  <select
                    name="busType"
                    id="busType"
                    value={data.bus.type}
                    onChange={(e) =>
                      setData((prevState) => {
                        const newData = { ...prevState }
                        newData.bus.type = e.target.value
                        return newData
                      })
                    }
                  >
                    <option value="intercity">Ônibus Intermunicial</option>
                    <option value="urban">Ônibus Urbano</option>
                  </select>
                </section>
                <section>
                  <p>Qual a distância percorrida?</p>
                  <input
                    type="number"
                    placeholder="Insira a kilometragem"
                    value={data.bus.distance}
                    onChange={(e) =>
                      setData((prevState) => {
                        const newData = { ...prevState }
                        newData.bus.distance = e.target.value
                        return newData
                      })
                    }
                  />
                </section>
              </div>
            )}
            {data.plane.active && (
              <PlaneData data={data.plane} setData={setData} />
            )}
          </div>
          <Button onClick={handleCalculate} disabled={isEmpty || !canCalculate}>
            Calcular
          </Button>
        </div>
      </main>
    </Container>
  )
}
