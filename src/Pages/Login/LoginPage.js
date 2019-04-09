import React, { Component } from 'react';

// import styles
import styles from './LoginPage.module.scss';

// import bootstrap components
import {
  Row,
  Col
} from 'react-bootstrap';

// import login components
import LoginForm from '../../Components/LoginForm/LoginForm';

class LoginPage extends Component {
  render() {
    return (
      <Row className={styles.LoginPage}>
        <Col sm={12} md={5} className={styles.Image}>
          <div className={styles.BlueTint}></div>
        </Col>
        <Col className={`${styles.Content} justify-content-center`} sm={12} md={7}>
          <LoginForm />
        </Col>
      </Row>
    );
  }
}

export default LoginPage;