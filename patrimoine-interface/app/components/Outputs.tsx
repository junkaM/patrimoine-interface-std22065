import React from 'react';
import { Typography } from '@mui/material';
import Graph from './Graph';

const Output = ({ filters }) => {
  const { dateDebut, dateFin, possesseur } = filters;

  return (
    <div>
      <Typography variant="h6">
        {possesseur ? `Analyse du patrimoine de ${possesseur}` : 'Analyse du patrimoine'}
        {' du '}
        {new Date(dateDebut).toLocaleDateString()}
        {' au '}
        {new Date(dateFin).toLocaleDateString()}
      </Typography>
      <Graph filters={filters} />
    </div>
  );
};

export default Output;
