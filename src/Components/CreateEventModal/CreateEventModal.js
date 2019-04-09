import React, { Component } from 'react';

// import bootstrap
import {
  Modal,
  Button,
  Form,
  Row,
  Col,
  Dropdown
} from 'react-bootstrap'

// import styling
import styles from './CreateEventModa.module.scss'

class CreateEventModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedEventType: {
        id: null,
        name: 'Select'
      },
      selectedMethod: {
        id: null,
        name: 'Select'
      },
      value: '',
      disableButton: false
    }
  }

  changeMethod = (method) => {
    this.setState({
      selectedMethod: method
    })
  }

  renderMethods() {
    if(!this.props.eventMethods) {
      return null;
    }
    return this.props.eventMethods.map((item)=> {
      return <Dropdown.Item key={item.id} onClick={()=>this.changeMethod(item)}>{item.name}</Dropdown.Item>
    })
  }

  changeType = (eventType) => {
    this.setState({
      selectedEventType: eventType
    })
  }

  renderEventTypes() {
    if(!this.props.eventTypes) {
      return null;
    }
    return this.props.eventTypes.map((item)=> {
      return <Dropdown.Item key={item.id} onClick={()=>this.changeType(item)}>{item.name}</Dropdown.Item>
    })
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      alert_method_id: this.state.selectedMethod.id,
      alert_event_id: this.state.selectedEventType.id,
      value: this.state.value
    };

    if(
        !event.alert_method_id
        || !event.alert_event_id
        || event.value === ''
      ) {
        alert("Please fill out the form before submit!");
        return;
      }
      this.setState({
        disableButton: true
      })
      this.props.handleCreateEvent(event);
  }

  render() {
    return (
      // <Modal show={true} onHide={props.handleClose}>
      <Modal show={this.props.showModal} onHide={this.props.toggle} className={styles.CreateEventModal}>
        <Modal.Header closeButton className={styles.Header}>
          <Modal.Title>Add New Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e)=>e.preventDefault()}>
            <Row>
              <Col>
              <Form.Label className={`${styles.Label}`} onSubmit={this.handleSubmit}>EVENT<span className={styles.RedDot}>*</span></Form.Label>
              <Dropdown className={`${styles.Dropdown}`} required>
                <Dropdown.Toggle id="dropdown-events">
                  { this.state.selectedEventType.name }
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {this.renderEventTypes()}
                </Dropdown.Menu>
              </Dropdown>
              </Col>

              <Col>
                <Form.Label className={`${styles.Label}`}>METHOD<span className={styles.RedDot}>*</span></Form.Label>
                <Dropdown className={`${styles.Dropdown}`} required>
                  <Dropdown.Toggle id="dropdown-methods">
                    { this.state.selectedMethod.name }
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {this.renderMethods()}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className={`${styles.Label}`}>VALUE<span className={styles.RedDot}>*</span></Form.Label>
                  <Form.Control
                    name="value"
                    type="text"
                    placeholder="Enter Value"
                    value={this.state.value}
                    onChange={this.handleChange}
                  required/>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.handleSubmit} disabled={this.state.disableButton}>
            {/* <Button variant="primary" onClick={this.handleClose}> */}
            Create Alert
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CreateEventModal;