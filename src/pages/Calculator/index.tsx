import { useState } from 'react'
import { Container } from './styles'
import logoImage from '../../assets/images/logo.svg'
import carIcon from '../../assets/images/icons/car.svg'
import bikeIcon from '../../assets/images/icons/bike.svg'
import busIcon from '../../assets/images/icons/bus.svg'
import planeIcon from '../../assets/images/icons/plane.svg'
import { PlaneData } from './components/PlaneData'
import { Button } from '../../components/Button'

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

  function handleToggleVehicle(vehicle: keyof ICalculatorData) {
    setData((prevState) => {
      const newData = { ...prevState }
      newData[vehicle].active = !newData[vehicle].active

      return newData
    })
  }

  return (
    <Container>
      <header>
        <img src={logoImage} alt="Nativa Carbono" />
      </header>
      <main>
        <div className="content">
          <h2>
            Calculadora de Emissão de CO<sub>2</sub>
          </h2>
          <p>
            Selecione os tipos de veículos utilizados em seu trajeto até o
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
          <Button>Calcular</Button>
        </div>
      </main>
    </Container>
  )
}
