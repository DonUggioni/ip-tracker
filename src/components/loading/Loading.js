import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

import classes from './Loading.module.css';

function Loading() {
  return (
    <div className={classes.container}>
      <RotatingLines
        strokeColor="black"
        strokeWidth="5"
        animationDuration="0.75"
        width="76"
        visible={true}
      />
    </div>
  );
}

export default Loading;
