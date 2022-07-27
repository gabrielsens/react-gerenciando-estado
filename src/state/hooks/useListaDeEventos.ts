import { useRecoilValue } from "recoil";
import { eventosFiltradosState } from "../seletores";

const useListaDeEventos = () => {
  const lista = useRecoilValue(eventosFiltradosState);

  return lista;
}

export default useListaDeEventos;
