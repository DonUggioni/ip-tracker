import { useRef } from 'react';

import classes from './Input.module.css';
import arrowIcon from '../../assets/icon-arrow.svg';

function Input(props) {
  const ipInputRef = useRef();

  function clickHandler(event) {
    event.preventDefault();
    const enteredIp = ipInputRef.current.value;
    props.onEnteredIp(enteredIp);
    ipInputRef.current.value = '';
  }

  return (
    <form className={classes.form} onClick={clickHandler}>
      <input
        type={props.type}
        placeholder={props.placeholder}
        ref={ipInputRef}
      />
      <button className={classes.button}>
        <img src={arrowIcon} alt="Arrow icon" />
      </button>
    </form>
  );
}

export default Input;
