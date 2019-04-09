import React, { Component } from 'react';

import {
  Navbar,
  Container
} from 'react-bootstrap';

// import styles
import styles from './HeaderComponent.module.scss';

class HeaderComponent extends Component {
  render() {
    return (
      <Navbar bg="light" fixed="top" variant="light" className={`${styles.HeaderComponent} navbar-static-top`}>
        <Container>
          <Navbar.Brand className={styles.Brand}>
            <span>PWD</span>
            <span>RESET</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    )
  }
}

export default HeaderComponent;