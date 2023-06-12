import { Overlay } from './styles'

interface LoaderProps {
  visible?: boolean
}

export function Loader({ visible = false }: LoaderProps) {
  if (!visible) {
    return null
  }

  return (
    <Overlay>
      <span className="loader"></span>
    </Overlay>
  )
}
