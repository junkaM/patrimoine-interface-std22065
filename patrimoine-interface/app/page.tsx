"use client"

import { useState } from 'react';
import InputForm from './components/InputForm';
import Output from './components/Outputs';
import { Container, Typography } from '@mui/material';

const Home = () => {
  const [filters, setFilters] = useState({
    dateDebut: new Date(),
    dateFin: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    patrimoine: true,
    tresorerie: true,
    immobilisations: true,
    obligations: true,
    possesseur: ''
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Gestion de Patrimoine
      </Typography>
      <InputForm filters={filters} onFilterChange={handleFilterChange} />
      <Output filters={filters} />
    </Container>
  );
};

export default Home;
