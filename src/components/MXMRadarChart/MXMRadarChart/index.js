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
  // Ensure labels is an array
  if (!Array.isArray(labels)) {
    console.error("Labels must be an array.");
    return <div>Error: Labels must be an array.</div>;
  }

  // Ensure that labels and data arrays have the same length
  if (labels.length !== data.length) {
    console.warn("Labels and data lengths do not match.");
    return <div>Error: Labels and data lengths do not match.</div>;
  }

  // Ensure that data and labels are not empty
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
        fontColor: '#424242',
      },
      pointLabels: {
        fontSize: 14,
        fontColor: '#424242',
      },
    },
    legend: {
      labels: {
        fontColor: '#424242',
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
