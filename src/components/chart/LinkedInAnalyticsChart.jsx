import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  // Point,
  Tooltip,
  Legend
);

export default function LinkedInAnalyticsChart() {
  const xValues = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const data = {
    labels: xValues,
    datasets: [
      {
        label: "LinkedIn Analytics",
        data: [65, 59, 80, 81, 56, 55, 40, 70, 75, 77],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  return (
    <div>
      <Bar height={300} width={800} config={config} data={data} />
    </div>
  );
}

// export const Graphy2 = () => {
//   const xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
//   const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

//   const data = {
//     labels: xValues,
//     datasets: [
//       {
//         fill: false,
//         lineTension: 0,
//         backgroundColor: "rgba(0,0,255,1.0)",
//         borderColor: "rgba(0,0,255,0.1)",
//         data: yValues,
//       },
//     ],
//   };
//   const options = {
//     legend: { display: false },
//     scales: {
//       yAxes: [{ ticks: { min: 6, max: 16 } }],
//     },
//   };
//   return (
//     <div>
//       <Line data={data} options={options} />
//     </div>
//   );
// };
