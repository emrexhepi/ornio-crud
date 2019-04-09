import React from 'react';

import {
  Container
} from 'react-bootstrap';

export default function LoginLayout({children}) {
  return (
    <Container>
      Login Loyout!
      { children }
    </Container>
  )
}
