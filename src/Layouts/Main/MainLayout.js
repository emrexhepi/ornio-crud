import React from 'react'

// import bootstrao elements
import {
  Container,
} from 'react-bootstrap';

import styles from './MainLayout.module.scss';

export default function Main({ children }) {
  return (
    <Container fluid className={styles.MainLayout}>
      { children }
    </Container>
  )
};
