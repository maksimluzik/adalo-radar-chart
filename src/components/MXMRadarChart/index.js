import React, { Component } from 'react';
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

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

class MXMRadarChart extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      error: null
    };
  }

  render() {
    const { error } = this.state;
    let { data, labels, title, backgroundColor, borderColor } = this.props;

    labels = Array.isArray(labels) ? labels : MXMRadarChart.defaultProps.labels;
    data = Array.isArray(data) ? data : MXMRadarChart.defaultProps.data;

    if (labels.length !== data.length) {
      console.error("Labels and data lengths do not match.");
      this.setState({ error: "Labels and data lengths do not match." });
      return <div>Error: {error}</div>;
    }

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
  }
}

export default MXMRadarChart;
