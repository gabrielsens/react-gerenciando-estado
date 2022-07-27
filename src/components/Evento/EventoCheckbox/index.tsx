import React from 'react';

import { IEvento } from '../../../interfaces/IEvento';

import useAtualizarEvento from '../../../state/hooks/useAtualizarEvento';

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento}) => {


  const setListaEventos = useAtualizarEvento();

  const handleEventStateComplete = () => {
    const newEvent = {
      ...evento,
      completo: !evento.completo
    }
    // newEvent.completo = !evento.completo

    setListaEventos(newEvent);
  }

  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]

  return (<i className={estilos.join(' ')} onClick={handleEventStateComplete}></i>)
}

export default EventoCheckbox
