import React from 'react';
import UseDeletaEvento from '../../state/hooks/useDeletaEvento';
import EventoCheckbox from './EventoCheckbox';
import { IEvento } from '../../interfaces/IEvento'
import style from './Evento.module.scss';

const Evento: React.FC<{ evento: IEvento }> = ({ evento }) => {

  const estilos = [
    style.Evento
  ]

  const setDeletaEvento = UseDeletaEvento();


  const handleDeleteEvent = () => {
    setDeletaEvento(evento);
  }

  if (evento.completo) {
    estilos.push(style.completo)
  }

  return (<div className={estilos.join(' ')}>

    <EventoCheckbox evento={evento} />
    <div className="cards-info">
      <h3 className={style.descricao}>{evento.descricao} - {evento.inicio.toLocaleDateString()}</h3>
    </div>
    <i className="far fa-times-circle fa-2x" onClick={handleDeleteEvent}></i>
  </div>)
}

export default Evento
