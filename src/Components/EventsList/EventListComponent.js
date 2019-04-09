import React from 'react'

import {
  Row, Col, Table
} from 'react-bootstrap';

import styles from './EventList.module.scss';

function EventListComponent(props) {
  
  function renderList() {
    if(!props || props == null) {
      return null;
    }

    if(props !== null && props.list && Array.isArray(props.list))
      return props.list.map((item) => (
        <tr key={item.id}>
          <td>{ item.alert_event.name }</td>
          <td>{ item.alert_method.name }</td>
          <td>{ item.value }</td>
          <td className={styles.TdLast}>
            { item.created_at}
          </td>
        </tr>
      )
    );

    return null;
  }

  return (
    <Row>
      <Col>
        <Table hover className={styles.Table}>
          <thead>
            <tr>
              <th>Event</th>
              <th>Method</th>
              <th>Value</th>
              <th className={styles.TdLast}>Created</th>
            </tr>
          </thead>
          <tbody>
            { renderList() }
          </tbody>
        </Table>
      </Col>
    </Row>
  )
}

EventListComponent.defaultProps = {
  list: null
}

export default EventListComponent;