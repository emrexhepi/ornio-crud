import React from 'react';

import {
  Container
} from 'react-bootstrap';

export default function DashboardLayout({children}) {
  return (
    <Container>
      Dashboard Loyout!
      { children }
    </Container>
  )
}
