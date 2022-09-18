import classes from './ResultsDisplay.module.css';

function ResultsDisplay(props) {
  const locationDetails = `Brooklyn, NY 10001`;

  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <span>Ip Address</span>
        <h2>192.212.174.101</h2>
      </div>
      <div className={classes.info}>
        <span>Location</span>
        <h2>{locationDetails}</h2>
      </div>
      <div className={classes.info}>
        <span>Timezone</span>
        <h2>UTC -5:00</h2>
      </div>
      <div className={classes.info}>
        <span>Isp</span>
        <h2>SpaceX Starlink</h2>
      </div>
    </div>
  );
}

export default ResultsDisplay;
