import React from 'react'

// bootstrap components
import {
  Spinner
} from 'react-bootstrap';

import styles from './FullPageLoadingComponent.module.scss';

export default function FullPageLoadingComponent() {
  return (
    <div className={styles.FullPageLoadingComponent}>
      <Spinner animation="border" variant="secondary" size="md"/>
    </div>
  )
}
