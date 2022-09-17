import { useState } from 'react';

import classes from './Input.module.css';
import arrowIcon from '../../assets/icon-arrow.svg';

function Input(props) {
  const [ipAddress, setIpAddress] = useState('');

  function inputHandler(event) {
    event.preventDefault();
    setIpAddress(event.target.value);
  }

  function clickHandler(event) {
    console.log(ipAddress);
    event.preventDefault();
  }

  return (
    <form
      className={classes.form}
      onChange={inputHandler}
      onClick={clickHandler}
    >
      <input type={props.type} placeholder={props.placeholder} />
      <button className={classes.button}>
        <img src={arrowIcon} alt="Arrow icon" />
      </button>
    </form>
  );
}

export default Input;
