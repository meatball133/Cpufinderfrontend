import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppShell, Navbar, Header  } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import RoutesApp from "./components/RoutesApp"
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import HeaderResponsive from './components/header';
const Cpu_state = atom({
  key: 'Cpu_state', // unique ID (with respect to other atoms/selectors)
  default: {cpu:[{cpu_name: "N/A", cpu_manufacturer: "N/A", year:"N/A", time:{total: 0, current: 0}}]}, // default value (aka initial value)
});
function App() {
  return (
    <>
    <AppShell
    header={<Header  height={70}>{<HeaderResponsive></HeaderResponsive>}</Header >}>
    <RoutesApp/>
    </AppShell>
    </>
  );
}
export { Cpu_state };
export default App;
