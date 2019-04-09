import React from 'react';

import {
  Container
} from 'react-bootstrap';

import Header from '../../Components/Header/HeaderComponent';
import styles from './DashboardLayout.module.scss'

export default function DashboardLayout({children}) {
  return (
    <>
      <Header />
      <Container className={styles.DashboardLayout}>
       { children }
      </Container>
    </>
  )
}
