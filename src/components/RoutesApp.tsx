import {
    Routes,
    Route,
    useRoutes,
    Router
  } from 'react-router-dom';
import { Grid } from '@mantine/core';
import InputWithButton from './info';
import Demo from "./table";

  function RoutesApp() {
    return (
      <Routes>
    <Route path="/" element={
    <>
    <Grid>
    <Grid.Col md={4} lg={4}></Grid.Col>
    <Grid.Col md={4} lg={4}><InputWithButton></InputWithButton></Grid.Col>
    <Grid.Col md={4} lg={4}></Grid.Col></Grid>
    <Grid>
    <Grid.Col md={4} lg={4}></Grid.Col>
    <Grid.Col md={4} lg={4}><Demo/></Grid.Col>
    <Grid.Col md={4} lg={4}></Grid.Col></Grid>
    </>} />
    </Routes>)
  }
  
  export default RoutesApp;