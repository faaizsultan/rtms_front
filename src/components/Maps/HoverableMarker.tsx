// src/components/HoverableMarker.tsx

import React, { useState } from 'react';
import { Marker, InfoWindow } from '@vis.gl/react-google-maps';

interface HoverableMarkerProps {
  position: { lat: number; lng: number };
  equipment_temp: number;
  time: string;
}

const HoverableMarker: React.FC<HoverableMarkerProps> = ({ position,equipment_temp,time }) => {
  const [isHovered, setIsHovered] = useState(false);


  const date = new Date(time);
  // Format the date and time in the local time zone
  const formattedDate = date.toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedTime = date.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const customIcon = {
    url: '/red_dot.svg',
    scaledSize: new google.maps.Size(15, 15),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(25, 50),
  };

  return (
    <>
      <Marker 
        position={position} 
        icon={customIcon} 
        onMouseOver={handleMouseOver}
        // onMouseOut={handleMouseOut}
      />
        {isHovered && (
          <InfoWindow position={position} >
            <div 
            //  onMouseOver={handleInfoWindowMouseOver}
             onMouseOut={handleMouseOut}
             style={{ pointerEvents: 'auto' ,fontSize: '16px', fontWeight: 'bold'}}
            >
              <p>{equipment_temp} ♨️</p>
              <p>{formattedDate} , {formattedTime} 🕒</p>
            </div>
          </InfoWindow>
        )}
    </>
  );
};

export default HoverableMarker;
