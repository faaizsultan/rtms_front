// src/LineChart.js
import { getDeviceData } from "../../services/devices";
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

const LineChart = (props) => {
  const [chartData, setChartData] = useState(null);
  const sToken = localStorage.getItem('Token');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDeviceData(sToken) // Replace with your API URL
        console.log(response)
        const data =  response;

        if (data !== null){

          const labels = data.map(entry => new Date(entry.time));
          const temperatures = data.map(entry => entry.sensorData.temp).filter(temp => temp !== undefined);

          const filteredLabels = data.filter(entry => entry.sensorData.temp !== undefined).map(entry => new Date(entry.time));
          setChartData({
            labels : filteredLabels,
            datasets: [
              {
                label: 'Temperature',
                data: temperatures,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.1,
              },
            ],
          });
        }else{
          console.log("No Data could be Found")
        }
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };

    fetchData();
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <Line
      data={chartData}
      options={{
        responsive: true,
        animation: {
          duration: 5000, // Animation duration in milliseconds
          easing: 'easeInOutQuad', // Easing function
        },
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Temperature Over Time',
          },
        },
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day',
            },
            title: {
              display: true,
              text: 'Time',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Temperature (°C)',
            },
          },
        },
      }}
    />
  );
};

export default LineChart;
