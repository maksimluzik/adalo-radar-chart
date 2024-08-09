import React from 'react';
import { View } from 'react-native';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import '@fontsource/merriweather';
import './style.css';

// Registering the required components for Radar Chart
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const MXMRadarChart = ({ data, labels, title }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: data,
        backgroundColor: 'rgba(0, 191, 198, 0.2)',
        borderColor: '#00BFC6',
        borderWidth: 2,
        pointBackgroundColor: '#00BFC6',
        pointBorderColor: '#003C58',
        pointHoverBackgroundColor: '#003C58',
        pointHoverBorderColor: '#00BFC6',
      },
    ],
  };

  const options = {
    scale: {
      ticks: {
        beginAtZero: true,
        fontColor: '#424242',
        fontFamily: 'Merriweather',
      },
      pointLabels: {
        fontSize: 14,
        fontColor: '#424242',
        fontFamily: 'Merriweather',
      },
    },
    legend: {
      labels: {
        fontColor: '#424242',
        fontFamily: 'Merriweather',
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <View className="radar-chart-container">
      <Radar className="radar-chart-canvas" data={chartData} options={options} />
    </View>
  );
};

export default MXMRadarChart;
