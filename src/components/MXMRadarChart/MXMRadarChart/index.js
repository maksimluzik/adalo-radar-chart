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

const MXMRadarChart = ({ data, labels, title, backgroundColor, borderColor }) => {
  // Fallback mechanism if props are missing or invalid
  labels = Array.isArray(labels) ? labels : MXMRadarChart.defaultProps.labels;
  data = Array.isArray(data) ? data : MXMRadarChart.defaultProps.data;

  // Ensure that labels and data have the same length
  if (labels.length !== data.length) {
    console.error("Labels and data lengths do not match.");
    return <div>Error: Labels and data lengths do not match.</div>;
  }

  // Ensure labels and data arrays are not empty
  if (labels.length === 0 || data.length === 0) {
    return <div>No data available</div>;
  }

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: data,
        backgroundColor: backgroundColor || 'rgba(0, 191, 198, 0.2)',
        borderColor: borderColor || '#00BFC6',
        borderWidth: 2,
        pointBackgroundColor: borderColor || '#00BFC6',
        pointBorderColor: '#003C58',
        pointHoverBackgroundColor: '#003C58',
        pointHoverBorderColor: borderColor || '#00BFC6',
      },
    ],
  };

  const options = {
    scale: {
      ticks: {
        beginAtZero: true,
        fontColor: '#424242', // Default text color
      },
      pointLabels: {
        fontSize: 14,
        fontColor: '#424242', // Default text color
      },
    },
    legend: {
      labels: {
        fontColor: '#424242', // Default text color
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

// Define default props in case Adalo doesn't pass them
MXMRadarChart.defaultProps = {
  labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
  data: [65, 59, 90, 81, 56, 55, 40],
  title: "My Radar Chart",
  backgroundColor: 'rgba(34, 202, 236, 0.2)',
  borderColor: '#00BFC6'
};

export default MXMRadarChart;
