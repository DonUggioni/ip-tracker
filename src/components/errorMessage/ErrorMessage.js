import React from 'react';

import classes from './ErrorMessage.module.css';

function ErrorMessage(props) {
  return (
    <div className={classes.container}>
      <p className={classes.error_message}>{props.errorMessage}</p>
    </div>
  );
}

export default ErrorMessage;
