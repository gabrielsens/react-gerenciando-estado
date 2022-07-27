import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";


export const listaDeEventosState = atom<IEvento[]>({
  key: 'listaDeEventosState',
  default: [
    {
        "descricao": "Estudar React",
        "inicio": new Date("2022-07-26T12:00"),
        "fim": new Date("2022-07-26T13:00"),
        "completo": false,
        "id": 1642342747
    },
    {
        "descricao": "Estudar Recoil",
        "inicio": new Date("2022-07-26T09:00"),
        "fim": new Date("2022-07-26T11:00"),
        "completo": false,
        "id": 1642342959
    }
  ]
})
