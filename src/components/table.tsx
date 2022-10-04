import { Table,Image } from '@mantine/core';
import { useEffect } from 'react';
import { useRecoilValue, selector } from 'recoil';
import { Cpu_state } from '../App';
const elements = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
  ];
const Cpu_state_info = selector({
  key:"Cpu_state_info",
  get:({get}) => {
    const cpu = get(Cpu_state);
    return cpu;
  }
})
export default function Demo() {
    const text = useRecoilValue(Cpu_state);
  console.log(text)
  return (
    <Table highlightOnHover withColumnBorders withBorder >
      <thead>
        <tr>
          <th><Image src="https://cdn.discordapp.com/attachments/988408163340525578/1026873174069092442/ntiloga_01_Rityta_1_3.png" alt="Nti" height={100} width={100}/></th>
          <th>{text.cpu[0].cpu_name}</th>
        </tr>
        <tr>
          <th>Manufacture</th>
          <th>{text.cpu[0].cpu_manufacturer}</th>
        </tr>
        </thead>
    </Table>
  );
}