import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { login } from '../../actions/userActions';

// import styles
import styles from './LoginForm.module.scss';

// impor bootstrap components
import {
  Row, Col, Form, Button
} from 'react-bootstrap';

class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: 'em.rexhepi@gmail.com',
      password: 'papasa12/.',
      submitDisabled: false
    }
  }

  componentDidUpdate() {
    if(this.props.token) {
      this.props.history.push(`/dashboard`);
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      submitDisabled: true
    })

    this.props.login(this.state.email, this.state.password, () => {
      alert('Your username or password is incorrect! Please try again!');
      this.setState({
        submitDisabled: false
      })
    });

  }

  render() {
    return (
      <Row className="justify-content-center justify-align-center">
        <Col xs={12} md={6} className={`${styles.LoginForm} align-middle`}>
          <h3 className={styles.Title}>Sign in</h3>
          <div className={styles.Body}>
            <Form autoComplete="true" onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address<span className={styles.RedDot}>*</span></Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" value={this.state.email} required onChange={ this.handleChange }/>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password<span className={styles.RedDot}>*</span></Form.Label>
                <Form.Control autoComplete="true" name="password" type="password" placeholder="Password" value={this.state.password} required onChange={ this.handleChange } />
              </Form.Group>
              <Button variant="primary" type="submit" className={styles.LoginBtn} disabled={this.state.submitDisabled}>
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

const mapStateToProps = (state) => ({
  token: state.user.token
});

const mapDispatchToProps = (dispatch) => ({
  login: (email, password, callback)=> dispatch(login(email, password, callback))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));