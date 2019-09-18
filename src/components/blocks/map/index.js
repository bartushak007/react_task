import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, withScriptjs, GoogleMap } from 'react-google-maps';

const Map = memo(({ lat, lng }) => {
  // console.log(lat, lng);
  const MapBasic = () => {
    return <GoogleMap defaultZoom={10} defaultCenter={{ lat, lng }} />;
  };

  const MapWrapped = withScriptjs(withGoogleMap(MapBasic));

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
});

Map.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number
};
export default Map;
