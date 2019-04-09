import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  Navbar,
  Container,
  Col,
  Row,
} from 'react-bootstrap';

// import styles
import styles from './HeaderComponent.module.scss';

class HeaderComponent extends Component {
  render() {
    return (
      <Navbar bg="light" fixed="top" variant="light" className={`${styles.HeaderComponent} navbar-static-top justify-content-between`}>
        <Container>
            <Col xs sm md={8} className={styles.NavbarContainer}>
              <Navbar.Brand className={styles.Brand}>
                <span>PWD</span>
                <span>RESET</span>
              </Navbar.Brand>
            </Col>

            <Col xs sm md={4} className={styles.Name}>
              <span> {this.props.user && this.props.user.name }</span>
            </Col>
        </Container>
      </Navbar>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user && state.user.details
})

export default connect(mapStateToProps)(HeaderComponent);