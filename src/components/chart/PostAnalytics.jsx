// import React from "react";
// import { Bar, Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   ArcElement,
//   Tooltip,
//   Legend,
//   PointElement,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   PointElement,
//   Tooltip,
//   Legend,
//   Line
// );

// export default function PostAnalytics() {
//   const xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
//   const data = {
//     labels: xValues,
//     datasets: [
//       {
//         label: "LinkedIn Analytics",
//         data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
//         borderColor: "red",
//         fill: false,
//       },
//       {
//         data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
//         borderColor: "green",
//         fill: false,
//       },
//       {
//         data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
//         borderColor: "blue",
//         fill: false,
//       },
//     ],
//   };
//   const config = {
//     type: "line",
//     data: data,
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true,
//         },
//       },
//     },
//   };
//   return (
//     <div>
//       <Line data={data} config={config} />
//     </div>
//   );
// }
