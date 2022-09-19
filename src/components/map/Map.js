import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import classes from './Map.module.css';
import mapIcon from '../../assets/icon-location.svg';

function Map(props) {
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
      <LoadScript
        className={classes.container}
        googleMapsApiKey="AIzaSyBXWDdRP_3OR0oFccUwY2XvL1VuDeXZHfk"
      >
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;
