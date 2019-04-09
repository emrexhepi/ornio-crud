import React from 'react'

// import styles
import styles from './PlusBtn.module.scss';

// import from bootstrap
import {
  Button
} from 'react-bootstrap';

export default function PlusBtn(props) {
  return (
    <Button onClick={props.handleClick} variant="success" className={` ${styles.PlusBtn} ${props.className}`}>
      <span>+</span>
    </Button>
  )
}

PlusBtn.defaultProps = {
  handleClick : () => console.log('Button Clicked!')
}


