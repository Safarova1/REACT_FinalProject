import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart: React.FC = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Net salary",
        data: [
          380000, 400000, 230000, 250000, 250000, 300000, 350000, 400000,
          300000, 280000, 350000, 300000,
        ],
        backgroundColor: "#248CD8",
        barThickness: 10,
        borderRadius: 10,
      },
      {
        label: "Tax",
        data: [
          100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000,
          100000, 100000, 100000, 100000,
        ],
        backgroundColor: "#A601FF",
        barThickness: 10,
      },
      {
        label: "Loan",
        data: [
          50000, 60000, 40000, 70000, 60000, 50000, 30000, 40000, 50000, 60000,
          70000, 80000,
        ],
        backgroundColor: "orange",
        barThickness: 10,
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Annual payroll summary",
      },
    },
    scales: {
      y: {
        stacked: true,
        min: 200000,
        max: 600000,
        ticks: {
          stepSize: 100000,
        },
      },
      x: {
        stacked: true,
      },
    },
  };

  return (
    <div style={{ width: "564px", height: "326px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
