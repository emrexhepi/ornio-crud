import React from 'react';

import {
  Container
} from 'react-bootstrap';

import Header from '../../Components/Header/HeaderComponent';

export default function DashboardLayout({children}) {
  return (
    <>
      <Header />
      <Container>
       { children }
      </Container>
    </>
  )
}
