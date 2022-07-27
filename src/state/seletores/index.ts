import { selector } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { filtroDeEventos, listaDeEventosState } from "../atom";

export const eventosFiltradosState = selector({
  key: 'eventosFiltradosState',
  get: ({ get }) => {
    const filtro = get(filtroDeEventos);
    const todosEventos = get(listaDeEventosState);

    if(filtro?.data) {
      return todosEventos.filter(prevState => {
        return filtro.data?.toISOString().slice(0,10) === prevState.inicio.toISOString().slice(0,10) || filtro.data?.toISOString().slice(0,10) === prevState.fim.toISOString().slice(0,10)
      });
    }
    return todosEventos;
  }
})

export const eventosAsync = selector({
  key: 'eventosAsync',
  get: async () => {
    try {
      const responseEvents = await fetch('http://localhost:3330/eventos');
      const eventosJson: IEvento[] = await responseEvents.json();
      return eventosJson.map(evento => ({
        ...evento,
        inicio: new Date(evento.inicio),
        fim: new Date(evento.fim),
      }))
    } catch {
      return []
    }
  }
})
