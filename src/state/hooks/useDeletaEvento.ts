import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom";

const UseDeletaEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

  return (evento: IEvento) => {
    setListaDeEventos(prevState => prevState.filter((event) => (
      event.id !== evento.id
    )));
  }
}

export default UseDeletaEvento;
