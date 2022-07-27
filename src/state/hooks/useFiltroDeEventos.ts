import { useSetRecoilState } from "recoil";
import { IFiltroDeEventos } from "../../interfaces/IFiltroDeEventos";
import { filtroDeEventos } from "../atom";

export const useFiltroDeEventos = () => {

  const setFiltroDeEventos = useSetRecoilState<IFiltroDeEventos>(filtroDeEventos);

  return (data: IFiltroDeEventos) => {
    setFiltroDeEventos(data);
  }
}

export default useFiltroDeEventos;
