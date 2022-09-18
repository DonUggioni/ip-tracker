import classes from './ResultsDisplay.module.css';

function ResultsDisplay(props) {
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <span>Ip Address</span>
        <h2>{props.ip}</h2>
      </div>
      <div className={classes.info}>
        <span>Location</span>
        <h2>Some location</h2>
      </div>
      <div className={classes.info}>
        <span>Timezone</span>
        <h2>{props.timezone}</h2>
      </div>
      <div className={classes.info}>
        <span>Isp</span>
        <h2>{props.isp}</h2>
      </div>
    </div>
  );
}

export default ResultsDisplay;
