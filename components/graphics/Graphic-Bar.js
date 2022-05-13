import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Reporte Anual',
    },
  },
  responsive: true,
  interaction: {
    //mode: 'index' as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 
'Mayo','Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

export const data = {
  labels,
  datasets: [
    {
        label: 'ISR',
        data: [65, 59, 80, 81, 56, 55, 40, 70, 23, 19, 19, 100],
        backgroundColor: /* 'rgba(106, 191, 75, 1)' ,*/ 'rgba(56, 68, 177, 1)',
        borderWidth: 0,
        borderRadius: 10,
        borderSkipped: false,
      stack: 'Stack 1',
    }
    ,{
      label: 'IVA',
      data: [35, 54, 67, 12, 36, 85, 100, 20, 43, 90, 23, 87],
      backgroundColor: 'rgba(97,97, 97, 1)',
      borderWidth: 0,
      borderRadius: 10,
      borderSkipped: false,
      stack: 'Stack 0',
    }
  ],
};


export default function GraphicBar() {
  return <Bar options={options} data={data} />;
}