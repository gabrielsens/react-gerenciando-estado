
import React from 'react'
import style from './Calendario.module.scss';
import ptBR from './localizacao/ptBR.json'
import Kalend, { CalendarEvent, CalendarView, OnEventDragFinish } from 'kalend'
import 'kalend/dist/styles/index.css';
import { useRecoilValue } from 'recoil';
import { listaDeEventosState } from '../../state/atom';
import useAtualizarEvento from '../../state/hooks/useAtualizarEvento';

interface IKalendEvento {
  id?: number
  startAt: string
  endAt: string
  summary: string
  color: string
}

const Calendario: React.FC = () => {

  const eventos = useRecoilValue(listaDeEventosState)

  const listaEventos = useAtualizarEvento();

  const eventosKalend = new Map<string, IKalendEvento[]>();

  const handleDragEvento: OnEventDragFinish = (
      prevEvent: CalendarEvent,
      updateEvent: CalendarEvent,
    ) => {
      const evento = eventos.find(event => event.id === updateEvent.id)

      if(evento) {
        const newEvent = {
          ...evento,
          inicio: new Date(updateEvent.startAt),
          fim: new Date(updateEvent.endAt)
        }

        listaEventos(newEvent);
      }
  }

  eventos.forEach(evento => {
    const chave = evento.inicio.toISOString().slice(0, 10)
    if (!eventosKalend.has(chave)) {
      eventosKalend.set(chave, [])
    }
    eventosKalend.get(chave)?.push({
      id: evento.id,
      startAt: evento.inicio.toISOString(),
      endAt: evento.fim.toISOString(),
      summary: evento.descricao,
      color: 'blue'
    })
  })
  return (
    <div className={style.Container}>
      <Kalend
        events={Object.fromEntries(eventosKalend)}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        timeFormat={'24'}
        weekDayStart={'Monday'}
        calendarIDsHidden={['work']}
        language={'customLanguage'}
        customLanguage={ptBR}
        onEventDragFinish={handleDragEvento}
      />
    </div>
  );
}

export default Calendario
