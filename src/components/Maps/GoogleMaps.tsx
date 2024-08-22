import React from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import HoverableMarker from './HoverableMarker';
import Loader from '../../common/Loader';

interface GoogleMapsProps {
  api_key: string;
  data: Array<{
    id: number;
    time: string;
    sensorData: {
      lat: number;
      long: number;
      equipment_temp: number;
    };
    spot_id: string;
  }>;
}

const GoogleMaps: React.FC<GoogleMapsProps> = ({ api_key, data }) => {
  // Filter out records where equipment_temp is 200
  const filteredData = data.filter((item) => item.sensorData.equipment_temp !== 200);

  return (
    <>
      {filteredData.length ? (
        <APIProvider apiKey={api_key}>
          <Map
            zoom={12}
            defaultCenter={{ lat: filteredData[0].sensorData.lat, lng: filteredData[0].sensorData.long }}
            style={{ width: '100vw', height: '100vh' }}
            defaultZoom={3}
            gestureHandling={'auto'}
            disableDefaultUI={false}
          >
            {filteredData.map((item) => (
              <HoverableMarker
                key={item.id}
                position={{ lat: item.sensorData.lat, lng: item.sensorData.long }}
                equipment_temp={item.sensorData.equipment_temp}
                time={item.time}
              />
            ))}
          </Map>
        </APIProvider>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default GoogleMaps;
