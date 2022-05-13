import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Ingresos', 'ISR', 'IVA'],
  datasets: [
    {
      label: 'Comparativa',
      data: [62, 25, 13],
      backgroundColor: [
        'rgba(38, 59, 158, 1)',
        'rgba(255, 0, 35, 1)',
        'rgba(246, 126, 8, 1)'
      ],
      
      borderWidth: 5,
    },
  ],
};

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Comparativa',
    },
    legend:{
      labels: {data},
      display: true,
      align: 'center',
    }
  }}

export default function GraphicCircle() {
  return <Doughnut data={data} options={options} />;
}