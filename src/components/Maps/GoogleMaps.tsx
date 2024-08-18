import React, { useState } from 'react';
import {APIProvider, Map } from '@vis.gl/react-google-maps';
import  HoverableMarker  from './HoverableMarker';
import Loader from '../../common/Loader';

interface GoogleMapsProps {
    api_key:  string;
    data : Array<{
    id: number,
    time: string,
    sensorData: {
        lat : number,
        long: number,
        equipment_temp :number,
      };
    spot_id : string,
    }>;
  }


const GoogleMaps : React.FC<GoogleMapsProps> = ({api_key ,data}) => {

    return (
        <>
        
       

        { data ? (
            <APIProvider apiKey={api_key}>
                <Map
                zoom={12} defaultCenter={{lat : data[0].sensorData.lat , lng: data[0].sensorData.long}}
                style={{width: '100vw', height: '100vh'}}
                
                defaultZoom={3}
                gestureHandling={'auto'}
                disableDefaultUI={false}
              >
                  
                  { 
                      data.map( (item) => (
                        <HoverableMarker  
                          key={item.id}
                          position={{lat: item.sensorData.lat, lng: item.sensorData.long}}
                          equipment_temp={item.sensorData.equipment_temp}
                          time={item.time}
                        />
                        ))
                    }
                </Map>
              </APIProvider>
              ) : (<Loader/>)
          }
            
           
     
     
        </>
      );
    }; 

export default GoogleMaps;
