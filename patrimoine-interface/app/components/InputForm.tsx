import React from 'react';
import { TextField, FormControlLabel, Checkbox, Grid, Grid2 } from '@mui/material';

const InputForm = ({ filters, onFilterChange }) => {
  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    onFilterChange({
      ...filters,
      [name]: type === 'checkbox' ? checked : (name.includes('date') ? new Date(value) : value),
    });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          label="Possesseur du patrimoine"
          name="possesseur"
          value={filters.possesseur}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Date de début"
          type="date"
          name="dateDebut"
          value={filters.dateDebut instanceof Date && !isNaN(filters.dateDebut) ? filters.dateDebut.toISOString().split('T')[0] : ''}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Date de fin"
          type="date"
          name="dateFin"
          value={filters.dateFin instanceof Date && !isNaN(filters.dateFin) ? filters.dateFin.toISOString().split('T')[0] : ''}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.patrimoine}
              onChange={handleChange}
              name="patrimoine"
            />
          }
          label="Patrimoine"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.tresorerie}
              onChange={handleChange}
              name="tresorerie"
            />
          }
          label="Trésorerie"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.immobilisations}
              onChange={handleChange}
              name="immobilisations"
            />
          }
          label="Immobilisations"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.obligations}
              onChange={handleChange}
              name="obligations"
            />
          }
          label="Obligations"
        />
      </Grid>
    </Grid>
  );
};

export default InputForm;
