import { useState } from "react";
import { Bar } from "react-chartjs-2";

const ProgressChart = ({ chartData }) => {
  const progressData = {
    labels: chartData.labels,
    datasets: [
      {
        label: "Progress",
        data: chartData.data,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        max: progressData.maxValue, // Customize the maximum value of the y-axis
      },
    },
  };

  return <Bar data={progressData} options={chartOptions} />;
};

export default ProgressChart;
