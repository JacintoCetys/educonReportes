import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Paper, Card, CardContent, CardHeader, Icon, Box, TextField, Button, MenuItem, Grid } from '@mui/material';
import { ScreenSearchDesktop as ScreenSearchIcon } from '@mui/icons-material'
import { campusSistema, periodos } from '../../helpers/listas';



export const EstatusIngresoForm = ({ onHandleResultado, onHandleLoading }) => {

  const initialState = {
    periodo: '',
    anio: '',
    campus: '',
  }

  const [values, setValues] = useState(initialState);
  const { periodo, anio, campus } = values;

  const currentYear = new Date().getFullYear();
  const aPeriodo = [currentYear];
  for (let i = 1; i < 5; i++) {
    aPeriodo.push(currentYear - i);
  }

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onHandleResultado(values)
    onHandleLoading(true)
  }

  return (
    <Paper elevation={3}>
      <Card>
        <CardHeader title='Estatus ingreso' avatar={<Icon><ScreenSearchIcon /></Icon>} />
        <CardContent>
          <form autoComplete="off" noValidate onSubmit={handleSubmit} >
            <Grid container spacing={3}>
              <Grid item col xs={12} md={4}>
                <TextField
                  label="Año"
                  variant='outlined'
                  name="anio"
                  value={anio}
                  onChange={handleInputChange}
                  select
                  helperText="Selecciona Año"
                >
                  {aPeriodo.map((a) => (
                    <MenuItem key={a} value={a}>
                      {a}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Periodo"
                  variant="outlined"
                  name="periodo"
                  value={periodo}
                  onChange={handleInputChange}
                  select
                  helperText="Selecciona Periodo" >
                  {
                    periodos.map((p) => (
                      <MenuItem key={p.value} value={p.value}>
                        {p.label}
                      </MenuItem>
                    ))
                  }
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Campus"
                  variant="outlined"
                  name="campus"
                  select
                  value={campus}
                  onChange={handleInputChange}
                  helperText="Selecciona Campus"
                >
                  {campusSistema.map((c) => (
                    <MenuItem key={c.value} value={c.value}>
                      {c.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', p: 2 }}>
              <Button type="submit" color="primary" variant="contained">
                Buscar
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Paper>
  )
}

EstatusIngresoForm.propTypes = {
  onHandleResultado: PropTypes.func,
  onHandleLoading: PropTypes.func
}
