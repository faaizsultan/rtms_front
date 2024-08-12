import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import {getDeviceData} from '../../services/devices';

// Define the data structure
interface SensorData {
  equipment_temp?: number;
  humidity?: number;
  fridge_temp?: number;
  room_sensor?: number;
}

interface DataPoint {
  id: number;
  time: string;
  unix_datetime?: number | null;
  sensorData: SensorData;
  spot_id: string;
}

interface Series {
  name: string;
  data: { x: string, y: number }[];
}

interface ChartOptions {
  chart: {
    height: number;
    type: string;
    zoom: {
      enabled: boolean;
    };
  };
  dataLabels: {
    enabled: boolean;
  };
  stroke: {
    curve: string;
  };
  title: {
    text: string;
    align: string;
  };
  grid: {
    row: {
      colors: string[];
      opacity: number;
    };
  };
  xaxis: {
    type: string;
  };
}

const LineGraph: React.FC = () => {
  const [series, setSeries] = useState<Series[]>([]);
  const [options, setOptions] = useState<ChartOptions>({
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Equipment Temperature Over Time',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      },
    },
    xaxis: {
      type: 'datetime'
    }
  });

  useEffect(() => {
    const sToken = localStorage.getItem('Token');
    // Function ABC fetches the data
    async function fetchData(token : string | null) {
      const data: DataPoint[] = await getDeviceData(token);

      // Extracting equipment_temp and corresponding timestamps
      const tempData = data
        .filter(point => point.sensorData.equipment_temp !== undefined)
        .map(point => ({
          x: new Date(point.time).toISOString(),
          y: point.sensorData.equipment_temp as number
        }));

      setSeries([{ name: "Equipment Temperature", data: tempData }]);
    }

    fetchData(sToken);
  }, []);

    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={options}
              series={series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
};

export default LineGraph;


