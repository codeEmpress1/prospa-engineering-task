import React from 'react';
import {
  Container,
  Row,
  Col,
  // Card,
  // Button
} from 'react-bootstrap'
import './App.css';
// import AccountCard from '../components/Card';
import Main from '../containers/main';
import Sidebar from '../components/Sidebar';
import '../components/Sidebar/index.css'
import styled from 'styled-components';
import NavBar from '../components/Navbar';

const MainRow = styled.div`
  display: flex,
`

function App() {
  return (
    <React.Fragment>
        <NavBar/>
        <MainRow>
          <Sidebar/>

          <Main/>

        </MainRow>
    </React.Fragment>
  );
}

export default App;
