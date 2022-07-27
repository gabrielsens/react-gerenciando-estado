import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { listaDeEventosState } from "../atom"

const useAtualizarEvento = () => {
  const setListaEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)

  return (evento: IEvento) => {
    return setListaEventos(prevState => (
      prevState.map((event) => {
        if(event.id === evento.id) {
          return evento
        }
        return event
      })
    ))
  }
}

export default useAtualizarEvento
