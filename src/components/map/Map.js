import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import classes from './Map.module.css';
import mapIcon from '../../assets/icon-location.svg';

function Map(props) {
  const API_KEY = process.env.REACT_APP_GOOGLE_API;

  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  const center = {
    lat: props.lat,
    lng: props.lng,
  };

  return (
    <div className={classes.container}>
      <LoadScript className={classes.container} googleMapsApiKey={API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          options={{ disableDefaultUI: true }}
        >
          <MarkerF icon={mapIcon} position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;
