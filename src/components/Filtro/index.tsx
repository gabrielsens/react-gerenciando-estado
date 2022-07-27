import React, { useState } from 'react';
import useFiltroDeEventos from '../../state/hooks/useFiltroDeEventos';
import { IFiltroDeEventos } from '../../interfaces/IFiltroDeEventos';
import style from './Filtro.module.scss';

const Filtro: React.FC = () => {

  const [data, setData] = useState('')

  const setFiltroEventos = useFiltroDeEventos();

  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    const filter: IFiltroDeEventos = {}

    if (!data) {
      filter.data = null;
    } else {
      filter.data = new Date(data);
    }
    setFiltroEventos(filter);
  }

  return (<form className={style.Filtro} onSubmit={submeterForm}>
    <h3 className={style.titulo}>Filtrar por data</h3>
    <input
      type="date"
      name="data"
      className={style.input}
      onChange={evento => setData(evento.target.value)}
      placeholder="Por data"
      value={data} />

    <button className={style.botao}>
      Filtrar
    </button>

  </form>)
}

export default Filtro
