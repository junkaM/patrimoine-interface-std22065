import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const calculateValue = (initialValue, currentDate, startDate) => {
  const monthsDiff =
    (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
    (currentDate.getMonth() - startDate.getMonth());
  return initialValue * Math.pow(0.9, monthsDiff);
};

const Graph = ({ filters }) => {
  const { dateDebut, dateFin, patrimoine, tresorerie, immobilisations, obligations } = filters;

  const labels = [];
  const patrimoineData = [];
  const tresorerieData = [];
  const immobilisationsData = [];
  const obligationsData = [];

  let currentDate = new Date(dateDebut);
  while (currentDate <= new Date(dateFin)) {
    labels.push(currentDate.toLocaleDateString());
    patrimoineData.push(calculateValue(100000, currentDate, new Date(dateDebut)));
    tresorerieData.push(calculateValue(50000, currentDate, new Date(dateDebut)));
    immobilisationsData.push(calculateValue(30000, currentDate, new Date(dateDebut)));
    obligationsData.push(calculateValue(20000, currentDate, new Date(dateDebut)));
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'Patrimoine',
        data: patrimoine ? patrimoineData : [],
        borderColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Trésorerie',
        data: tresorerie ? tresorerieData : [],
        borderColor: 'rgb(54, 162, 235)',
      },
      {
        label: 'Immobilisations',
        data: immobilisations ? immobilisationsData : [],
        borderColor: 'rgb(75, 192, 192)',
      },
      {
        label: 'Obligations',
        data: obligations ? obligationsData : [],
        borderColor: 'rgb(255, 206, 86)',
      },
    ],
  };

  return <Line data={data} />;
};

export default Graph;
