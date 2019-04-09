import React, { Component } from 'react';

// import styles
import styles from './LoginForm.module.scss';

// impor bootstrap components
import {
  Row, Col, Form, Button
} from 'react-bootstrap';

class LoginForm extends Component {
  render() {
    return (
      <Row className="justify-content-center justify-align-center">
        <Col xs={12} md={6} className={`${styles.LoginForm} align-middle`}>
          <h3 className={styles.Title}>Sign in</h3>
          <div className={styles.Body}>
            <Form >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address<span className={styles.RedDot}>*</span></Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password<span className={styles.RedDot}>*</span></Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit" className={styles.LoginBtn}>
                Submit
              </Button>
            </Form>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.Footer}>
            <Button  variant="light" className={styles.CreateNewBtn}>
              Create new account!
            </Button>
          </div>
        </Col>
      </Row>
    );
  }
}

export default LoginForm;